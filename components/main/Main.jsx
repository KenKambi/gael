import { useState } from "react";
import "../main/style.css";

export default function Main(props) {
   //console.log(props.item.id)
   
   


  return (
    

    <section>
      <h3> Name </h3>
      <img src={props.item.image} alt="Perfume " />
      <p> {props.item.description} </p>
      <p> KES {props.item.price.toFixed(2)} </p>
      <button onClick={props.addToCart}> Add to Cart</button>
    </section>
   

  );
}
