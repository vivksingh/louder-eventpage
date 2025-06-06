import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const events = [
  { id: 1, title: "SATURDAY NIGHT FEVER", date: "SAT 15 JUNE", image: "/placeholder.svg?height=800&width=600", slug: "saturday-night-fever-2025-06-15" },
  { id: 2, title: "BOLLYWOOD BASH", date: "SAT 22 JUNE", image: "/placeholder.svg?height=800&width=600", slug: "bollywood-bash-2025-06-22" },
  { id: 3, title: "RETRO CLASSICS", date: "SAT 29 JUNE", image: "/placeholder.svg?height=800&width=600", slug: "retro-classics-2025-06-29" },
  { id: 4, title: "SUMMER VIBES", date: "SAT 06 JULY", image: "/placeholder.svg?height=800&width=600", slug: "summer-vibes-2025-07-06" },
  { id: 5, title: "HOUSE MUSIC NIGHT", date: "SAT 13 JULY", image: "/placeholder.svg?height=800&width=600", slug: "house-music-night-2025-07-13" },
  { id: 6, title: "HIP HOP TAKEOVER", date: "SAT 20 JULY", image: "/placeholder.svg?height=800&width=600", slug: "hip-hop-takeover-2025-07-20" },
  { id: 7, title: "LATIN FUSION", date: "SAT 27 JULY", image: "/placeholder.svg?height=800&width=600", slug: "latin-fusion-2025-07-27" },
  { id: 8, title: "TECHNO UNDERGROUND", date: "SAT 03 AUG", image: "/placeholder.svg?height=800&width=600", slug: "techno-underground-2025-08-03" },
  { id: 9, title: "R&B CLASSICS", date: "SAT 10 AUG", image: "/placeholder.svg?height=800&width=600", slug: "rnb-classics-2025-08-10" },
  { id: 10, title: "COMMERCIAL HITS", date: "SAT 17 AUG", image: "/placeholder.svg?height=800&width=600", slug: "commercial-hits-2025-08-17" },
  { id: 11, title: "DEEP HOUSE SESSION", date: "SAT 24 AUG", image: "/placeholder.svg?height=800&width=600", slug: "deep-house-session-2025-08-24" },
  { id: 12, title: "THROWBACK THURSDAY", date: "SAT 31 AUG", image: "/placeholder.svg?height=800&width=600", slug: "throwback-thursday-2025-08-31" },
];

// Month name mapping
const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUNE",
  "JULY",
  "AUG",
  "SEPT",
  "OCT",
  "NOV",
  "DEC",
];

// Helper to get next 4 months from today
const getNext4Months = () => {
  const today = new Date();
  const currentMonthIndex = today.getMonth(); // 0-based
  const next4 = [];

  for (let i = 0; i < 4; i++) {
    const monthIndex = (currentMonthIndex + i) % 12;
    next4.push(MONTHS[monthIndex]);
  }

  return next4;
};

// Helper to extract month from event.date string
const getMonthFromDate = (dateStr) => {
  const parts = dateStr.split(" ");
  return parts[2]; // Example: "SAT 15 JUNE" → "JUNE"
};

export default function Events() {
  const [filter, setFilter] = useState("ALL");

  const next4Months = getNext4Months();

  const filteredEvents = events.filter((event) => {
    const eventMonth = getMonthFromDate(event.date);

    if (filter === "ALL") return true;

    if (filter === "UP NEXT") {
      // Show next 4 upcoming events (based on array order — can be improved to use date)
      const eventIndex = events.indexOf(event);
      return eventIndex < 4;
    }

    return eventMonth === filter;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">EVENTS CALENDAR</h1>

        {/* Filter Bar */}
        <div className="flex justify-center mb-12 flex-wrap gap-4">
          {["UP NEXT", ...next4Months, "ALL"].map((item) => (
            <Button
              key={item}
              variant={filter === item ? "default" : "outline"}
              className={`border-black ${filter === item ? "bg-black text-white" : "hover:bg-black hover:text-white"}`}
              onClick={() => setFilter(item)}
            >
              {item}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <div className="mb-2 text-sm font-medium">{event.date}</div>
              <h3 className="text-xl font-bold mb-4">{event.title}</h3>
              <div className="space-y-2">
                <Link to={`/event/tickets/${event.slug}`}>
                  <Button className="w-full bg-black text-white hover:bg-gray-800">BUY TICKETS</Button>
                </Link>
                <Link to="/vip-tables">
                  <Button variant="outline" className="w-full border-black hover:bg-black hover:text-white">
                    VIP TABLES
                  </Button>
                </Link>
                <Link to={`/event/${event.slug}`}>
                  <Button variant="ghost" className="w-full hover:bg-gray-100">
                    FIND OUT MORE
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
