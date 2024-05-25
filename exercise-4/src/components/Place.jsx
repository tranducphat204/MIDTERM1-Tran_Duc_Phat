export default function Place({ id, title, image: { src, alt } }) {
  return (
    <li key={id} className="place-item">
      <button>
        <img src={src} alt={alt} />
        <h3>{title}</h3>
      </button>
    </li>
  );
}
