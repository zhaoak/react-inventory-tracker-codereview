import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function InventoryAddItem(props) {
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onAddNewItem({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      roast: event.target.roast.value,
      quantity: 130, // quantity, in pounds, of remaining beans in sack
      id: v4()
    });
    }

  return (
    <section className="add-item-form">
    <h3>Add new coffee sack to inventory</h3>
    <form onSubmit={handleNewItemFormSubmission}>
    <input type='text' name='name' placeholder='blend name...' required />
    <br/>
    <input type='text' name='origin' placeholder='country of origin...' required />
    <br/>
    <label htmlFor='price'>Price (dollars): 
    <input type='number' name='price' defaultValue='8' min='1' id='price' />
    </label>
    <div>
    <label htmlFor='lightroast'>Light Roast
    <input type='radio' name='roast' value='light' id='lightroast' required />
    </label>
    <br/>
    <label htmlFor='mediumroast'>Medium Roast
    <input type='radio' name='roast' value='medium' id='mediumroast' />
    </label>
    <br/>
    <label htmlFor='darkroast'>Dark Roast
    <input type='radio' name='roast' value='dark' id='darkroast' />
    </label>
    </div>
    <button type='submit'>Add item</button>
    </form>
    </section>

  );
}

InventoryAddItem.propTypes = {
  onAddNewItem: PropTypes.func
};

export default InventoryAddItem;
