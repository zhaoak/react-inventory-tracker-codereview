import PropTypes from "prop-types";

function NavBar(props) {

  function handleNavButtonClick(selectedComponent) {
    // pass in string containing name of component to switch to that component
    props.onClickNavButton(selectedComponent);
  }
  
  const componentStyling = {
    margin: '3% 3%',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    gap: '5%'
  };

  return (
    <nav style={componentStyling} >
    <button type="button" onClick={() => handleNavButtonClick("InventoryList")}>Inventory List</button>
    <button type="button" onClick={() => handleNavButtonClick("InventoryAddItem")}>Add Item</button>
    </nav>
  );
}

NavBar.propTypes = {
  onClickNavButton: PropTypes.func
};

export default NavBar;
