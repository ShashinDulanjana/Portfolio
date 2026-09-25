import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { nav, profile } from "../data/portfolio";
import "./Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner glass">
        <a href="#home" className="brand" onClick={goTo("home")}>
          <span className="brand-mark">{profile.initials}</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={goTo(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.label}
              {active === item.id && (
                <motion.span layoutId="nav-underline" className="nav-underline" />
              )}
            </a>
          ))}
        </nav>

        <a href="#contact" onClick={goTo("contact")} className="btn btn-primary nav-cta">
          Let's talk
        </a>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile glass"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.2, 0.9, 0.3, 1] }}
          >
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={goTo(item.id)}
                className={active === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
