import "./Card.css";

function Card({ img, rating, reviewCount, location, title, price, openSpots }) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <li className="card__item">
      {badgeText && <div className="card__badge">{badgeText}</div>}
      <div className="card__img-box">
        <img src={`./images/${img}`} alt="img" className="card__img" />
      </div>
      <div className="card__comments-box">
        <img src="./images/star.svg" alt="star" className="card__star-img" />
        <span className="card__comments-rating">{rating}</span>
        <span className="card__comments-num">({reviewCount})</span>
        <span className="card__comments-country">{location}</span>
      </div>
      <p className="card__text">{title}</p>
      <p className="card__price">
        <span className="bold">From ${price}</span> / person
      </p>
    </li>
  );
}

export default Card;