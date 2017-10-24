/*eslint no-unused-vars: "off"*/
/*eslint linebreak-style: ["error", "windows"]*/
import React, {Component} from 'react';
import { render } from 'react-dom';

class ToDo extends Component {
  constructor () {
    super();
    this.state = {
      ToDoList: [],
      ListItem: '',
    };
    this.count = 0
    this.handleToDoList = this.handleToDoList.bind(this);
    this.handleAddItemToList = this.handleAddItemToList.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this); 
  }
  handleToDoList(event) {
    this.setState({ ListItem: event.target.value, });
  }
  handleAddItemToList() {
    this.state.ToDoList.push({ text: this.state.ListItem, completed: false, });
    this.setState({ ToDoList: this.state.ToDoList, ListItem: '', });    
  }
  handleRemoveItem() {
    this.count++;
    let ToDoList = this.state.ToDoList.filter(value => value.completed !== true);
    this.setState({ ToDoList, ListItem: ''});
  }

  render() {
    return (
      <List
        count = {this.count}
        ToDoList = {this.state.ToDoList}
        ListItem = {this.state.ListItem}
        handleToDoList = {this.handleToDoList}
        addItemToList = {this.handleAddItemToList}
        removeItem = {this.handleRemoveItem}
      />
    );
  }
}

const List = props => {
  return (
    <div>
      <span>
        <input 
          type='text' 
          value={props.ListItem} 
          onChange={props.handleToDoList} 
        />
        <button onClick={props.addItemToList}>Submit Item</button>
      </span>

      { props.ToDoList.map((foofie, i) => {
        return (
          <label className="listItem" key={`label_${props.count}${i}`}>
            <input 
              key={`fakeSpan_${props.count}${i}`}
              type='checkbox'
              onClick={() => {
                props.ToDoList[i].completed = true;
                setTimeout(() => {props.removeItem()}, 5000);
              }}
            />
            <span key={`span_${props.count}${i}`}>{foofie.text}</span>
          </label>
        );
      }) }
    </div>
  );
};

render(<ToDo />, document.getElementById('root'));