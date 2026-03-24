import React from "react";

const events = [
  {
    name: "RoboRace",
    title: "Ready to Race",
    date: "21 April 2026",
    time: "10:00 AM",
    venue: "T John Institute of Technology",
    image: "/Teams/manja.png",
    rulebook: "#",
  },
  {
    name: "Line Follower",
    title: "theme",
    date: "21 April 2026",
    time: "10:00 AM",
    venue: "T John Institute of Technology",
    image: "/Teams/arti.png",
    rulebook: "#",
  },
  {
    name: "Robo Scoccer",
    title: "Theme",
    date: "21 April 2026",
    time: "10:00 AM",
    venue: "All Domains",
    image: "/Teams/silvya.png",
    rulebook: "#",
  },
  {
    name: "Robo Scoccer",
    title: "Theme",
    date: "21 April 2026",
    time: "10:00 AM",
    venue: "All Domains",
    image: "/Teams/silvya.png",
    rulebook: "#",
  },
  {
    name: "Robo Scoccer",
    title: "Theme",
    date: "21 April 2026",
    time: "10:00 AM",
    venue: "All Domains",
    image: "/Teams/silvya.png",
    rulebook: "#",
  },
];

function EventOverview() {
  return (
    <div className="bg-[#020617] text-white py-20 px-6">

      {/* Heading */}
      <h1 className="text-center text-5xl font-bold mb-16 text-cyan-300 drop-shadow-[0_0_20px_#38bdf8]">
        EVENT OVERVIEW
      </h1>

      {/* Cards */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        {events.map((event, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-500"
          >

            {/* Background Image */}
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-6 w-full">

              <h2 className="text-2xl font-bold text-cyan-300 mb-1">
                {event.name}
              </h2>

              <p className="text-sm text-gray-300 mb-2">
                {event.title}
              </p>

              <div className="text-sm text-gray-200 space-y-1">
                <p>📅 {event.date}</p>
                <p>⏰ {event.time}</p>
                <p>📍 {event.venue}</p>
              </div>

              {/* Button */}
              <button className="mt-4 w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2 rounded-lg transition">
                📘 Rule Book
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default EventOverview;