import PropTypes from 'prop-types';

function InventoryDetail(props) {
  const componentStyling = {
    backgroundColor: '#f1ddd2',
    margin: '1% 5%',
    padding: '1em 1em',
    border: '2px solid',
    textAlign: 'center'
  }

  return (
    <section style={componentStyling}>
      <h2>{props.selectedItem.name} Details</h2>
      <h3><u>${props.selectedItem.price} per pound</u></h3>
      <p>origin: {props.selectedItem.origin}</p>
      <p>{props.selectedItem.roast} roast</p>
      <h3>{props.selectedItem.quantity} pounds remaining in inventory</h3>
    </section>
  );
}

InventoryDetail.propTypes = {
  selectedItem: PropTypes.object
};

export default InventoryDetail;
