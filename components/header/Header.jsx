import { useState } from "react";
import reactLogo from "../header/react.svg";
import icon from "../header/gael-logo.jpeg";
import { FaCartArrowDown } from "react-icons/fa";

export default function Header(props) {

  const [open, setOpen] = useState(false)

  const handleShow = () => {
    setOpen(!open)
  }

  const styles = {
    color: "#FFF5F8",
    width: "30px",
    height: "25px",
  };
  return (
    <header>
      <nav>
        {/* <img src={reactLogo} alt="React-Logo"/> */}
        <img className="gael-logo" src={icon} alt="Gael Essence" />
        <h3> Gael Essence </h3>
      </nav>
      <div className="cart">
        <button onClick={handleShow} > 
          <FaCartArrowDown style={styles} title="Cart Items" />
        </button>
        <div className="cart-number">
          <span> {props.count} </span>
        </div>
      { open && <p>
        Welcome! This area contains important details. 
        You can use this space to show notifications, 
        instructions, or messages to your users. 
        Click the envelope icon again to close this dialog.
      </p>}
      </div>

    </header>
  );
}
