import InventoryItem from './InventoryItem';

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
        />
    )}
    </section>
  );
}

export default InventoryList;
