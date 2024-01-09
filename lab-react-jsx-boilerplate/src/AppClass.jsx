import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  

  // code here

  render(){
    const images = this.props.imgData;

    return(
      <div >
      <h1 className='title'>HELLO KALVIUM</h1>

    <div className="grid">
      {images.map((element ) => (
      <img src={element.img} id={element.id} width={"650vw"} />
    ))};
    
    </div>
    
    </div>

    )
  }
}
