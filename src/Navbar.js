import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TodoContainer from './TodoContainer';
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';


class App extends Component {
    constructor(props){
      super(props);
      console.log(props)
  
    }
    render(){
        return(
            <div >
                <ul style={{listStyleType: "none", display: "flex", backgroundColor: "#000080", margin: "0", padding: "10px" , textDecoration: "none"}}>
                    <li style={{paddingRight: "10px" , color: "#FFFFFF", flexGrow: "1" }}>
                        <Link to="/" style={{ textDecoration: 'none', color: "white" }}>Home</Link>
                    </li>
                    <li style={{paddingRight: "10px", flexGrow: "1"}}>
                        <Link to="/login" style={{ textDecoration: 'none', color: "white" }}>Login</Link>
                    </li>
                    <li style={{ flexGrow: "1"}}>
                        <Link to="/register" style={{ textDecoration: 'none', color: "white" }}>Register</Link>
                    </li>

                    <li style={{flexGrow: "8"}}></li>
                    <li style={{flexGrow: "1"}}>
                        {this.props.logged?<a style={{ textDecoration: 'none', color: "white" }} onClick={this.props.logout}>Logout</a>:""}
                    </li>
                </ul>


            </div>
        )
    }
}

export default App;