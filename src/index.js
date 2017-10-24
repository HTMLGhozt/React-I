/*eslint no-unused-vars: "off"*/
/*eslint linebreak-style: ["error", "windows"]*/
import React, {Component} from 'react';
import { render } from 'react-dom';
//import './index.css';
// You'll want to import the necessary components you want the App component to render
class ToDo extends Component {
  constructor () {
    super();
    this.state = {
      ToDoList: [],
    };
    this.handleToDoList = this.handleToDoList.bind(this);
    this.handleAddItemToList = this.handleAddItemToList.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);  
  }

  handleToDoList(event) {
    this.setState({ ListItem: event.target.value });
  }
  render() {
    //console.log(JSON.stringify(this.state.ToDoList));
    return (
      <List
        handleToDoList = {this.handleToDoList}
        ListItem = {this.state.ListItem}
        handleAddItemToList = {this.handleAddItemToList}
        handleRemoveItem = {this.handleRemoveItem}
        ToDoList = {this.state.ToDoList}
      />
    );
  }
  handleAddItemToList() {
    this.state.ToDoList.push({ text: this.state.ListItem, completed: false, });
    this.setState({ ToDoList: this.state.ToDoList, ListItem: ''});    
  }
  handleRemoveItem() {
    let test = this.state.ToDoList.filter(value => value.completed !== true);
    this.setState({ ToDoList: test, ListItem: ''});
  }
}

const List = props => {
  return (
    <div>
      <input type='text' value={props.ListItem} onChange={props.handleToDoList} />
      <button onClick={props.handleAddItemToList}>Submit Item</button>
      <ul>{
        props.ToDoList.map((foofie, i) => {
          return <li key={i+1}>
            <input key={i+1} 
              type="checkbox" 
              onClick={() => {
                props.ToDoList[i].completed = true; 
                props.handleRemoveItem();
              }}
            />
            {foofie.text}
          </li>;
        })
      }</ul>
    </div>
  );
};

render(<ToDo />, document.getElementById('root'));