import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Socials from "./components/Sociales";
import HeaderInfo from "./components/HeaderInfo";
import profile from "./assets/profile.jpg";
import { FaTools, FaCertificate } from "react-icons/fa";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import MobileNav from "./components/MobileNav";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Reveal from "./components/Reveal"; // 👈 animación global
import Footer from "./components/Footer";

export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.dataset.id);
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="app-layout">
      <Sidebar active={active} />
      <MobileNav active={active} />
      <main className="main">
        <HeaderInfo />

        <div className="main-inner">
          {/* Home */}
          <section id="home" data-id="home" className="home-section">
            <Reveal>
              <div className="about-container">
                <div className="about-info">
                  <div className="about-image">
                    <img src={profile} alt="Sebastian" />
                  </div>

                  <div className="about-text">
                    <h2>Hola, soy</h2>
                    <span className="highlight-name">
                      Sebastian Aparicio
                    </span>
                    <p>
                      Un desarrollador frontend que disfruta darle forma a lo
                      invisible: tomar una idea y convertirla en algo que otros
                      puedan ver, usar y disfrutar en la pantalla. Mi meta es
                      simple: seguir creciendo mientras construyo proyectos que
                      hablen por sí mismos y dejen una huella en quienes los usan.
                    </p>

                    <div className="about-buttons">
                      <a href="#skills" className="btn">
                        <FaTools className="icon" /> Habilidades
                      </a>
                      <a href="#certificados" className="btn">
                        <FaCertificate className="icon" /> Certificados
                      </a>
                    </div>
                  </div>
                </div>

                {/* Estadísticas */}
                <div className="about-stats">
                  <div className="stat-item">
                    <h3>10+</h3>
                    <p>Proyectos</p>
                  </div>
                  <div className="stat-item">
                    <h3>9+</h3>
                    <p>Tecnologías</p>
                  </div>
                  <div className="stat-item">
                    <h3>2+</h3>
                    <p>Experiencia</p>
                  </div>
                  <div className="stat-item">
                    <h3>20+</h3>
                    <p>Certificados</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* Skills */}
          <section id="skills" data-id="skills">
            <Reveal>
              <Skills />
            </Reveal>
          </section>

          {/* Certificados */}
          <section id="certificados" data-id="certificados">
            <Reveal>
              <Certificates />
            </Reveal>
          </section>

          {/* Projects */}
          <section id="projects" data-id="projects">
            <Reveal>
              <Projects />
            </Reveal>
          </section>

          {/* Contact */}
          <section id="contact" data-id="contact">
            <Reveal>
              <Contact />
            </Reveal>
          </section>
        </div>
        <Footer />
      </main>

      <Socials />
      <ScrollToTopButton />
    </div>
  );
}
