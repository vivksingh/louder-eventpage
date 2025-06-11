  import React, { useState, useEffect, useRef } from "react"
  import { Link } from "react-router-dom"
  import { Button } from "../components/ui/button"
  import { ChartNoAxesColumnIcon, ChevronLeft, ChevronRight } from "lucide-react"
  import { useSelector, useDispatch } from "react-redux"
  import { fetchEvents } from "../features/event/eventSlice"
  import Loader from "../components/Loader"

//   const events = [
//   {
//     _id: "6847da5d7a3a12a3c1a753ab",
//     name: "Summer Music Festival",
//     start_date: "2025-07-20T18:00:00.000Z",
//     end_date: "2025-07-21T02:00:00.000Z",
//     created_on: "2025-06-10T07:03:52.347Z",
//     description: "Join us for an unforgettable night of live music, food, and fun under the stars!",
//     imgsrc: "https://example.com/images/event-summer-festival.jpg",
//     redirection_url: "https://example.com/event/summer-festival-tickets",
//     status: true,
//     __v: 0,
//   },
//   {
//     _id: "7848fa6c9b1e43c9c3f45bdf",
//     name: "Bollywood Bash",
//     start_date: "2025-07-27T19:00:00.000Z",
//     end_date: "2025-07-28T03:00:00.000Z",
//     created_on: "2025-06-11T09:15:22.347Z",
//     description: "Experience the best Bollywood hits and dance the night away!",
//     imgsrc: "https://example.com/images/event-bollywood-bash.jpg",
//     redirection_url: "https://example.com/event/bollywood-bash-tickets",
//     status: true,
//     __v: 0,
//   },
//   {
//     _id: "4597bd9c2f7e34b5c9f27aba",
//     name: "House Music Night",
//     start_date: "2025-08-03T20:00:00.000Z",
//     end_date: "2025-08-04T04:00:00.000Z",
//     created_on: "2025-06-12T10:22:30.347Z",
//     description: "Feel the beat with the latest and greatest house tracks!",
//     imgsrc: "https://example.com/images/event-house-music-night.jpg",
//     redirection_url: "https://example.com/event/house-music-night-tickets",
//     status: true,
//     __v: 0,
//   },
//   {
//     _id: "9b5dca7e72f04f10a789cd9e",
//     name: "Hip Hop Takeover",
//     start_date: "2025-08-10T21:00:00.000Z",
//     end_date: "2025-08-11T05:00:00.000Z",
//     created_on: "2025-06-13T11:30:15.347Z",
//     description: "Non-stop hip hop and urban beats all night long.",
//     imgsrc: "https://example.com/images/event-hip-hop-takeover.jpg",
//     redirection_url: "https://example.com/event/hip-hop-takeover-tickets",
//     status: true,
//     __v: 0,
//   },
//   {
//     _id: "5f6ae3b6742d47f3b123cd0e",
//     name: "Latin Fusion Fiesta",
//     start_date: "2025-08-17T19:30:00.000Z",
//     end_date: "2025-08-18T02:30:00.000Z",
//     created_on: "2025-06-14T12:45:00.347Z",
//     description: "Spicy Latin beats and a night full of salsa and bachata!",
//     imgsrc: "https://example.com/images/event-latin-fusion.jpg",
//     redirection_url: "https://example.com/event/latin-fusion-tickets",
//     status: true,
//     __v: 0,
//   },
//   {
//     _id: "a74fe29391d8420b8a7a8cde",
//     name: "Techno Underground",
//     start_date: "2025-08-24T23:00:00.000Z",
//     end_date: "2025-08-25T06:00:00.000Z",
//     created_on: "2025-06-15T14:10:00.347Z",
//     description: "Lose yourself to deep techno vibes in an underground setting.",
//     imgsrc: "https://example.com/images/event-techno-underground.jpg",
//     redirection_url: "https://example.com/event/techno-underground-tickets",
//     status: true,
//     __v: 0,
//   },
//   {
//     _id: "f4c8ecba58154d0e9184bcef",
//     name: "Retro Classics Night",
//     start_date: "2025-08-31T18:00:00.000Z",
//     end_date: "2025-09-01T02:00:00.000Z",
//     created_on: "2025-06-16T15:25:00.347Z",
//     description: "Dance to the greatest hits from the 70s, 80s, and 90s.",
//     imgsrc: "https://example.com/images/event-retro-classics.jpg",
//     redirection_url: "https://example.com/event/retro-classics-tickets",
//     status: true,
//     __v: 0,
//   },
//   {
//     _id: "6cb2f07a342a4b3e98cfb8bd",
//     name: "NYE Party 2025",
//     start_date: "2025-12-31T20:00:00.000Z",
//     end_date: "2026-01-01T04:00:00.000Z",
//     created_on: "2025-06-17T16:35:00.347Z",
//     description: "Ring in the New Year with style — the biggest party of the year!",
//     imgsrc: "https://example.com/images/event-nye-2025.jpg",
//     redirection_url: "https://example.com/event/nye-party-2025-tickets",
//     status: true,
//     __v: 0,
//   },
// ]


  const residents = [
    { id: 1, name: "DJ SMITH", image: "https://tixmojo.com/useruploads/events/main_d6360e60a5.jpg", genre: "House" },
    { id: 2, name: "DJ RODRIGUEZ", image: "https://tixmojo.com/useruploads/events/main_4dbd75357a.jpg", genre: "Hip Hop" },
    { id: 3, name: "DJ PATEL", image: "https://tixmojo.com/useruploads/events/main_a38b3715ca.jpg", genre: "Bollywood" },
    { id: 4, name: "DJ WILLIAMS", image: "https://tixmojo.com/useruploads/events/main_35e7128aed.jpg", genre: "R&B" },
    { id: 5, name: "DJ CHEN", image: "https://tixmojo.com/useruploads/events/main_d6360e60a5.jpg", genre: "Electronic" },
    { id: 6, name: "DJ GARCIA", image: "https://tixmojo.com/useruploads/events/main_283ca5989c.jpg", genre: "Latin" },
    { id: 7, name: "DJ JOHNSON", image: "https://tixmojo.com/useruploads/events/main_d7aeffe4fa.jpg", genre: "Techno" },
  ]

  const specialEvents = [
    {
      id: 1,
      title: "NEW YEAR'S EVE",
      date: "31 DEC",
      image: "https://tixmojo.com/useruploads/events/main_4dbd75357a.jpg",
      link: "/event/new-years-eve-2025-12-31",
    },
    {
      id: 2,
      title: "VALENTINE'S SPECIAL",
      date: "14 FEB",
      image: "https://tixmojo.com/useruploads/events/main_4dbd75357a.jpg",
      link: "/event/valentines-special-2026-02-14",
    },
    {
      id: 3,
      title: "HALLOWEEN HORROR",
      date: "31 OCT",
      image: "https://tixmojo.com/useruploads/events/main_a38b3715ca.jpg",
      link: "/event/halloween-horror-2025-10-31",
    },
    {
      id: 4,
      title: "SUMMER FESTIVAL",
      date: "15 AUG",
      image: "https://tixmojo.com/useruploads/events/main_35e7128aed.jpg",
      link: "/event/summer-festival-2025-08-15",
    },
  ]

  const musicPlaylists = [
    {
      id: 1,
      title: "House Classics",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX32NsLKyzScr",
    },
    {
      id: 2,
      title: "Hip Hop Hits",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd",
    },
    {
      id: 3,
      title: "Electronic Vibes",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4dyzvuaRJ0n",
    },
    {
      id: 4,
      title: "Bollywood Beats",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1vKzOTZ7jRm",
    },
    {
      id: 5,
      title: "Latin Rhythms",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX10zKzsJ2jva",
    },
    {
      id: 6,
      title: "R&B Classics",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWYmmr74INdgF",
    },
  ]

  export default function Home() {
    const [scrollText, setScrollText] = useState(
      "TAMASHA CLUB - THE ULTIMATE NIGHTLIFE EXPERIENCE - EVERY SATURDAY NIGHT - ",
    )
    const [currentEventIndex, setCurrentEventIndex] = useState(0)
    const [currentResidentIndex, setCurrentResidentIndex] = useState(0)
    const [currentSpecialEventIndex, setCurrentSpecialEventIndex] = useState(0)
    const [currentMusicIndex, setCurrentMusicIndex] = useState(0)
    const ticketsRef = useRef(null)
    const events = useSelector(state => state.Events.events);
    
    const loading = useSelector(state => state.Events.loading);
    const error = useSelector(state => state.Events.error);
    const dispatch = useDispatch();
    
    
    useEffect(() => {
      const interval = setInterval(() => {
        setScrollText((prev) => prev.substring(1) + prev.charAt(0))
      }, 150)

      return () => clearInterval(interval)
    }, [])

//     useEffect(() => {
//   console.log("Events updated:", events2);
// }, [events2]);


    useEffect(() => {
      dispatch(fetchEvents());
    }, [dispatch])

    // Animation for SVG letters
    useEffect(() => {
      if(!loading)
      {
      const words = ["TAMASHA", "NIGHTS", "MUSIC", "DANCE", "VIBES"];
      const container = document.getElementById("animator");

      let currentWordIndex = 0;
      let phase = "reveal"; // reveal → hold → hide
      let visibleLetters = [];

      function showNextFrame() {
        const word = words[currentWordIndex];
        if (phase === "reveal") {
          if (visibleLetters.length < word.length) {
            visibleLetters.push(word[visibleLetters.length]);
            updateDisplay();
            setTimeout(showNextFrame, 100);
          } else {
            phase = "hold";
            setTimeout(showNextFrame, 800);
          }
        } else if (phase === "hold") {
          phase = "hide";
          setTimeout(showNextFrame, 400);
        } else if (phase === "hide") {
          if (visibleLetters.length > 0) {
            visibleLetters.pop();
            updateDisplay();
            setTimeout(showNextFrame, 60);
          } else {
            phase = "reveal";
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(showNextFrame, 200);
          }
        }
      }

      function updateDisplay() {
        container.innerHTML = "";
        visibleLetters.forEach((char, i) => {
          const span = document.createElement("span");
          span.classList.add("letter", "show");
          span.textContent = char;
          container.appendChild(span);
        });
      }

      // Start the loop
      showNextFrame()
    };
    }, []);


    const nextEvent = () => {
      setCurrentEventIndex((prev) => (prev + 1) % events.length)
    }

    const prevEvent = () => {
      setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length)
    }

    const nextResident = () => {
      setCurrentResidentIndex((prev) => (prev + 1) % Math.ceil(residents.length / 4))
    }

    const prevResident = () => {
      setCurrentResidentIndex((prev) => (prev - 1 + Math.ceil(residents.length / 4)) % Math.ceil(residents.length / 4))
    }

    const nextSpecialEvent = () => {
      setCurrentSpecialEventIndex((prev) => (prev + 1) % Math.ceil(specialEvents.length / 2))
    }

    const prevSpecialEvent = () => {
      setCurrentSpecialEventIndex(
        (prev) => (prev - 1 + Math.ceil(specialEvents.length / 2)) % Math.ceil(specialEvents.length / 2),
      )
    }

    const nextMusic = () => {
      setCurrentMusicIndex((prev) => (prev + 1) % Math.ceil(musicPlaylists.length / 3))
    }

    const prevMusic = () => {
      setCurrentMusicIndex(
        (prev) => (prev - 1 + Math.ceil(musicPlaylists.length / 3)) % Math.ceil(musicPlaylists.length / 3),
      )
    }

    const scrollToTickets = () => {
      ticketsRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    const openReadMore = () => {
      window.open("/about-club", "_blank")
    }

    return (
      <>
      {loading ? (<Loader />) : 
        <div className="pt-12">
          <div>

            {/* <section className="h-screen flex flex-col justify-center items-center relative">

              <div class="word-animator" id="animator"></div>
              
              <div className=" bottom-0 left-0 right-0 text-black py-2 px-4">
                <div className="flex justify-center items-center px-4">
                <p className="text-lg text-center max-w-9xl text-black">
                  Welcome to the future of clubbing. Officially the World's #1 Club, Tamasha is a 360 nightlife experience featuring the world's best DJs, incredible production, plus so much more.
                  As a multi-room venue, every element has been precision-engineered to deliver a new excellence in clubbing.
                  Our pioneering music program encompasses three state-of-the-art rooms, with cutting-edge artists, surprise special guests and impromptu B2Bs.
                </p>
              </div>
              <br /> <br />
                <div className="container mx-auto">
                  <h2 className="text-4xl font-bold mb-6 text-center">TICKETS</h2>
                  <div className="flex justify-center space-x-4">
                    <Button onClick={openReadMore} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                      Read More
                    </Button>
                    <Link to="/vip-tables">
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
                      >
                        VIP Tables
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

            </section> */ }


          <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">

    {/* Video Background */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/vid1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay (optional — darkens video so text is readable) */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* Word Animator */}
    <div className="relative z-10 word-animator" id="animator"></div>

    {/* Tickets Section */}
    <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-12 z-10">
      <div className="text-white px-6 py-6 w-full max-w-2xl mb-12">
        <h2 className="text-4xl font-bold mb-6 text-center p-2">TICKETS</h2>
        <div className="flex justify-center space-x-4">
          <Button
            onClick={openReadMore}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
          >
            Read More
          </Button>
          <Link to="/vip-tables">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
              VIP Tables
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
            
          </div>

          {/* <section className="py-4 overflow-hidden border-y border-black">
            <div className="whitespace-nowrap text-2xl font-bold">{scrollText.repeat(3)}</div>
          </section> */}

          {/* UPCOMING events */}
          {/* <section ref={ticketsRef} className="py-12 text-black">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 ">UPCOMING EVENTS</h2>

              <div className="relative bg-black border border-white text-white p-8 rounded-lg">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold">{events[currentEventIndex].date}</h3>
                  <div className="flex space-x-2">
                    <Button
                      
                      size="icon"
                      onClick={prevEvent}
                      className="rounded-full border-white text-white hover:bg-white hover:text-black"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      
                      size="icon"
                      onClick={nextEvent}
                      className="rounded-full border-white text-white hover:bg-white hover:text-black"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={events[currentEventIndex].image || "/placeholder.svg"}
                      alt={events[currentEventIndex].title}
                      className="max-w-sm h-auto aspect-[3/4] object-cover flex justify-center items-center mx-auto mb-6 rounded-lg shadow-lg"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">{events[currentEventIndex].title}</h3>
                      <p className="mb-6">
                        Experience the ultimate nightlife at Tamasha Club with our signature Saturday night event. Featuring
                        the best DJs, incredible sound system, and an atmosphere like no other.
                      </p>
                    </div>

                    
                    <div className="space-y-4">
                      <Link to={events[currentEventIndex].link}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">BUY TICKETS</Button>
                      </Link>
                      <Link to="/vip-tables">
                        <Button
                        variant="ghost"
                          className="w-full text-white hover:bg-white hover:text-black"
                        >
                          VIP TABLES
                        </Button>
                      </Link>
                      <Link to={events[currentEventIndex].link}>
                        <Button variant="ghost" className="w-full text-white hover:bg-white hover:text-black">
                          FIND OUT MORE
                        </Button>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>  */}

          <section ref={ticketsRef} className="py-12 text-black">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12">UPCOMING EVENTS</h2>

              <div className="relative bg-black border border-white text-white p-8 rounded-lg">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold">
                    {new Date(events[currentEventIndex].start_date).toLocaleDateString("en-GB", {
                      weekday: "short",
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </h3>
                  <div className="flex space-x-2">
                    <Button
                      size="icon"
                      onClick={prevEvent}
                      className="rounded-full border-white text-white hover:bg-white hover:text-black"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      size="icon"
                      onClick={nextEvent}
                      className="rounded-full border-white text-white hover:bg-white hover:text-black"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={events[currentEventIndex].imgsrc || "/placeholder.svg"}
                      alt={events[currentEventIndex].name}
                      className="max-w-sm h-auto aspect-[3/4] object-cover flex justify-center items-center mx-auto mb-6 rounded-lg shadow-lg"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">{events[currentEventIndex].name}</h3>
                      <p className="mb-6">{events[currentEventIndex].description}</p>
                    </div>

                    <div className="space-y-4">
                      <a href={events[currentEventIndex].redirection_url} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">BUY TICKETS</Button>
                      </a>
                      <Link to="/vip-tables">
                        <Button variant="ghost" className="w-full text-white hover:bg-white hover:text-black">
                          VIP TABLES
                        </Button>
                      </Link>
                      <a href={events[currentEventIndex].redirection_url} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" className="w-full text-white hover:bg-white hover:text-black">
                          FIND OUT MORE
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-bold">EVENTS</h2>
                <div className="flex items-center space-x-4">
                  <Link to="/residents">
                    <Button variant="outline" className="border-black hover:bg-black hover:text-white">
                      SHOW ALL
                    </Button>
                  </Link>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevResident}
                      className="rounded-full border-black hover:bg-black hover:text-white"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextResident}
                      className="rounded-full border-black hover:bg-black hover:text-white"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {residents.slice(currentResidentIndex * 4, (currentResidentIndex + 1) * 4).map((resident) => (
                  <div key={resident.id} className="text-center">
                    <div className="mb-4 aspect-square relative overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={resident.image || "/placeholder.svg"}
                        alt={resident.name}
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <h3 className="text-xl font-bold">{resident.name}</h3>
                    <p className="text-sm text-gray-600">{resident.genre}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-bold">SPECIAL EVENTS</h2>
              
                <div className="flex items-center space-x-4">
                  <Link to="/special-events">
                    <Button className="border-white text-white hover:bg-white hover:text-black">
                      SHOW ALL
                    </Button>
                  </Link>
                  <div className="flex space-x-2">
                    <Button
                      
                      size="icon"
                      onClick={prevSpecialEvent}
                      className="rounded-full border-white text-white hover:bg-white hover:text-black"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                    
                      size="icon"
                      onClick={nextSpecialEvent}
                      className="rounded-full border-white text-white hover:bg-white hover:text-black"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                {specialEvents.slice(currentSpecialEventIndex * 2, (currentSpecialEventIndex + 1) * 2).map((event) => (
                  <Link to={event.link} key={event.id} className="group">
                    <div className="p-8 bg-black rounded-lg relative aspect-video overflow-hidden mb-4">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                        <div>
                          <div className="text-sm font-medium mb-1">{event.date}</div>
                          <h3 className="text-2xl font-bold">{event.title}</h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section> */}

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-bold">MUSIC</h2>
                <div className="flex items-center space-x-4">
                  <Link to="/music">
                    <Button variant="outline" className="border-black hover:bg-black hover:text-white">
                      SHOW ALL
                    </Button>
                  </Link>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevMusic}
                      className="rounded-full border-black hover:bg-black hover:text-white"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextMusic}
                      className="rounded-full border-black hover:bg-black hover:text-white"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {musicPlaylists.slice(currentMusicIndex * 3, (currentMusicIndex + 1) * 3).map((playlist) => (
                  <div key={playlist.id} className="aspect-square bg-gray-100 flex flex-col">
                    <div className="p-4 bg-black text-white">
                      <h3 className="font-bold">{playlist.title}</h3>
                    </div>
                    <div className="flex-1">
                      <iframe
                        src={playlist.embedUrl}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section> 


          <section className="w-full min-h-screen flex flex-col justify-center items-center px-6 ">
            <div className="max-w-4xl">
              {/* Main Title */}
              <h1 className="text-3xl font-bold mb-8  text-center">TAMASHA</h1>

              {/* Subheading */}
              <h2 className="text-2xl font-bold mb-6  text-center">Welcome to the future of nightlife.</h2>

              {/* Paragraphs */}
              <p className="text-lg text-gray-700 mb-4">
                Tamasha is redefining nightlife experiences across the globe — an immersive world of music, dance, and culture where every night is unforgettable.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                Our multi-room venues are designed to deliver the ultimate sensory experience, with cutting-edge sound, spectacular visuals, and top-tier DJs bringing the energy to life.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                At Tamasha, every event is curated to perfection — from exclusive VIP experiences to vibrant dance floors that keep you moving all night long.
              </p>

              <p className="text-lg text-gray-700">
                Discover your new favorite party, indulge in luxury, and lose yourself in the rhythm. Welcome to Tamasha — where the night comes alive.
              </p>
            </div>
          </section>
        </div>
      }
      </>
    )
  }