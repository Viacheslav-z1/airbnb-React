import "./NavBar.css";

function NavBar() {
  return (
    <div className="container">
      <header className="header">
        <div className="header__img-box">
          <a href="#" className="header__link">
            <img src="./images/logo.svg" alt="" className="header__img" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
