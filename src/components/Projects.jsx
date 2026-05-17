import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import quiz from "../assets/quiz.png";
import attendance from "../assets/attendance.png";
import thunder from "../assets/thunder.png";
export default function Projects() {
  return (
    <section id="projects">
      <h2 style={{ fontSize: "40px" }}>Projects</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
        gap: "30px",
        marginTop: 40
      }}>

        {/* Project 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="glow"
          style={{
            borderRadius: "15px",
            overflow: "hidden",
            background: "#111"
          }}
        >
          <img src={thunder} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
          <div style={{ padding: 20 }}>
            <h3>Thunder Wheels</h3>
            <p style={{ color: "#aaa" }}>
              Bike UI project with modern design
            </p>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="glow"
          style={{
            borderRadius: "15px",
            overflow: "hidden",
            background: "#111"
          }}
        >
          <img src={quiz} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
          <div style={{ padding: 20 }}>
            <h3>Quiz Maker</h3>
            <p style={{ color: "#aaa" }}>
              A React-based app to create and attempt quizzes with score tracking.
            </p>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="glow"
          style={{
            borderRadius: "15px",
            overflow: "hidden",
            background: "#111"
          }}
        >
          <img src={attendance} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
          <div style={{ padding: 20 }}>
            <h3>Attendance Tracker</h3>
            <p style={{ color: "#aaa" }}>
              A web app to track student attendance and manage records efficiently.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}