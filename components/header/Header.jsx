import { useEffect, useState } from "react";
import icon from "../header/gael-logo.jpeg";
import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const [cartMessage, setCartMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (props.count > 0) {
      setCartMessage(true);

      const timer = setTimeout(() => {
        setCartMessage(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [props.count]);

  function handleToCartSection() {
    navigate("/cart");
    window.scrollTo(0, 0);
  }
  function handleToHomeSection() {
    navigate("/home");
  }

  const styles = {
    color: "#FFF5F8",
    width: "30px",
    height: "25px",
  };
  return (
    <header>
      <button className="logo-btn" onClick={handleToHomeSection} title="Home">
        <nav>
          <img className="gael-logo" src={icon} alt="Gael Essence" />
          <h3> Gael Essencesssszzzyyyy </h3>
        </nav>
      </button>
      <div className="cart">
        <button
          onClick={handleToCartSection}
        >
          <FaCartArrowDown style={styles} title="Cart Items" />
        </button>
        <div className="cart-number">
          <span> {props.count} </span>
        </div>
        <p className={`cart-message ${cartMessage ? "show" : ""} `}>
          {props.count} {props.count > 1 ? "Items" : "Item"} added to cart.
        </p>
      </div>
    </header>
  );
}
