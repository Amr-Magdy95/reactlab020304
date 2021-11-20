import './App.css';
import { Component } from 'react';


class Todo extends Component {
    constructor(props){
      super(props);
      console.log(props)
  
    }
    render(){
        return(
            <div>

                <ul style={{listStyleType: "none"}}>
                    {this.props.tasks.map( (item) => {
                    return <li  style={{backgroundColor:item.done?'#8ECF72':'white', display: "flex", padding: "10px 0px", borderBottom:"1px solid rgba(0,0,0,.5)"}} key={item.id}>
                    <span style={{ flexGrow: 11, textAlign: "left", paddingLeft: "5px"}}>{item.task}</span>
                    <div style={{ flexGrow: 1}}>
                        <button onClick={()=>this.props.deleteItem(item.id)} style={{backgroundColor: "#f44336"}} >Delete</button>
                        <button onClick={()=>this.props.toggleDone(item.id)}>Done</button>

                    </div>
                     </li>
            })}
          </ul>
            </div>
        )
    }
}

export default Todo;