import { useState } from "react";
import Header from "./Header";

export default function AddToCart() {
  const [count, setCount] = useState(0);

  function addToCart() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
    <Header count={count}/>
      <p>{count}</p>
      <button onClick={addToCart}> Add to Cart</button>

    </>
  );
}