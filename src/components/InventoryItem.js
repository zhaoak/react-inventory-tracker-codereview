import PropTypes from 'prop-types';

function InventoryItem(props) {
    function handlePurchaseItem(event) {
      event.preventDefault();
      props.onClickPurchaseButton(event.target.amount.value, props.id);
    }

  const componentStyling = {
    backgroundColor: '#f1ecd2',
    margin: '1% 5%',
    padding: '1em 1em',
    border: '2px solid',
    textAlign: 'center'
  }

  return (
    <section style={componentStyling} >
      <div className="inventory-item-info" onClick={() => props.onClickListItem(props.id)}>
        <h2>{props.name}</h2>
        <h2><u>${props.price}</u></h2>
        <h4>{props.quantity} pounds remaining</h4>
      </div>
      <hr />
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
