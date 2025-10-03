// src/components/Projects.jsx
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaJs,
  FaHtml5,
  FaChartBar,
  FaFolderOpen, // 👈 agregado para el título
} from "react-icons/fa";
import { SiFirebase, SiVercel, SiMysql, SiVite } from "react-icons/si";

import { motion } from "framer-motion";
import Section from "./Section";
import "../index.css";

import SDfit from "../assets/SDfit.png";
import Tracker from "../assets/tracker.png";
import Alura from "../assets/alura.png";
import Citas from "../assets/citas.png";

export default function Projects() {
  const projects = [
    {
      title: "SDfit",
      description:
        "Aplicación de fitness para registrar ejercicios (repeticiones y peso) y comidas. Toda la información se visualiza en estadísticas y gráficos para llevar un seguimiento claro del entrenamiento y la nutrición.",
      image: SDfit,
      tech: [
        <FaReact key="react" />,
        <SiVite key="vite" />,
        <SiFirebase key="firebase" />,
        <FaChartBar key="chart" />,
        <SiVercel key="vercel" />,
         <FaGithub  key="Git"/>,
      ],
      demo: "https://s-dfit-2nns.vercel.app/",
      demoLabel: "vercel.app",
      code: "https://github.com/Sebastian-Aparicio/SDfit",
      date: "Jul, 2025",
      status: "completed",
    },
    {
      title: "Tracker Subscription",
      description:
        "Aplicación que emula suscripciones a plataformas de streaming: ingresar presupuesto, distribuirlo entre servicios, y editar o eliminar suscripciones para gestionar gastos fácilmente.",
      image: Tracker,
      tech: [
        <FaReact key="react" />,
        <FaCss3Alt key="css" />,
        <SiVite key="vite" />,
        <SiVercel key="vercel" />,
         <FaGithub  key="Git"/>,
      ],
      demo: "https://subscriptons-tracker.vercel.app/",
      demoLabel: "vercel.app",
      code: "https://github.com/Sebastian-Aparicio/Subscriptons-Tracker",
      date: "Sep, 2024",
      status: "completed",
    },
    {
      title: "Alura geek",
      description:
        "Aplicación para almacenar productos en servidor local; cada producto se muestra en una tarjeta con imagen, nombre y precio, y existe un formulario para agregar o eliminar productos.",
      image: Alura,
      tech: [
        <FaHtml5 key="html" />,
        <FaJs key="js" />,
        <FaCss3Alt key="css" />,
        <FaNodeJs key="node" />,
        <SiVercel key="vercel" />,
         <FaGithub key="Git" />,
       
      ],
      demo: "https://alura-geek-seven-gamma.vercel.app/",
      demoLabel: "vercel.app",
      code: "https://github.com/Sebastian-Aparicio/AluraGeek",
      date: "Ene, 2024",
      status: "completed",
    },
     {
      title: "Citas Aleatorias",
      description:
        "una aplicación web que muestra aleatoriamente textos extraídos de la Biblia, proporcionando inspiración y reflexión a los usuarios.",
      image: Citas,
      tech: [
        <FaHtml5 key="html" />,
        <FaJs key="js" />,
        <FaCss3Alt key="css" />,
        <SiVercel key="vercel" />,
         <FaGithub key="Git" />,
  
      ],
      demo: "https://citas-biblicas.vercel.app/",
      demoLabel: "vercel.app",
      code: "https://github.com/Sebastian-Aparicio/Citas-Biblicas",
      date: "Ene, 2024",
      status: "completed",
    },
  ];

  return (
    <Section id="projects" title="">
      {/* Encabezado de la sección */}
      <div className="projects-header">
        <h2 className="projects-title">
          <FaFolderOpen className="projects-icon" /> Proyectos
        </h2>
        <p className="projects-subtitle">
          Aquí encontrarás una selección de proyectos en los que he trabajado,
          combinando diseño, funcionalidad y buenas prácticas de desarrollo.
        </p>
        <div className="projects-divider" />
      </div>

      {/* Grid de proyectos */}
      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.article
            key={project.title + i}
            className="project-card"
            whileHover={{ translateY: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div className="project-media">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-body">
              <div className="project-head">
                <h3 className="project-title">{project.title}</h3>

                <div className="project-meta">
                  <div className="meta-left">
                    <span
                      className={`status ${
                        project.status === "completed" ? "ok" : ""
                      }`}
                    >
                      <span className="dot" />{" "}
                      {project.status === "completed"
                        ? "Completed"
                        : "In progress"}
                    </span>

                    {project.demo && (
                      <a
                        className="meta-link inline-demo"
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.demoLabel || "demo"} <FaExternalLinkAlt />
                      </a>
                    )}

                    {project.code && (
                      <a
                        className="meta-link inline-code"
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source <FaGithub />
                      </a>
                    )}
                  </div>

                  <div className="project-date">{project.date}</div>
                </div>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-footer">
                <div className="project-tech">
                  {project.tech.map((icon, idx) => (
                    <span key={idx} className="tech-pill" title="tech">
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-corner" aria-hidden />
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
