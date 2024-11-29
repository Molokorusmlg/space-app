import "./css/headerButton.css";

export const HeaderButton = ({ img }) => {
  return (
    <div className="header__link">
      <img src={img} alt="img" />
    </div>
  );
};
