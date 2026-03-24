import React, { useRef, useEffect, useState } from "react";

function StudentTeam() {

  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const teamMembers = [
    {
      name: "Akshay G",
      role: "Head Co-Ordinator",
      image: "/Teams/akshay.jpeg"
    },
    {
      name: "Darshan",
      role: "Student Co-Ordinator",
      image: "/Teams/darshan.jpeg"
    },
    {
      name: "Ramsagar Bhandari V",
      role: "Student Co-Ordinator",
      image: "/Teams/ram.jpg"
    }
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
          text-align:center;
          padding:30px 20px 60px;
          color:white;
        }

        .team-header{
          display:flex;
          justify-content:center;
          align-items:center;
          gap:15px;
          margin-bottom:20px;
        }

        .team-icon{
          width:50px;
          height:50px;
          display:flex;
          justify-content:center;
          align-items:center;
          border-radius:12px;
          background:linear-gradient(135deg,#7c3aed,#a855f7);
          font-size:24px;
        }

        .team-title{
          font-size:48px;
          font-weight:800;
          letter-spacing:6px;
          color:#67e8f9;
          text-shadow:
          0 0 10px #22d3ee,
          0 0 20px #06b6d4;
        }

        .team-divider{
          width:100px;
          height:3px;
          background:linear-gradient(90deg,#a855f7,#6366f1);
          margin:20px auto 30px;
          border-radius:5px;
        }

        /* Carousel styles */

        .carousel-wrapper{
          position:relative;
        }

        .team-track{
          display:flex;
          gap:30px;
          overflow-x:auto;
          scroll-behavior:smooth;
          padding:20px;
          justify-content:center;
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

        @media(max-width:768px){
          .team-title{
            font-size:32px;
            letter-spacing:3px;
          }

          .team-icon{
            width:40px;
            height:40px;
          }
        }

      `}</style>

      <section className="team-section">

        <div className="team-header">
          <div className="team-icon">👥</div>
          <h1 className="team-title">STUDENT COORDINATORS</h1>
        </div>

        <div className="team-divider"></div>

        {/* Carousel */}
        <div className="carousel-wrapper">

          <button className="nav-btn left-btn" onClick={() => scroll("left")}>
            ⬅
          </button>

          <button className="nav-btn right-btn" onClick={() => scroll("right")}>
            ➡
          </button>

          <div
            className="team-track"
            ref={scrollRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {teamMembers.map((member, index) => (
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

export default StudentTeam;