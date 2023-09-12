
function InventoryAddItem(props) {
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.origin.value);
    console.log(event.target.price.value);
    console.log(event.target.roast.value);
  }

  return (
    <section className="add-item-form">
    <h3>Add new coffee sack to inventory</h3>
    <form onSubmit={handleNewItemFormSubmission}>
    <input type='text' name='name' placeholder='blend name...'/>
    <br/>
    <input type='text' name='origin' placeholder='country of origin...' />
    <br/>
    <label htmlFor='price'>Price (dollars): 
    <input type='number' name='price' defaultValue='8' id='price' />
    </label>
    <div>
    <label htmlFor='lightroast'>Light Roast
    <input type='radio' name='roast' value='light' id='lightroast' />
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

export default InventoryAddItem;
