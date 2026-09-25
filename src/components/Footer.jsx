import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data/portfolio";
import "./Footer.css";

export default function Footer() {
  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React.</p>
        <a href="#home" onClick={scrollTop} className="footer-top" aria-label="Back to top">
          <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}
