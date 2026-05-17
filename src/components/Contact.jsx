import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_oxjo5cj",   // 🔥 replace
      "template_xgappsd",  // 🔥 replace
      e.target,
      "b6My50IDSwuWjmhhA"    // 🔥 replace
    ).then(
      () => {
        alert("Message sent successfully!");
      },
      () => {
        alert("Failed to send message");
      }
    );

    e.target.reset();
  }

  return (
    <section id="contact">

      <motion.h2 style={{ fontSize: "40px" }}>
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={sendEmail}
        style={{
          maxWidth: "500px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >

        <input name="name" placeholder="Your Name" required style={inputStyle} />
        <input name="email" type="email" placeholder="Your Email" required style={inputStyle} />
        <textarea name="message" placeholder="Your Message" required style={inputStyle} />

        <button type="submit" style={buttonStyle}>
          Send Message
        </button>

      </motion.form>

    </section>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #222",
  background: "#111",
  color: "white"
};

const buttonStyle = {
  padding: "12px",
  background: "#3b82f6",
  border: "none",
  borderRadius: "8px",
  color: "white",
  cursor: "pointer"
};