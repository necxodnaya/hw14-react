import React from "react";
import "./App.css";
import ListItem from "./components/ListItem/ListItem";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deletItem = this.deletItem.bind(this)


  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !=="" ){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:"",
          key:""
        }
    }) 
  };

  } 
      deletItem(key){
    const filteredItems = this.state.items.filter(item =>
      item.key!==key)
      this.setState({
        items: filteredItems,
      })
  }

  render() {
    return (
      <div className="App">
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter text"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add</button>
          </form>
        <ListItem items = {this.state.items}
        deletItem = {this.deletItem}
        />
      </div>
    );
  }
}
export default App;
