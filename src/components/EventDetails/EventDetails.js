import React from "react";
import { Cpu, Bot, Trophy, Zap } from "lucide-react";

const features = [
  {
    icon: <Cpu size={40} />,
    title: "ROBORACE",
    description:
      "Unleash speed and precision as your robot conquers challenging tracks with ultimate control and performance.",
  },
  {
    icon: <Bot size={40} />,
    title: "LINE FOLLOWER",
    description:
      "Test your bot’s intelligence and accuracy as it follows complex paths with flawless navigation.",
  },
  {
    icon: <Zap size={40} />,
    title: "ROBO SOCCER",
    description:
      "Experience the thrill of robotic teamwork where strategy meets real-time action on the arena field.",
  },
  {
    icon: <Trophy size={40} />,
    title: "ROBO SUMO",
    description:
      "Battle for dominance! Push, outsmart, and overpower your opponent in the ultimate sumo showdown.",
  },
  {
    icon: <Cpu size={40} />,
    title: "FULL THROTTLE",
    description:
      "Push your machine to the limits in a high-speed endurance challenge built for extreme performance.",
  },
];

function EventDetails() {
  return (
    <section className="bg-[#020617] text-white py-24 px-6 text-center">

      {/* Heading */}
      <h1
        className="text-5xl md:text-6xl font-bold mb-6"
        style={{
          color: "#67e8f9",
          textShadow: "0 0 20px #22d3ee",
        }}
      >
        MECHATHLON 2026
      </h1>

      {/* Subtitle */}
      <p className="max-w-3xl mx-auto text-gray-400 mb-16">
        Where machines come alive and engineering meets adrenaline. 
        MECHATHLON 2026 is the ultimate robotics battleground designed to test 
        speed, precision, intelligence, and raw power.
      </p>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {features.map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#0f172a] to-[#020617] hover:scale-105 transition duration-300"
          >
            <div className="mb-6 flex justify-center">
              <div className="p-4 rounded-xl bg-black/40 text-cyan-300">
                {item.icon}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-cyan-200">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      
      </div>

      {/* WHY JOIN SECTION */}
      <div
        style={{
          margin: "80px auto",
          maxWidth: "1200px",
          padding: "60px 40px",
          borderRadius: "20px",
          textAlign: "center",
          color: "white",
          border: "1px solid rgba(34,211,238,0.3)",
          background:
            "linear-gradient(135deg, rgba(2,6,23,0.95), rgba(15,23,42,0.95))",
          boxShadow: "0 0 40px rgba(34,211,238,0.2)",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#67e8f9",
          }}
        >
          Why Join MECHATHLON?
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#9ca3af",
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          This is not just an event — it’s an arena of innovation and competition.
          MECHATHLON brings together the most passionate engineers and creators
          to design, build, and battle intelligent machines. Experience real-time
          challenges, high-speed races, and intense robotic combat while showcasing
          your technical excellence and creativity.
        </p>
      </div>

    </section>
  );
}

export default EventDetails;