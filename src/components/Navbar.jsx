import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
<nav style={{
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 9999,
  background: "red"   // 🔥 TEMP TEST
}}>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{ color: "#3b82f6" }}>Portfolio</h2>

        {/* MENU BUTTON */}
        <div
          onClick={() => setOpen(!open)}
          style={{ cursor: "pointer", display: "block" }}
        >
          ☰
        </div>
      </div>

      {/* MENU */}
      {open && (
        <div style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}

    </nav>
  );
}