import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer.jsx";
import "../components/header/style.css";
import items from "../src/data.js";
import { useState } from "react";

function App() {
<<<<<<< HEAD
// map over perfume data
=======
  const [count, setCount] = useState(0);
>>>>>>> 5f03065 (styling and color)
  const data = items.map(function (item) {
    return <Main id={item.id} item={item} addToCart={addToCart} count={count} />;
  });


  function addToCart() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <Header count={count} />
      <main > {data } </main>
      <Footer />
    </>
  );
}

export default App;
