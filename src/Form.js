import './App.css';
import { Component } from 'react';


class Form extends Component {
    constructor(props){
      super(props);
      console.log(props)
  
    }
    render(){
        return(
            <>

                <div className="formContainer">
                    <label> Task </label>
                    <input onChange={(e)=>{this.props.setText(e) } } value={this.props.temp} />
                    <button onClick = { ()=>{ this.props.addItem() } } style={{backgroundColor: "#008CBA"}} >Add Item</button>
                </div>
            </>
        )
    }
}

export default Form;