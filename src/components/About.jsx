import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">

      <motion.h2
        style={{ fontSize: "40px" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        About Me
      </motion.h2>

      <motion.p
        style={{
          maxWidth: "700px",
          margin: "20px auto",
          color: "#aaa",
          fontSize: "18px",
          lineHeight: "1.6"
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        I am a passionate Computer Engineering student focused on building modern 
        web applications using React and JavaScript. I enjoy creating clean UI, 
        smooth animations, and real-world projects. Currently, I am also exploring 
        AI/ML to become a future AI Engineer.
      </motion.p>

    </section>
  );
}