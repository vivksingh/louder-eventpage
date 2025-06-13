import { useState } from "react";

export default function CardComponent() {
  const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      className="relative w-72 h-[400px] bg-gray-900 rounded-xl overflow-hidden shadow-xl cursor-pointer"
      onClick={handleCardClick}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b5/800x600_Wallpaper_Blue_Sky.png"
        alt="Card"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${
          isActive ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      />

      <div
        className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3 transition-opacity duration-500 ease-in-out ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <button className="px-5 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors">
          Buy Now
        </button>
        <button className="px-5 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors">
          Book a Table
        </button>
        <button className="px-5 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors">
          More Info
        </button>
      </div>
    </div>
  );
}
