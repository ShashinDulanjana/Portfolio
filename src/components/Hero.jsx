import { motion } from "framer-motion";
import { FiArrowDown, FiMail, FiPhone, FiDownload } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { profile } from "../data/portfolio";
import profilePhoto from "../assets/profile.jpg";
import "./Hero.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.9, 0.3, 1] } },
};

export default function Hero() {
  const goTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={rise} className="chip hero-badge">
            <span className="status-dot" />
            Open to Software Engineering internships
          </motion.div>

          <motion.h1 variants={rise} className="hero-name">
            <span className="neon-power-on">{profile.name}</span>
          </motion.h1>

          <motion.p variants={rise} className="hero-role">
            {profile.roles.join("  ·  ")}
          </motion.p>

          <motion.p variants={rise} className="hero-tagline">
            {profile.tagline}
          </motion.p>

          <motion.div variants={rise} className="hero-actions">
            <a href="#projects" onClick={goTo("projects")} className="btn btn-primary">
              View my work <FiArrowDown />
            </a>
            <a href="#contact" onClick={goTo("contact")} className="btn btn-ghost">
              Get in touch
            </a>
            <a
              href={profile.resumeFile}
              download
              className="btn btn-ghost"
            >
              <FiDownload /> CV
            </a>
          </motion.div>

          <motion.div variants={rise} className="hero-socials">
            <a href={`mailto:${profile.email}`} className="social-btn glass" aria-label="Email">
              <FiMail />
            </a>
            <a href={`tel:${profile.phoneHref}`} className="social-btn glass" aria-label="Phone">
              <FiPhone />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-btn glass"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="social-btn glass"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.85, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.9, 0.3, 1], delay: 0.3 }}
        >
          <div className="portrait-ring" />
          <div className="portrait-frame glass-strong">
            <img src={profilePhoto} alt={profile.name} />
          </div>
          <div className="portrait-orbit orbit-1" />
          <div className="portrait-orbit orbit-2" />
        </motion.div>
      </div>
    </section>
  );
}
