import { FaReact, FaCode } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        <FaCode className="footer-icon" /> Hecho por{" "}
        <span className="highlight">Sebastian Aparicio</span>
      </p>
      <p className="made-with">
        Construido con <FaReact className="react-icon" /> React
      </p>
    </footer>
  );
}
