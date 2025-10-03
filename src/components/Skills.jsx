// src/components/Skills.jsx
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaTools, // 👈 icono para el título
} from "react-icons/fa";
import { SiMysql, SiBootstrap, SiVercel, SiFirebase } from "react-icons/si";
import Section from "./Section";
import "../index.css";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="skill-icon html" />, info: "Lenguaje de marcado para estructurar la web" },
    { name: "CSS", icon: <FaCss3Alt className="skill-icon css" />, info: "Hojas de estilo para el diseño visual" },
    { name: "JavaScript", icon: <FaJsSquare className="skill-icon js" />, info: "Lenguaje para la lógica e interactividad" },
    { name: "React", icon: <FaReact className="skill-icon react" />, info: "Librería para interfaces dinámicas" },
    { name: "MySQL", icon: <SiMysql className="skill-icon mysql" />, info: "Gestión de bases de datos relacionales" },
    { name: "Bootstrap", icon: <SiBootstrap className="skill-icon bootstrap" />, info: "Framework CSS para diseño responsivo" },
    { name: "Git", icon: <FaGitAlt className="skill-icon git" />, info: "Control de versiones distribuido" },
    { name: "Vercel", icon: <SiVercel className="skill-icon vercel" />, info: "Hosting para proyectos frontend" },
    { name: "Firebase", icon: <SiFirebase className="skill-icon firebase" />, info: "Servicios backend en la nube" },
  ];

  return (
    <Section id="skills" title="">
      {/* Encabezado de la sección */}
      <div className="skills-header">
        <h2 className="skills-title">
          <FaTools className="skills-icon" /> Habilidades
        </h2>
        <p className="skills-subtitle">
          Estas son las principales tecnologías y herramientas que utilizo
          para crear soluciones modernas, funcionales y escalables.
        </p>
        <hr className="skills-divider" />
      </div>

      {/* Carrusel de habilidades */}
      <div className="skills-carousel">
        <div className="skills-track">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="skill-item" data-info={skill.info}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
