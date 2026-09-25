import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Projects</span>
          <h2>Things I've built</h2>
          <p>
            Academic projects that went beyond the brief — each one paired
            with a working codebase on GitHub.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
