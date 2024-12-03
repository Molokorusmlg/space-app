import profileIcon from "../../assets/profile-icon.svg";
import arrowBack from "../../assets/arrow_forward_ios.svg";
import aboutUs from "../../assets/about-us.svg";
import "./burger.scss";

function Burger({ className, onToggleBurgerClass }) {
  return (
    <div className={`burger ${className}`}>
      <div className="burger__profile">
        <img className="burger__profile_img" src={profileIcon} alt="" />
        <p className="burger__profile_text">Profile</p>
      </div>

      <div className="burger__profile">
        <img className="burger__profile_img" src={profileIcon} alt="" />
        <p className="burger__profile_text">Profile</p>
      </div>

      <div className="burger__profile">
        <img className="burger__profile_img" src={aboutUs} alt="" />
        <p className="burger__profile_text">About us</p>
      </div>

      <div className="burger__arrow" onClick={onToggleBurgerClass}>
        <img src={arrowBack} alt="" className="burger__arrow_img" />
      </div>
    </div>
  );
}

export default Burger;
