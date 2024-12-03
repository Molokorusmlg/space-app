import "./header.scss";
import soundIcon from "../../assets/sound.svg";
import menuIcon from "../../assets/menu.svg";

function Header({ onToggleBurgerClass }) {
  return (
    <header className="header">
      <div className="header__text">
        <h1 className="header__text_title">Thr Solar System Exploration</h1>
      </div>

      <div className="header__buttons">
        <div className="header__link">
          <img src={menuIcon} onClick={onToggleBurgerClass} alt="img" />
        </div>

        <div className="header__link">
          <img src={soundIcon} alt="img" />
        </div>
      </div>
    </header>
  );
}

export default Header;
