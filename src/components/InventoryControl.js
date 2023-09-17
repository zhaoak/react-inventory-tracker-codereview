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
    this.setState({selectedComponent: newSelectedComponent, selectedItem: null});
  }

  handleAddingNewItemToList = (newItem) => {
    const newItemList = this.state.itemList.concat(newItem);
    // set state to updated list and switch to list component
    this.setState({itemList: newItemList, selectedComponent: "InventoryList"});
  }

  handleSelectingItemFromList = (id) => {
    const selectedItem = this.state.itemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem, selectedComponent: "InventoryDetail"});
  }

  handlePurchaseFromInventoryItem = (amount, id) => {
    const purchasedItem = this.state.itemList.filter(item => item.id === id)[0];
    if (purchasedItem.quantity < amount) {
      window.alert(`There isn't enough of that coffee left to sell ${amount} pounds!`);
      return;
    } else {
      purchasedItem.quantity -= amount;
      const modifiedItemList = this.state.itemList.filter(item => item.id !== id).concat(purchasedItem);
      this.setState({itemList: modifiedItemList});
    }
  }

  handleDeleteItemFromInventory = (id) => {
    const itemToDelete = this.state.itemList.filter(item => item.id === id)[0];
    if (itemToDelete.quantity > 0) {
      if (window.confirm("Remove item from inventory? There is still coffee remaining!")) {
        const modifiedItemList = this.state.itemList.filter(item => item.id !== id);
        this.setState({itemList: modifiedItemList});
      }
      else {
        return;
      }
    } else {
    const modifiedItemList = this.state.itemList.filter(item => item.id !== id);
    this.setState({itemList: modifiedItemList});
    }
  }

  render() {
    // view swapping logic
    let currentView = null;
    switch(this.state.selectedComponent) {
      case "InventoryList":
        currentView = <InventoryList itemList={this.state.itemList} onClickListItem={this.handleSelectingItemFromList} onClickPurchaseButton={this.handlePurchaseFromInventoryItem} onClickDeleteButton={this.handleDeleteItemFromInventory} />
        break;
      case "InventoryDetail":
        currentView = <InventoryDetail selectedItem={this.state.selectedItem} />
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
