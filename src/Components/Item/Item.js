import { useState } from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ icon, itemName = null, isCollapsed }) => {
  const [isClicked, setIsClicked] = useState(false);
  const changeColor = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`Sidebar-Item ${isClicked ? "clicked" : "not-clicked"}`}
      onClick={changeColor}
    >
      {!isCollapsed ? (
        <div className="item-container-Expanded">
          <Link to={`/${itemName.replace(/\s/g, "")}`}>
            <div className="items">
              <div className="icon">{icon}</div>
              <div className="item-name">{itemName}</div>
            </div>
          </Link>
        </div>
      ) : (
        <div className="item-container-Collapsed">
          <div className="items">
            <div className="icon">{icon}</div>
            <div className="item-name">{(itemName = "")}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Item;
