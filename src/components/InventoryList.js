import InventoryItem from './InventoryItem';
import PropTypes from 'prop-types';

function InventoryList(props) {

  const componentStyling = {
    textAlign: 'center',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around'
  };

  if (props.itemList.length === 0) {
    return <p style={{textAlign: 'center'}}><em>No items in inventory.</em></p>;
  } else {
  return (
    // map each item to an InventoryItem element
    <section style={componentStyling}>
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
  );}
}

InventoryList.propTypes = {
  itemList: PropTypes.array,
  onClickListItem: PropTypes.func,
  onClickPurchaseButton: PropTypes.func
};

export default InventoryList;
