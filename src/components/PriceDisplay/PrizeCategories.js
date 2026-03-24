import React from "react";

function PrizeCategories() {

  const prizesTemplate = [
    {
      place: "2ND PLACE",
      amount: "₹20,000",
      extra: "+ Certificates & Swag",
      color: "#22d3ee"
    },
    {
      place: "1ST PLACE",
      amount: "₹30,000",
      extra: "+ Certificates & Swag",
      color: "#facc15"
    },
    {
      place: "3RD PLACE",
      amount: "₹10,000",
      extra: "+ Certificates",
      color: "#ec4899"
    }
  ];

  const categories = [
    { title: "ROBORACE", prizes: prizesTemplate },
    { title: "LINE FOLLOWER", prizes: prizesTemplate },
    { title: "ROBO SOCCER", prizes: prizesTemplate },
    { title: "ROBO SUMO", prizes: prizesTemplate },
    { title: "FULL THROTTLE", prizes: prizesTemplate }
  ];

  return (
    <div style={{ padding: "80px 20px", background: "#020617", color: "white" }}>

      {categories.map((category, index) => (

        <div key={index} style={{ marginBottom: "100px" }}>

          {/* Category Title */}
          <h2 style={{
            textAlign: "center",
            fontSize: "36px",
            letterSpacing: "6px",
            color: "#facc15",
            marginBottom: "50px",
            textShadow: "0 0 15px #facc15"
          }}>
            {category.title}
          </h2>

          {/* Prize Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "40px",
            maxWidth: "1100px",
            margin: "auto"
          }}>

            {category.prizes.map((prize, i) => (

              <div key={i} style={{
                padding: "40px",
                borderRadius: "20px",
                border: `1px solid ${prize.color}`,
                textAlign: "center",
                background: "#030712",
                boxShadow: `0 0 25px ${prize.color}30`,
                transition: "0.3s"
              }}
              onMouseEnter={(e)=> e.currentTarget.style.transform="scale(1.05)"}
              onMouseLeave={(e)=> e.currentTarget.style.transform="scale(1)"}
              >

                <p style={{
                  letterSpacing: "4px",
                  marginBottom: "15px",
                  color: prize.color
                }}>
                  {prize.place}
                </p>

                <h1 style={{
                  fontSize: "48px",
                  color: prize.color,
                  marginBottom: "10px"
                }}>
                  {prize.amount}
                </h1>

                <p style={{ color: "#9ca3af" }}>
                  {prize.extra}
                </p>

              </div>

            ))}

          </div>

        </div>

      ))}

    </div>
  );
}

export default PrizeCategories;