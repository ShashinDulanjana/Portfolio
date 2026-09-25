import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { profile } from "../data/portfolio";
import "./Contact.css";

const links = [
  {
    icon: FiMail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "shashin-dulanjana",
    href: profile.linkedin,
    external: true,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "ShashinDulanjana",
    href: profile.github,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <motion.div
          className="contact-panel glass-strong"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.2, 0.9, 0.3, 1] }}
        >
          <div className="contact-intro">
            <span className="eyebrow">Contact</span>
            <h2>
              Let's build something —{" "}
              <span className="neon-text">reach out anytime</span>
            </h2>
            <p>
              I'm actively looking for a Software Engineering, QA or Data
              Analyst internship. If a role sounds like a fit, I'd love to
              hear from you.
            </p>
            <div className="contact-location">
              <FiMapPin /> {profile.location}
            </div>
          </div>

          <div className="contact-links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="contact-row"
              >
                <span className="contact-row-icon">
                  <link.icon />
                </span>
                <span className="contact-row-text">
                  <span className="contact-row-label">{link.label}</span>
                  <span className="contact-row-value">{link.value}</span>
                </span>
                <FiArrowUpRight className="contact-row-arrow" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
