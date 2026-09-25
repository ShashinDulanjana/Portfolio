import { motion } from "framer-motion";
import { profile, softSkills, languages } from "../data/portfolio";
import "./About.css";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.9, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container about-grid">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="about-copy"
        >
          <span className="eyebrow">About</span>
          <h2>A student who'd rather build than just study the theory</h2>
          <p className="about-summary">{profile.summary}</p>

          <div className="about-tags">
            <div>
              <h4>Soft skills</h4>
              <div className="tag-row">
                {softSkills.map((s) => (
                  <span key={s} className="mini-tag">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h4>Languages</h4>
              <div className="tag-row">
                {languages.map((l) => (
                  <span key={l} className="mini-tag">{l}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.15 }}
          className="stat-stack"
        >
          {profile.stats.map((s) => (
            <div key={s.label} className="stat-card glass">
              <span className="stat-value neon-text">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
