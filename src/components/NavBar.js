
function NavBar(props) {

  function handleNavButtonClick(selectedComponent) {
    props.onClickNavButton(selectedComponent);
  }

  return (
    <nav>
    <button type="button" onClick={() => handleNavButtonClick("InventoryList")}>Inventory List</button>
    <button type="button" onClick={() => handleNavButtonClick("InventoryAddItem")}>Add Item</button>
    </nav>
  );
}

export default NavBar;
