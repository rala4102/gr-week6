function Card({ title, url, description }) {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <span>{description}</span>
    </div>
  );
}

export default Card;
