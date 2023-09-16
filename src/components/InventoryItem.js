
function InventoryItem(props) {
  return (
    <div className="inventory-item-container">
      <h3>{props.name}</h3>
      <h4><em>origin: {props.origin}</em></h4>
      <h2>${props.price}</h2>
      <h4>{props.roast} roast</h4>
    </div>
  );
}

export default InventoryItem;
