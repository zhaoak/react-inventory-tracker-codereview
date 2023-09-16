import React from 'react';
import InventoryList from './InventoryList';
import InventoryDetail from './InventoryDetail';
import InventoryAddItem from './InventoryAddItem';
import NavBar from './NavBar';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
      selectedComponent: "InventoryList",
      selectedItem: null
    };
  }

  handleSelectedComponentSwap = (newSelectedComponent) => {
    this.setState({selectedComponent: newSelectedComponent});
  }

  handleAddingNewItemToList = (newItem) => {
    const newItemList = this.state.itemList.concat(newItem);
    // set state to updated list and switch to list component
    this.setState({itemList: newItemList, selectedComponent: "InventoryList"});
  }

  render() {
    // view swapping logic
    let currentView = null;
    switch(this.state.selectedComponent) {
      case "InventoryList":
        currentView = <InventoryList itemList={this.state.itemList} />
        break;
      case "InventoryDetail":
        currentView = <InventoryDetail />
        break;
      case "InventoryAddItem":
        currentView = <InventoryAddItem onAddNewItem={this.handleAddingNewItemToList} />
        break;
      default:
        currentView = <InventoryList itemList={this.state.itemList} />
    }

    return (
      <React.Fragment>
        <NavBar onClickNavButton={this.handleSelectedComponentSwap}/>
        {currentView}
      </React.Fragment>
    );
  }
}

export default InventoryControl;
