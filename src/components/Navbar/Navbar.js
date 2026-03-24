import React from "react";

function Navbar() {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "85%",
        zIndex: 1000
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 30px",

          background: "#020617",
          borderRadius: "20px",

          border: "1px solid #1e293b",
          boxShadow: "0 0 25px rgba(0,0,0,0.6)",

          backdropFilter: "blur(10px)"
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/ramsagar.jpg"
            alt="logo"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover"
            }}
          />
        </div>

        {/* Right Side */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>

          {/* Register Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSflK9kmc1eQgCRVyUSH1rn6uMjnKp-mNPAVWNPaz2tVGozWig/viewform?fbzx=-3924013473349473838"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                padding: "10px 24px",
                borderRadius: "25px",
                border: "none",
                color: "white",
                fontWeight: "600",
                background: "linear-gradient(90deg,#06b6d4,#7c3aed)",
                cursor: "pointer",
                transition: "0.3s"
              }}
              onMouseEnter={(e) =>
                (e.target.style.boxShadow =
                  "0 0 15px #22d3ee, 0 0 25px #7c3aed")
              }
              onMouseLeave={(e) =>
                (e.target.style.boxShadow = "none")
              }
            >
              Register now
            </button>
          </a>

          {/* Round Icon */}
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#111827",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            ⚡
          </div>

          {/* Menu */}
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              background: "#111827",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              cursor: "pointer"
            }}
          >
            ☰
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;