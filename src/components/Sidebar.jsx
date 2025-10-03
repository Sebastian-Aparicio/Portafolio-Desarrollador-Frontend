import { FaHome, FaComments, FaFolderOpen, FaArrowUp } from "react-icons/fa";
import profile from "../assets/profile.ico";


export default function Sidebar({ active }) {
  const items = [
    { id: "home", icon: <FaHome /> },
    
    { id: "projects", icon: <FaFolderOpen  />  },
    { id: "contact", icon: <FaComments/>  },
  ];

  return (
    <aside className="sidebar" aria-label="Navegación">
      {/* Foto de perfil */}
      <img src={profile} alt="" />

      {/* Íconos de navegación */}
      <div className="nav-icons">
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className={`nav-link ${active === it.id ? "active" : ""}`}
          >
            {it.icon}
          </a>
        ))}
      </div>

      {/* Flecha hacia arriba */}
      <div className="back-to-top">
        <a href="#header-info">
          <FaArrowUp />
        </a>
      </div>
    </aside>
  );
}
