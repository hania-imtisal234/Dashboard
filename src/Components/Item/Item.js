import "./Item.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Item = ({ icon, itemName = null }) => {
  const [isExpanded, setisExpanded] = useState(!itemName);
  useEffect(() => {
    setisExpanded(!itemName);
  }, [itemName]);

  return (
    <div className="Sidebar-Item">
      {isExpanded ? (
        <div className="item-container-Expanded">
          <div className="items">
            <div className="icon">{icon}</div>
            <div className="item-name">{itemName}</div>
          </div>
        </div>
      ) : (
        <div className="item-container-Collapsed">
          <div className="items">
            <div className="icon">{icon}</div>
            <div className="item-name">{itemName}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Item;
