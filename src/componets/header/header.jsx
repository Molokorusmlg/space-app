import "./css/header.css";
import { HeaderButton } from "../headerButton/headerButton";
import soundIcon from "../../assets/sound.svg";
import menuIcon from "../../assets/menu.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__text">
        <h1 className="header__text_title">Thr Solar System Exploration</h1>
      </div>

      <div className="header__buttons">
        <HeaderButton img={soundIcon} />
        <HeaderButton img={menuIcon} />
      </div>
    </header>
  );
}

export default Header;
