import { FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiSharp,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiDocker,
  SiPostman,
  SiSwagger,
  SiOpenapiinitiative,
} from "react-icons/si";
import { FiDatabase, FiLayers, FiShare2, FiGrid, FiServer, FiMail } from "react-icons/fi";

const ICONS = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: SiJavascript,
  react: SiReact,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  php: SiPhp,
  node: SiNodedotjs,
  express: SiExpress,
  mysql: SiMysql,
  mongodb: SiMongodb,
  java: FaJava,
  csharp: SiSharp,
  git: SiGit,
  github: SiGithub,
  githubactions: SiGithubactions,
  docker: SiDocker,
  postman: SiPostman,
  swagger: SiSwagger,
  openapi: SiOpenapiinitiative,
  database: FiDatabase,
  layers: FiLayers,
  api: FiShare2,
  grid: FiGrid,
  server: FiServer,
  mail: FiMail,
};

export default function Icon({ name, ...rest }) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return <Cmp aria-hidden="true" {...rest} />;
}
