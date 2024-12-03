import "./mainpage.scss";
import { useState } from "react";
import Header from "../header/header";
import Earth from "../../assets/Earth0230.svg";
import Moon from "../../assets/Moon0100.svg";
import Mars from "../../assets/Masr.svg";
import Line from "../../assets/line.svg";
import Arrow from "../../assets/arrow_forward_ios.svg";
import Burger from "../burger/burger";

function MainPage() {
  // const [activeBurger, setActiveBurger] = useState("show__burger");

  const [burgerClass, setBurgerClass] = useState("hide__burger");

  const toggleBurgerClass = () => {
    setBurgerClass(
      burgerClass === "hide__burger" ? "active__burger" : "hide__burger"
    );
  };

  return (
    <div className="main__page">
      <Header onToggleBurgerClass={toggleBurgerClass} />
      <Burger className={burgerClass} onToggleBurgerClass={toggleBurgerClass} />

      <div className="planets">
        <div className="planets__planet earth">
          <img
            src={Earth}
            alt="earth-img"
            className="planets__planet-img earth-img"
          />
        </div>
        <div className="planets__planet moon">
          <img src={Moon} alt="earth" className="planets__planet-img" />
        </div>
        <div className="planets__planet mars">
          <img
            src={Mars}
            alt="earth"
            className="planets__planet-img mars-img"
          />
        </div>
      </div>

      <div className="main__info">
        <div className="main__info__line-first">
          <img src={Line} alt="line1" />
        </div>

        <div className="main__info__text">
          <h3 className="main__info__text_title">Moon</h3>
          <div className="main__info__text__button">
            <p className="main__info__text_paragraph">Explore the planet</p>
            <img
              className="main__info__text_arrow_img"
              src={Arrow}
              alt="click-me"
            />
          </div>
        </div>

        <div className="main__info__line-first">
          <img src={Line} alt="line1" />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
