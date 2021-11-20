import './App.css';
import { Component } from 'react';
import Todo from './Todo.js';
import Form from './Form.js';

class TodoContainer extends Component {
  constructor(){
    super();
    this.state = {
      temp: "",
      items:[
        {id: 0, task: "1", done: false},
        {id: 1, task: "2", done: false},
        {id: 2, task: "3", done: false}]
    }

  }

  deleteItem=(id)=>{
    let itemIndex = this.state.items.findIndex((item)=>item.id == id);
    this.state.items.splice(itemIndex,1);
    this.setState({items:this.state.items});
}

  toggleDone=(id)=>{
    let item = this.state.items.find((item)=>item.id==id)
    item.done = !item.done;
    this.setState({items:this.state.items});
}

  addItem = () =>{
    this.setState( (prevState)=>{
      var itemId = prevState.items.length;
      var taskText = this.state.temp;
      return {
        items: [...prevState.items, {id: itemId, task: taskText, done: false}],
        temp: "",
        
      }
    })

  }

  setText = (e) =>{
    this.setState({temp: e.target.value})
    console.log(this.state)
  }

  render(){
    var {items} = this.state;
    return (
      <div className="App">

        <div className="container" style={{width: '60%', backgroundColor: 'rgba(0, 0, 0, .5)',padding: "20px", margin: "40px auto", borderRadius: "5px" }}>
            <Form addItem={this.addItem} setText={this.setText} temp={this.state.temp} />
            <Todo tasks={this.state.items} deleteItem={this.deleteItem} toggleDone={this.toggleDone} temp={this.state.temp} />
        </div>
      </div>
    );
  }

}

export default TodoContainer;
