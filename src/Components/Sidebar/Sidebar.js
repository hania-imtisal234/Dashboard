import "./Sidebar.css";
import Item from "../Item/Item";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";
import { items } from "../../Constants/Constants";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentItemSelected, setCurrentItemSelected] = useState("");

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleItemClick = (itemName) => {
    setCurrentItemSelected(itemName);
  };

  return (
    <div className={`Menu ${isCollapsed ? "Menu-collapsed" : ""}`}>
      <div className="not-collapsed">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={`Sidebar-Container ${
                currentItemSelected === item.itemName ? "bg-dark-blue" : ""
              }`}
            >
              <Item
                icon={item.icon}
                itemName={item.itemName}
                isCollapsed={isCollapsed}
                handleItemClick={handleItemClick}
                currentItemSelected={currentItemSelected}
              />
            </div>
          );
        })}
        <div className="div-button">
          <button onClick={handleClick} className="collapse-button">
            {isCollapsed ? (
              <ArrowForwardIosIcon className="arrow" />
            ) : (
              <ArrowBackIosNewIcon className="arrow" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
