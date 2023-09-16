import PropTypes from 'prop-types';

function InventoryDetail(props) {
  return (
    <section className="inventory-item-detail">
      <h2>{props.selectedItem.name} Details</h2>
      <h3>${props.selectedItem.price} per pound</h3>
      <h4><em>origin: {props.selectedItem.origin}</em></h4>
      <h4>{props.selectedItem.roast} roast</h4>
      <h3>{props.selectedItem.quantity} pounds remaining in inventory</h3>
      <h1>update button go here</h1>
    </section>
  );
}

InventoryDetail.propTypes = {
  selectedItem: PropTypes.object
};

export default InventoryDetail;
