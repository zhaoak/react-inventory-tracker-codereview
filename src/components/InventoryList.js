import InventoryItem from './InventoryItem';
import PropTypes from 'prop-types';

function InventoryList(props) {
  return (
    // map each item to an InventoryItem element
    <section className="item-list">
    {props.itemList.map((item) => 
      <InventoryItem name={item.name}
          origin={item.origin}
          price={item.price}
          roast={item.roast}
          quantity={item.quantity}
          id={item.id}
          key={item.id}
          onClickListItem={props.onClickListItem}
          onClickPurchaseButton={props.onClickPurchaseButton}
        />
    )}
    </section>
  );
}

InventoryList.propTypes = {
  itemList: PropTypes.object,
  onClickListItem: PropTypes.func,
  onClickPurchaseButton: PropTypes.func
};

export default InventoryList;
