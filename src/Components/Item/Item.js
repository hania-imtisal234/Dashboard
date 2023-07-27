import "./Item.css";

const Item = ({ icon, itemName = null, isCollapsed }) => {
  return (
    <div className="Sidebar-Item">
      {!isCollapsed ? (
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
            <div className="item-name">{(itemName = "")}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Item;
