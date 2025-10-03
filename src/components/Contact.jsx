import React from "react";
import { FaWhatsapp, FaEnvelope, FaComments } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-heading">
          <FaComments className="section-icon" /> Contacto
        </h2>
        <p className="section-description">
          Estas son las formas en que puedes ponerte en contacto conmigo. 
          Ya sea para colaborar, resolver dudas o simplemente charlar, 
          estaré encantado de responderte.
        </p>
        <div className="divider"></div>

        <div className="contact-buttons">
          <a
            href="https://wa.me/573222489076"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FaWhatsapp className="icon" /> WhatsApp
          </a>
          <a href="mailto:yscsayscsa16@hotmail.com" className="btn">
            <FaEnvelope className="icon" /> Correo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
