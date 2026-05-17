export default function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      width: "100%",
      top: 0,
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(10px)",
      zIndex: 1000
    }}>
      <h2 style={{ color: "#3b82f6" }}>Portfolio</h2>

      <div>
        <a href="#about" style={{ margin: 10 }}>About</a>
        <a href="#skills" style={{ margin: 10 }}>Skills</a>
        <a href="#projects" style={{ margin: 10 }}>Projects</a>
        <a href="#contact" style={{ margin: 10 }}>Contact</a>
      </div>
    </nav>
  );
}