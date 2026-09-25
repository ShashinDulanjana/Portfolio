// All the content on the site lives here — edit this file to update
// names, links, projects or skills without touching any component code.

export const profile = {
  name: "Thamod Shashin Dulanjana",
  initials: "TS",
  roles: [
    "Full-Stack Developer",
    "Software Engineering Intern",
    "SQA & Data Analyst",
  ],
  location: "Kandepitawala, Hattota Amuna, Sri Lanka",
  email: "shashindulanjana561@gmail.com",
  phone: "+94 76 245 0093",
  phoneHref: "+94762450093",
  linkedin: "https://www.linkedin.com/in/shashin-dulanjana-414639425",
  github: "https://github.com/ShashinDulanjana",
  resumeFile: "/Thamod-Shashin-Dulanjana-CV.pdf",
  tagline:
    "Building clean, reliable web and mobile software — from Laravel back ends to React interfaces.",
  summary:
    "I'm an HNDIT undergraduate at the Sri Lanka Institute of Advanced Technological Studies (SLIATE), with a growing foundation in software engineering, full-stack web development, quality assurance and data analytics. I like turning a rough idea into a working product — wiring up a database, shaping an API, then building the interface people actually touch. Recent work spans PHP and Laravel, React, Flutter and MySQL, alongside hands-on testing and querying. Right now I'm looking for an internship where I can keep building — in development, QA, or a data-driven team.",
  stats: [
    { value: "4", label: "Projects shipped" },
    { value: "2024", label: "HNDIT since" },
    { value: "10+", label: "Tools & frameworks" },
  ],
};

export const education = [
  {
    degree: "Higher National Diploma in Information Technology (HNDIT)",
    school: "Sri Lanka Advanced Technological Institute (SLIATE), Kandy",
    period: "2024 — Present",
    note: "Software Engineering, Full-Stack Development, SQA & Data Analytics",
  },
  {
    degree: "G.C.E. Advanced Level — Art Stream",
    school: "CP/WILL, Minipura Vijaya Maha Vidyalaya",
    period: "2023",
  },
  {
    degree: "G.C.E. Ordinary Level",
    school: "CP/WILL, Minipura Vijaya Maha Vidyalaya",
    period: "2020",
  },
];

export const projects = [
  {
    title: "Laptop Shop Management System",
    subtitle: "Multi-role e-commerce & POS web application",
    period: "Mar 2026 — Jun 2026",
    description:
      "A full-stack Laravel e-commerce platform with role-based access for admins, staff and customers, and revenue logic that counts card sales instantly while deferring cash-on-delivery until the order is fulfilled.",
    points: [
      "Live stock reduction and automated invoicing across the order pipeline",
      "Dual-layer validation — inline regex on the client, Laravel rules on the server",
    ],
    stack: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS", "Bootstrap"],
    link: "https://github.com/ShashinDulanjana/Laptop-Shop-Managemet-System.git",
  },
  {
    title: "Student Management System",
    subtitle: "Records platform with session-based auth",
    period: "Jan 2026 — Feb 2026",
    description:
      "A web application for managing student records end to end — adding, viewing, updating and removing entries — behind a protected login.",
    points: [
      "Session-based authentication guarding every record-management route",
      "Responsive Bootstrap interface built for everyday office use",
    ],
    stack: ["PHP", "MySQL", "Bootstrap", "HTML5", "CSS3"],
    link: "https://github.com/ShashinDulanjana/Student-Mnagement-System.git",
  },
  {
    title: "MediMart",
    subtitle: "Pharmacy management desktop app",
    period: "Jan 2026 — Feb 2026",
    description:
      "A Java Swing desktop system for pharmacy operations, built on MVC with separate permissions for managers and assistants.",
    points: [
      "Category-based inventory with full CRUD and JDBC-backed persistence",
      "Update and delete actions restricted by role to protect stock records",
    ],
    stack: ["Java", "Java Swing", "MySQL", "JDBC", "MVC"],
    link: "https://github.com/ShashinDulanjana/MediMart74---Pharmacy-Management-System-.git",
  },
  {
    title: "Explore Sri Lanka",
    subtitle: "Zone-based tourism discovery platform",
    period: "Jul 2026 — Sep 2026",
    description:
      "A tourism platform organised by zone, backed by a normalised MySQL schema and a documented REST API, fronted by an interactive React map experience.",
    points: [
      "PHP REST API over PDO with five documented JSON endpoints",
      "Interactive SVG hotspot map with skeleton-loading states for a smooth feel",
    ],
    stack: ["React.js", "Tailwind CSS", "PHP", "MySQL", "React Router", "Vite"],
    link: "https://github.com/ShashinDulanjana/Explore-Sri-Lanka-Tourism-Web-Application.git",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React.js", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "PHP", icon: "php" },
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MongoDB Atlas", icon: "mongodb" },
      { name: "Database Design", icon: "database" },
    ],
  },
  {
    title: "Programming languages",
    items: [
      { name: "Java", icon: "java" },
      { name: "C#", icon: "csharp" },
    ],
  },
  {
    title: "Software development",
    items: [
      { name: "OOP", icon: "layers" },
      { name: "MVC", icon: "layers" },
      { name: "RESTful APIs", icon: "api" },
      { name: "Microservices", icon: "grid" },
      { name: "API Gateway", icon: "api" },
    ],
  },
  {
    title: "Tools & DevOps",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Docker", icon: "docker" },
      { name: "Docker Compose", icon: "docker" },
      { name: "XAMPP", icon: "server" },
      { name: "Postman", icon: "postman" },
    ],
  },
  {
    title: "API & documentation",
    items: [
      { name: "Swagger", icon: "swagger" },
      { name: "OpenAPI", icon: "openapi" },
      { name: "Nodemailer", icon: "mail" },
    ],
  },
];

export const aiTools = [
  "Claude AI",
  "ChatGPT",
  "Gemini",
  "AI-Assisted Coding",
  "Prompt Engineering",
];

export const softSkills = [
  "Teamwork",
  "Problem Solving",
  "Adaptability",
  "Communication",
  "Creativity",
  "Time Management",
];

export const languages = ["Sinhala", "English"];

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
