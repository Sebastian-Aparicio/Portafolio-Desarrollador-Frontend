// src/components/Reveal.jsx
import { motion } from "framer-motion";

export default function Reveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }} // menos estricto (antes era 0.25 o 0.5)
      style={{ minHeight: "1px" }} // asegura que siempre hay algo que observar
    >
      {children}
    </motion.div>
  );
}
