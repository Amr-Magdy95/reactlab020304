
import { Component } from 'react';



class Register extends Component {
    constructor(props){
      super(props);
      console.log(props);
      this.state={
        un:"",pw: "", rpw: "", email: ""
      }
    }

    handleChange =(val, event) => {
      console.log(this.state)
      console.log(val)
      console.log(event.target.value)
      this.setState({[val]: event.target.value});
    }
  
    handleSubmit =(event) => {
      event.preventDefault();
      if(this.state.pw == this.state.rpw){
        this.props.handleRegister(this.state.un, this.state.pw, this.state.email);
      }
    }

    render(){
        return(
            <div>
              <div className="container" style={{textAlign: "center",width: '60%', backgroundColor: 'rgba(0, 0, 0, .5)',padding: "20px", margin: "40px auto", borderRadius: "5px" }}>

              <form onSubmit={this.handleSubmit}   >
                <label>
                  
                  <input type="text" value={this.state.un}  onChange={(e)=>{this.handleChange("un", e) } } placeholder="Username" />
                </label> <br/>
                <label>
                  
                  <input type="password" value={this.state.pw} onChange={(e)=>{this.handleChange("pw", e) } } placeholder="Password" />
                </label><br/>
                <label>
                  
                  <input type="password" value={this.state.rpw} onChange={(e)=>{this.handleChange("rpw", e) } } placeholder="Re-Enter Password" />
                </label><br/>
                <label>
                  
                  <input type="email" value={this.state.email} onChange={(e)=>{this.handleChange("email", e) } } placeholder="Email" />
                </label>
                <div>
                  <button  type="submit">Register</button>
                </div>
              </form> 
              </div>

            </div>
        )
    }
}

export default Register;