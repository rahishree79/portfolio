import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section
    style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px"
    }}
>
    

      {/* PROFILE IMAGE */}
      <motion.img
        src={profile}
        alt="profile"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "center top",   // ✅ FIX for head cut
          border: "4px solid #3b82f6",
        }}
        className="glow"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* NAME */}
      <motion.h1
        style={{
          fontSize: "50px",
          marginTop: 20,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm{" "}
        <span
          style={{
            color: "#3b82f6",
          }}
        >
          Rahishree
        </span>
      </motion.h1>

      {/* TYPING TEXT */}
      <TypeAnimation
        sequence={[
          "Frontend Developer",
          2000,
          "React Developer",
          2000,
          "Future AI Engineer",
          2000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{
          marginTop: 10,
          color: "#aaa",
          fontSize: "20px",
        }}
      />

      {/* BUTTON */}
      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.1 }}
        style={{
          marginTop: 20,
          padding: "12px 24px",
          background: "#3b82f6",
          borderRadius: "30px",
          textDecoration: "none",
          color: "white",
        }}
        className="glow"
      >
        Download Resume
      </motion.a>

    </section>
  );
}