import { useState } from "react";
import "../main/style.css";

export default function Main(props) {
  
  return (
    <section>
      <img src={props.item.image} alt="Perfume " />
      <h4> {props.item.name} </h4>
      <p> {props.item.description1} </p>
      <p>
        {" "}
        KES{" "}
        {props.item.price.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}{" "}
      </p>
      <button onClick={props.addToCart}> Add to Cart</button>
    </section>
  );
}
