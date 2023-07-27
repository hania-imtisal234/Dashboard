import "./Sidebar.css";
import Item from "../Item/Item";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";
import { items } from "../../Constants/Constants";

const Sidebar = () => {
  const [isCollapsed, setisCollapsed] = useState(false);

  const renderSidebarItems = (items) => {
    if (items.length) {
      return items.map((item, index) => {
        return (
          <div key={index} className="Sidebar-Container">
            <Item
              icon={item.icon}
              itemName={item.itemName}
              isCollapsed={isCollapsed}
            />
          </div>
        );
      });
    }
    return null;
  };

  const handleClick = () => {
    setisCollapsed(!isCollapsed);
  };

  return (
    <div className={`Menu ${isCollapsed ? "Menu-collapsed" : "Menu-expanded"}`}>
      <div className={`not-collapsed ${isCollapsed ? "collapsed" : ""}`}>
        {renderSidebarItems(items)}
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
