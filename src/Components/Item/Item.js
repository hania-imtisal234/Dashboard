import { useState } from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({
  icon,
  itemName = null,
  isCollapsed,
  handleItemClick,
  currentItemSelected,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    handleItemClick(itemName);
    setIsClicked(true);
  };

  return (
    <div
      className={`Sidebar-Item ${isClicked ? "clicked" : "not-clicked"}`}
      onClick={handleClick}
    >
      {!isCollapsed ? (
        <div
          className={`item-container-Expanded ${
            currentItemSelected === itemName ? "bg-dark-blue" : ""
          }`}
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
