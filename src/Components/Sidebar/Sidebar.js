import "./Sidebar.css";
import Item from "../Item/Item";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";

const Sidebar = () => {
  const [isCollapsed, setisCollapsed] = useState(false);
  const items = [
    { icon: <LanguageIcon />, itemName: "All Countries" },
    { icon: <LocationOnIcon />, itemName: "My country" },
    { icon: <InfoIcon />, itemName: "General Info" },
  ];
  const onlyIcons = [
    { icon: <LanguageIcon /> },
    { icon: <LocationOnIcon /> },
    { icon: <InfoIcon /> },
  ];

  const renderSidebarItems = (items) => {
    if (items.length) {
      return items.map((item, index) => {
        return (
          <div key={index} className="Sidebar-Container">
            <Item icon={item.icon} itemName={item.itemName} />
          </div>
        );
      });
    }
    return null;
  };
  const handleClick = () => {
    setisCollapsed(true);
  };
  return (
    <div
      className={`Menu${isCollapsed ? " Menu-collapsed" : " Menu-expanded"}`}
    >
      {!isCollapsed ? (
        <div className="not-collapsed">
          {renderSidebarItems(items)}
          <div className="w-1/5 div-button">
            <button onClick={handleClick} className="collapse-button">
              <ArrowBackIosNewIcon className="arrow" />
            </button>
          </div>
        </div>
      ) : (
        <div className="collapsed">
          {renderSidebarItems(onlyIcons)}
          <div className="div-button">
            <button
              onClick={() => {
                setisCollapsed(false);
              }}
              className="collapse-button"
            >
              <ArrowForwardIosIcon className="arrow" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
