import "./Card.css";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <li className="card__item">
      {badgeText && <div className="card__badge">{badgeText}</div>}
      <div className="card__img-box">
        <img
          src={`./images/${props.coverImg}`}
          alt="img"
          className="card__img"
        />
      </div>
      <div className="card__comments-box">
        <img src="./images/star.svg" alt="star" className="card__star-img" />
        <span className="card__comments-rating">{props.stats.rating}</span>
        <span className="card__comments-num">({props.stats.reviewCount})</span>
        <span className="card__comments-country">{props.location}</span>
      </div>
      <p className="card__text">{props.title}</p>
      <p className="card__price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </li>
  );
}

export default Card;