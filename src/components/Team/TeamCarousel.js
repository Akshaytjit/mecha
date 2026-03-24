import React, { useRef, useEffect, useState } from "react";

function TeamCarousel() {

  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const teamMembers = [
    {
      name: "Thomas John",
      role: "Chairman",
      image: "/Teams/tjohn.png"
    },
    {
      name: "Dr. HP Srinivasa",
      role: "Principal of T John Institute of Technology",
      image: "/Teams/srinivasa.png"
    },
    {
      name: "Dr. Drakshayini M N",
      role: "Professor & HOD of ECE",
      image: "/Teams/dakshahini.png"
    },
    {
      name: "Dr. V Manjunath",
      role: "Professor & (Faculty Co-Ordinator)",
      image: "/Teams/manja.png"
    },
    {
      name: "Mrs. J.Aarthy Suganthi Kani",
      role: "Assistant Professor & (Faculty Co-Ordinator)",
      image: "/Teams/arti.png"
    },
    {
      name: "Ms. Sylvia Raj Isreal",
      role: "Assistant Professor & (Faculty Co-Ordinator)",
      image: "/Teams/silvya.png"
    },
  ];

  // 🔁 AUTO SCROLL
  useEffect(() => {
    const container = scrollRef.current;

    const interval = setInterval(() => {
      if (!isHovering) {
        container.scrollBy({ left: 1 });

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
          container.scrollTo({ left: 0 });
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isHovering]);

  // ⬅️➡️ MANUAL SCROLL
  const scroll = (direction) => {
    const container = scrollRef.current;
    const amount = 300;

    if (direction === "left") {
      container.scrollBy({ left: -amount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`

      .team-section{
        background:#020617;
        padding:40px 0;
        position:relative;
      }

      .carousel-wrapper{
        position:relative;
      }

      .team-track{
        display:flex;
        gap:30px;
        overflow-x:auto;
        scroll-behavior:smooth;
        padding:20px;
      }

      .team-track::-webkit-scrollbar{
        display:none;
      }

      .team-card{
        min-width:260px;
        max-width:260px;
        border-radius:20px;
        overflow:hidden;
        background:#030712;
        border:1px solid #1e293b;
        text-align:center;
        color:white;
        flex-shrink:0;
        transition:transform 0.3s;
      }

      .team-card:hover{
        transform:translateY(-5px);
      }

      /* ✅ FIXED IMAGE DIMENSIONS */
      .team-img{
        width:100%;
        height:280px;
        object-fit:cover;
        object-position:top;
        background:#111827;
        transition:transform 0.4s;
      }

      .team-card:hover .team-img{
        transform:scale(1.05);
      }

      .team-content{
        padding:18px;
      }

      .team-name{
        font-size:18px;
        font-weight:700;
        margin-bottom:8px;
      }

      .team-role{
        font-size:13px;
        color:#22d3ee;
        letter-spacing:1px;
      }

      .nav-btn{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        background:#0f172a;
        border:none;
        color:white;
        font-size:20px;
        padding:10px 14px;
        cursor:pointer;
        border-radius:10px;
        z-index:10;
        opacity:0.8;
      }

      .nav-btn:hover{
        opacity:1;
      }

      .left-btn{ left:10px; }
      .right-btn{ right:10px; }

      `}</style>

      <section className="team-section">

        <div className="carousel-wrapper">

          {/* Buttons */}
          <button className="nav-btn left-btn" onClick={() => scroll("left")}>
            ⬅
          </button>

          <button className="nav-btn right-btn" onClick={() => scroll("right")}>
            ➡
          </button>

          {/* Carousel */}
          <div
            className="team-track"
            ref={scrollRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div className="team-card" key={index}>

                <img
                  src={member.image}
                  alt={member.name}
                  className="team-img"
                />

                <div className="team-content">
                  <div className="team-name">{member.name}</div>
                  <div className="team-role">{member.role}</div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </section>
    </>
  );
}

export default TeamCarousel;