export default function Section({ id, title, children }) {
  return (
    <section id={id} data-id={id}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
