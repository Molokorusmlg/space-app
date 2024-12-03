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
  // через хук добавить текущее занчение selected, в цикле map проверка, если selected === name, => добавить класс selcted который width 200%

  const [burgerClass, setBurgerClass] = useState("hide__burger");

  const toggleBurgerClass = () => {
    setBurgerClass(
      burgerClass === "hide__burger" ? "active__burger" : "hide__burger"
    );
  };

  const planetEarth = {
    src: Earth,
    name: "earth",
    classPlanet: "planets__planet earth",
    classImg: "earth-img",
  };

  const planetMoon = {
    src: Moon,
    name: "moon",
    classPlanet: "planets__planet moon",
    classImg: "planets__planet-img",
  };

  const planetMars = {
    src: Mars,
    name: "mars",
    classPlanet: "planets__planet mars",
    classImg: "mars-img",
  };

  const planets = [planetEarth, planetMoon, planetMars];

  return (
    <div className="main__page">
      <Header onToggleBurgerClass={toggleBurgerClass} />
      <Burger className={burgerClass} onToggleBurgerClass={toggleBurgerClass} />

      <div className="planets">
        {planets.map(({ src, classPlanet, classImg }) => {
          return (
            <div key={src} className={classPlanet}>
              <img src={src} alt="earth-img" className={classImg} />
            </div>
          );
        })}
      </div>

      <div className="main__info">
        <div className="main__info__line-first">
          <img src={Line} alt="line" />
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
