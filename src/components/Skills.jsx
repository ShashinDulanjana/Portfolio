import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";
import { skillGroups, aiTools } from "../data/portfolio";
import Icon from "./Icon";
import "./Skills.css";

const groupVariant = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.2, 0.9, 0.3, 1], delay: i * 0.06 },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Skills</span>
          <h2>The stack I build with</h2>
          <p>
            A working full-stack toolkit, picked up building real academic
            projects rather than isolated tutorials.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className="skill-card glass"
              custom={i}
              variants={groupVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h3>{group.title}</h3>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span key={item.name} className="chip">
                    <Icon name={item.icon} />
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="ai-strip glass"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.2, 0.9, 0.3, 1] }}
        >
          <div className="ai-strip-label">
            <FiZap />
            <span>AI &amp; productivity tools</span>
          </div>
          <div className="chip-row">
            {aiTools.map((tool) => (
              <span key={tool} className="chip chip-plain">{tool}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
