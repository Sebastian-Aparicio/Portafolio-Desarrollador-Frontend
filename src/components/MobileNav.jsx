import { FaHome, FaFolderOpen, FaComments } from "react-icons/fa";

export default function MobileNav({ active }) {
  const items = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "projects", label: "Projects", icon: <FaFolderOpen /> },
    { id: "contact", label: "Contact", icon: <FaComments /> },
  ];

  return (
    <nav className="mobile-nav">
      {items.map((it) => (
        <a
          key={it.id}
          href={`#${it.id}`}
          className={`mobile-link ${active === it.id ? "active" : ""}`}
        >
          <span className="icon">{it.icon}</span>
          <span className="label">{it.label}</span>
        </a>
      ))}
    </nav>
  );
}
