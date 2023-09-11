import React from 'react';
import InventoryList from './InventoryList';
import InventoryDetail from './InventoryDetail';
import InventoryAddItem from './InventoryAddItem';
import NavBar from './NavBar';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedComponent: "InventoryList"
    };
  }

  render() {
    let currentView = null;
    switch(this.state.selectedComponent) {
      case "InventoryList":
        currentView = <InventoryList />
        break;
      case "InventoryDetail":
        currentView = <InventoryDetail />
        break;
      case "InventoryAddItem":
        currentView = <InventoryAddItem />
        break;
      default:
        currentView = <InventoryList />
    }
    return (
      <React.Fragment>
        <NavBar />
        {currentView}
      </React.Fragment>
    );
  }
}

export default InventoryControl;
