
import React, { Component } from 'react';



class Login extends Component {
    constructor(props){
      super(props);
      console.log(props)
      this.username = React.createRef();
      this.password = React.createRef();

  
    }

    handleSubmit =(e) =>{
      e.preventDefault()
      console.log(this.props)
      this.props.login(this.username.current.value, this.password.current.value)
      //console.log(this.username.current.value, this.password.current.value)
    }


    render(){
        return(
            <div>
              <div>
              <div className="container" style={{textAlign: "center",width: '60%', backgroundColor: 'rgba(0, 0, 0, .5)',padding: "20px", margin: "40px auto", borderRadius: "5px" }}>

              <form onSubmit={this.handleSubmit}   >
                <input  label="Username:" type="text" placeholder="Username"  ref={this.username}/><br/>
                <input  label="Password:" type="password" placeholder="Password" ref={this.password} /> <br/>
                <div>
                  <button  type="submit">Login</button>
                </div>
              </form> 
              </div>

            </div>

            </div>
        )
    }
}

export default Login;