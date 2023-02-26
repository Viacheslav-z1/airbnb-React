import "./Top.css";

function Top() {
  return (
    <section className="top">
      <div className="container">
        <div className="top__inner">
          <img src="./images/top.png" alt="image" className="top__img" />
          <h1 className="top__title">Online Experiences</h1>
          <p className="top__text">
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Top;