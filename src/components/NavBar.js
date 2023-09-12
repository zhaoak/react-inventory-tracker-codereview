import PropTypes from "prop-types";

function NavBar(props) {

  function handleNavButtonClick(selectedComponent) {
    // pass in string containing name of component to switch to that component
    props.onClickNavButton(selectedComponent);
  }

  return (
    <nav>
    <button type="button" onClick={() => handleNavButtonClick("InventoryList")}>Inventory List</button>
    <button type="button" onClick={() => handleNavButtonClick("InventoryAddItem")}>Add Item</button>
    </nav>
  );
}

NavBar.propTypes = {
  onClickNavButton: PropTypes.func
};

export default NavBar;
