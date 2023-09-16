
function InventoryItem(props) {
  return (
    <div className="inventory-item-container" onClick={() => props.onClickListItem(props.id)}>
      <h3>{props.name}</h3>
      <h4><em>origin: {props.origin}</em></h4>
      <h2>${props.price}</h2>
      <h4>{props.roast} roast</h4>
      <h4>{props.quantity} pounds remaining</h4>
    </div>
  );
}

export default InventoryItem;
