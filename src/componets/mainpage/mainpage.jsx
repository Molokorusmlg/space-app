import "./css/mainpage.css";
import Header from "../header/header";
import Earth from "../../assets/Earth0230.svg";
import Moon from "../../assets/Moon0100.svg";
import Mars from "../../assets/Masr.svg";

function MainPage() {
  return (
    <div className="main__page">
      <Header />

      <div className="planets">
        <div className="planets__planet earth">
          <img src={Earth} alt="earth" className="planets__planet-img" />
        </div>
        <div className="planets__planet moon">
          <img src={Moon} alt="earth" className="planets__planet-img" />
        </div>
        <div className="planets__planet earth">
          <img src={Mars} alt="earth" className="planets__planet-img" />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
