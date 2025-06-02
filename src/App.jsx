import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer.jsx";
import "../components/header/style.css";
import items from "../src/data.js";
import { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import CartPage from "../components/cartpage/CartPage.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);


  function addToCart(item){
    setCart( (prevCart) => {
      const existing = prevCart.find( function (cartItem){
          cartItem.id === item.id
      })

      if (existing) {
        return prevCart.map((cartItem) => {
          cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem

        })
      }
      else {
        return [...prevCart, { ...item, quantity: 1} ]
      }
    })
  }

  const data = items.map(function (item) {
    return (
      <Main key={item.id} item={item} addToCartNotification={addToCartNotification} count={count} />
    );
  });

  function addToCartNotification() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      
        <Header count={count} addToCart={() => addToCart(items)} />
        <Routes>
          <Route path="/" element={ <main> {data} </main> } />
          <Route path="/cart" element={<CartPage cart={cart} />} />
        </Routes>
      
      <Footer />
    </>
  );
}

export default App;
