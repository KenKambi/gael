import { useState } from "react";
import reactLogo from "../header/react.svg" 
import icon from "../header/gael-logo.jpeg" 
import { FaCartArrowDown } from "react-icons/fa";


export default function Header(props) {

//  console.log(props)



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
         <FaCartArrowDown style={styles} title="Cart Items"/>
         <div className="cart-number">
         <span>  {props.count} </span>
         </div>
        </div>
    </header>
  );
}
