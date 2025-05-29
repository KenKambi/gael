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
  const data = items.map(function (item) {
    return (
      <Main id={item.id} item={item} addToCart={addToCart} count={count} />
    );
  });

  function addToCart() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      
        <Header count={count} />
        <Routes>
          <Route path="/" element={ <main> {data} </main> } />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      
      <Footer />
    </>
  );
}

export default App;
