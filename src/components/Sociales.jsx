import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Socials() {
  return (
    <aside className="socials" aria-label="Redes sociales">
      <a href="https://github.com/Sebastian-Aparicio" target="_blank" rel="noreferrer" aria-label="Github">
        {/* SVG GitHub */}
        <FaGithub />
      </a>

      <a href="https://www.linkedin.com/in/juan-sebastian-dulcey-aparicio-4b9265268/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        {/* SVG LinkedIn */}
        <FaLinkedin />
      </a>

      <a href="https://www.instagram.com/sebastian_aparicio16/" target="_blank" rel="noreferrer" aria-label="Twitter">
        {/* Simple bird or emoji fallback */}
        <FaInstagram />
      </a>
    </aside>
  );
}
