import { useState } from "react";

export default function AddToCart() {
  const [count, setCount] = useState(0);

  function addToCart() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>

      <p>{count}</p>
      <button onClick={addToCart}> Add to Cart</button>

    </>
  );
}