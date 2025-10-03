import React, { useState } from "react";
import {
  FaCertificate,
  FaClock,
  FaCalendarAlt,
  FaUniversity,
} from "react-icons/fa";
import cert1 from "../assets/certificado1.png";
import cert2 from "../assets/certificado2.png";
import cert3 from "../assets/certificado3.png";
import cert4 from "../assets/certificado4.png";
import Section from "./Section";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      img: cert1,
      title: "Desarrollo Frontend",
      institution: "Oracle Next Education",
      duration: "313 horas",
      date: "Jun 2024",
    },
    {
      img: cert2,
      title: "Logica de programacion con JavaScript",
      institution: "Alura Latam",
      duration: "24 horas",
      date: "Ene 2024",
    },
    {
      img: cert3,
      title: "Principiante en programacion",
      institution: "Oracle Next Education",
      duration: "62 horas",
      date: "Ene 2024",
    },
    {
      img: cert4,
      title: "React con JavaScript",
      institution: "Alura Latam",
      duration: "70 horas",
      date: "Jun 2024",
    },
  ];

  return (
    <Section id="certificados" className="certificates-section">
      <div className="certificates-header">
        <h2 className="certificates-title">
          <FaCertificate className="icon" /> Certificados
        </h2>
        <p className="certificates-description">
          Aquí encontrarás una selección de certificados obtenidos en cursos de
          Alura Latam y ONE Oracle Education, que respaldan mis conocimientos y
          formación profesional en el área de desarrollo frontend y web.
        </p>
      </div>

      {/* Grid de certificados */}
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="certificate-card"
            onClick={() => setSelectedCert(cert)}
          >
            <img src={cert.img} alt={cert.title} />
            <h3>{cert.title}</h3>
            <div className="cert-info">
              <span>
                <FaUniversity /> {cert.institution}
              </span>
              <span>
                <FaClock /> {cert.duration}
              </span>
              <span>
                <FaCalendarAlt /> {cert.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCert(null)}>
              ✖
            </button>
            <img src={selectedCert.img} alt={selectedCert.title} />
            <h3>{selectedCert.title}</h3>
            <p>
              <FaUniversity /> {selectedCert.institution} &nbsp; | &nbsp;
              <FaClock /> {selectedCert.duration} &nbsp; | &nbsp;
              <FaCalendarAlt /> {selectedCert.date}
            </p>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Certificates;
