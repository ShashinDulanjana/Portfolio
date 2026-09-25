import { motion } from "framer-motion";
import { education } from "../data/portfolio";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Education</span>
          <h2>How I got here</h2>
        </div>

        <div className="timeline">
          <div className="timeline-line" />
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              className="timeline-item"
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: [0.2, 0.9, 0.3, 1], delay: i * 0.08 }}
            >
              <span className="timeline-node" />
              <div className="timeline-card glass">
                <span className="timeline-period">{item.period}</span>
                <h3>{item.degree}</h3>
                <p className="timeline-school">{item.school}</p>
                {item.note && <p className="timeline-note">{item.note}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
