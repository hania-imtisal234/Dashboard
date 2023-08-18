import { useState } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../../Context/UserProvider";
const Item = ({
  icon,
  itemName = null,
  isCollapsed,
  handleItemClick,
  currentItemSelected,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const { isDarkTheme } = useUserContext();
  const handleClick = () => {
    handleItemClick(itemName);
    setIsClicked(true);
  };

  return (
    <div
      className={`Sidebar-Item ${isClicked ? "clicked" : "not-clicked"} ${
        isDarkTheme ? "bg-dark" : "bg-my-white"
      }`}
      onClick={handleClick}
    >
      {!isCollapsed ? (
        <div
          className={`item-container-Expanded ${
            currentItemSelected === itemName ? "bg-dark-blue" : ""
          } ${isDarkTheme ? "bg-dark" : "bg-my-white"}`}
        >
          <Link to={`/${itemName.replace(/\s/g, "")}`}>
            <div
              className={`items align-center ${
                currentItemSelected === itemName ? "" : ""
              }`}
            >
              <div className="icon">{icon}</div>
              <div className="item-name">{itemName}</div>
            </div>
          </Link>
        </div>
      ) : (
        <div className="item-container-Collapsed">
          <Link to={`/${itemName.replace(/\s/g, "")}`}>
            <div
              className={`items ${currentItemSelected === itemName ? "" : ""}`}
            >
              <div className="icon">{icon}</div>
              <div className="item-name">{(itemName = "")}</div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Item;
