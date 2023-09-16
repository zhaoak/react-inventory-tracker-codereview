import PropTypes from 'prop-types';

function InventoryItem(props) {
    function handlePurchaseItem(event) {
      event.preventDefault();
      props.onClickPurchaseButton(event.target.amount.value, props.id);
    }

  return (
    <section className="inventory-item">
      <div className="inventory-item-info" onClick={() => props.onClickListItem(props.id)}>
        <h3>{props.name}</h3>
        <h4><em>origin: {props.origin}</em></h4>
        <h2>${props.price}</h2>
        <h4>{props.roast} roast</h4>
        <h4>{props.quantity} pounds remaining</h4>
      </div>
      <form className="inventory-item-purchase-form" onSubmit={handlePurchaseItem}>
        <h5>Purchase this coffee:</h5>
        <label>Quantity (lbs.): 
        <input type='number' name='amount' defaultValue='1' min='1' placeholder='amount (pounds)' />
        </label>
        <button type='submit'>Purchase</button>
      </form>
    </section>
  );
}

InventoryItem.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  onClickListItem: PropTypes.func,
  onClickPurchaseButton: PropTypes.func
};

export default InventoryItem;
