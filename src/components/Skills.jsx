import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["React", "Java", "JavaScript", "Node.js", "MongoDB"];

  return (
    <section id="skills">
      <h2 style={{ fontSize: "40px" }}>Skills</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px,1fr))",
        gap: "20px",
        marginTop: 40
      }}>
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="glow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            style={{
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #222",
              background: "#111"
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}