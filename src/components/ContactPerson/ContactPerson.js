import React from "react";

function ContactPerson() {

  return (
    <>
      <style>{`

      .footer-container{
        background:#020617;
        padding:100px 20px;
        display:flex;
        justify-content:center;
        align-items:center;
      }

      .footer-card{
        width:100%;
        max-width:1000px;
        border-radius:25px;
        padding:50px;
        background:linear-gradient(135deg, rgba(15,23,42,0.9), rgba(2,6,23,0.9));
        backdrop-filter:blur(20px);
        border:1px solid rgba(34,211,238,0.2);
        box-shadow:0 0 40px rgba(34,211,238,0.15);
        text-align:center;
        position:relative;
        overflow:hidden;
      }

      /* Glow Effect */
      .footer-card::before{
        content:"";
        position:absolute;
        width:300px;
        height:300px;
        background:radial-gradient(circle,#22d3ee,transparent);
        top:-100px;
        left:-100px;
        opacity:0.2;
      }

      .footer-title{
        font-size:48px;
        font-weight:800;
        color:#67e8f9;
        letter-spacing:4px;
        text-shadow:0 0 20px #22d3ee;
        margin-bottom:20px;
      }

      .footer-tagline{
        font-size:18px;
        color:#9ca3af;
        max-width:700px;
        margin:0 auto 40px;
        line-height:1.7;
      }

      .footer-divider{
        width:80px;
        height:3px;
        background:#22d3ee;
        margin:20px auto 40px;
        border-radius:10px;
      }

      .footer-info{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        gap:40px;
      }

      .info-box{
        padding:20px 30px;
        border-radius:15px;
        background:#030712;
        border:1px solid #1e293b;
        min-width:250px;
        transition:0.3s;
      }

      .info-box:hover{
        transform:translateY(-5px);
        border-color:#22d3ee;
        box-shadow:0 0 20px rgba(34,211,238,0.3);
      }

      .info-title{
        font-size:14px;
        color:#22d3ee;
        letter-spacing:2px;
        margin-bottom:10px;
      }

      .info-text{
        font-size:16px;
        color:#e5e7eb;
        line-height:1.6;
      }

      @media(max-width:768px){
        .footer-title{
          font-size:32px;
        }
      }

      `}</style>

      <div className="footer-container">

        <div className="footer-card">

          <h1 className="footer-title">
            MECHATHLON 2026
          </h1>

          <p className="footer-tagline">
            Where machines battle, innovation thrives, and engineers rise.
            Step into the arena and showcase your robotic excellence.
          </p>

          <div className="footer-divider"></div>

          <div className="footer-info">

            <div className="info-box">
              <div className="info-title">VENUE</div>
              <div className="info-text">
                📍 T John Institute of Technology<br/>
                Bengaluru, Karnataka
              </div>
            </div>

            <div className="info-box">
              <div className="info-title">EMAIL</div>
              <div className="info-text">
                ✉ mechathlon@tjohntech.edu.in
              </div>
            </div>

            <div className="info-box">
              <div className="info-title">EVENT TYPE</div>
              <div className="info-text">
                🤖 Robotics Competition<br/>
                National Level Event
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default ContactPerson;