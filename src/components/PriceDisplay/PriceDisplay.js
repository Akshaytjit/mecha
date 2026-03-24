import React from "react";

function PriceDisplay() {
  return (
    <>
      <style>{`
        .hof-section{
          background:#020617;
          color:white;
          text-align:center;
          padding:100px 20px;
          font-family:"Segoe UI", sans-serif;
        }

        .hof-title{
          font-size:48px;
          font-weight:800;
          letter-spacing:6px;
          background:linear-gradient(90deg,#FFD700,#FFC107,#FFD700);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          text-shadow:0 0 25px rgba(255,215,0,0.6);
          margin-bottom:50px;
        }

        .prize-card{
          max-width:950px;
          margin:auto;
          padding:70px 40px;
          border-radius:24px;
          border:1px solid rgba(255,215,0,0.35);
          background:linear-gradient(180deg,#0b0f1a,#05060a);
          box-shadow:
            0 0 60px rgba(255,215,0,0.15),
            inset 0 0 40px rgba(255,215,0,0.05);
          position:relative;
          overflow:hidden;
        }

        /* soft spotlight glow */
        .prize-card::before{
          content:"";
          position:absolute;
          width:600px;
          height:600px;
          background:radial-gradient(circle,#FFD70055,transparent 70%);
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          filter:blur(80px);
        }

        .prize-label{
          letter-spacing:8px;
          color:#9ca3af;
          font-size:14px;
          margin-bottom:30px;
          position:relative;
          z-index:2;
        }

        .prize-value{
          font-size:95px;
          font-weight:900;
          background:linear-gradient(90deg,#FFD700,#FFF176,#FFD700);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;

          text-shadow:
            0 0 30px rgba(255,215,0,0.8),
            0 0 60px rgba(255,200,0,0.5);

          position:relative;
          z-index:2;
        }

        @media(max-width:768px){
          .hof-title{
            font-size:34px;
          }

          .prize-value{
            font-size:60px;
          }

          .prize-card{
            padding:60px 25px;
          }
        }
      `}</style>

      <section className="hof-section">

        <h1 className="hof-title">✨ HALL OF FAME ✨</h1>

        <div className="prize-card">
          <p className="prize-label">TOTAL PRIZE POOL WORTH</p>

          <div className="prize-value">₹40,000</div>
        </div>

      </section>
    </>
  );
}

export default PriceDisplay;
