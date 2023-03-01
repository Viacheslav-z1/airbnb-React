import "./App.css";
import Card from "./Components/Card/Card";
import NavBar from "./Components/NavBar/NavBar";
import Top from "./Components/Top/Top";
import data from "./data";
console.log(data);
function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <div className="container">
      <div className="app__wrapper">
        <NavBar />
        <Top />
        <ul className="card__list">{cards}</ul>
      </div>
    </div>
  );
}

export default App;
