import { useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * 10;
    const rotateX = (0.5 - py) * 10;

    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <motion.article
      ref={ref}
      className="project-card glass"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.2, 0.9, 0.3, 1], delay: (index % 2) * 0.08 }}
    >
      <div className="project-sheen" />
      <div className="project-top">
        <div>
          <span className="project-period">{project.period}</span>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="project-link"
          aria-label={`Open ${project.title} on GitHub`}
        >
          <FiGithub />
          <FiArrowUpRight className="project-link-arrow" />
        </a>
      </div>

      <p className="project-desc">{project.description}</p>

      <ul className="project-points">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="chip-row project-stack">
        {project.stack.map((tech) => (
          <span key={tech} className="mini-tag">{tech}</span>
        ))}
      </div>
    </motion.article>
  );
}
