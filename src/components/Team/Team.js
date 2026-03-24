import React from "react";
import TeamCarousel from "./TeamCarousel";

function Team() {
  return (
    <>
      <style>{`

        .team-section{
          background:#020617;
          text-align:center;
          padding:80px 20px;
          color:white;
        }

        .team-header{
          display:flex;
          justify-content:center;
          align-items:center;
          gap:20px;
          margin-bottom:25px;
        }

        .team-icon{
          width:60px;
          height:60px;
          display:flex;
          justify-content:center;
          align-items:center;
          border-radius:12px;
          background:linear-gradient(135deg,#7c3aed,#a855f7);
          font-size:28px;
        }

        .team-title{
          font-size:64px;
          font-weight:800;
          letter-spacing:10px;
          color:#67e8f9;

          text-shadow:
          0 0 15px #22d3ee,
          0 0 30px #06b6d4,
          0 0 60px #0891b2;
        }

        .team-subtitle{
          font-size:20px;
          color:#9ca3af;
          margin-top:20px;
        }

        .team-divider{
          width:120px;
          height:3px;
          background:linear-gradient(90deg,#a855f7,#6366f1);
          margin:30px auto 0;
          border-radius:5px;
        }

        @media(max-width:768px){

          .team-title{
            font-size:38px;
            letter-spacing:5px;
          }

          .team-icon{
            width:45px;
            height:45px;
          }

        }

      `}</style>

      <section className="team-section">

        <div className="team-header">

          <div className="team-icon">
            👥
          </div>

          <h1 className="team-title">
            MEET THE TEAM
          </h1>

        </div>

        <p className="team-subtitle">
          The brilliant minds architecture the Mechathlon 2K26 experience.
        </p>

        <div className="team-divider"></div>
        <TeamCarousel/>
      </section>
    </>
  );
}

export default Team;