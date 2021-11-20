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
      this.state={ logged :false, users:[{un:"johndoe", pw:"123"}]};
  
    }

    logout = ()=>{
      this.setState({logged:false});
    }

    login= (un, pw)=>{
      //console.log("here" + un + "here" + pw)
      for (let i = 0; i < this.state.users.length; i++) {
        if(un == this.state.users[i].un){
          if(pw == this.state.users[i].pw){
            this.setState({logged:true});
            console.log(this.state)

          }
        }   
      }  
    }

    handleRegister= (un, pw, email) =>{

      this.setState((prevState)=>{
        return{
        users: [...prevState.users, {un: un, pw: pw, email:email}]
      }});

      console.log(this.state);
    }
    render(){
        return(
            <div>
              <Router >
                <Navbar logged = {this.state.logged} logout ={this.logout} />
                <Switch>
                  {this.state.logged?<Route path = "/" component = {TodoContainer} exact></Route> : ""}
                  <Route path = "/register" > <Register handleRegister={this.handleRegister} /></Route>
                  <Route path = "/login" > <Login login={this.login} /></Route>

                </Switch>

              </Router>

            </div>
        )
    }
}

export default App;