import { useState } from "react";
import reactLogo from "../header/react.svg" 
import { FaCartArrowDown } from "react-icons/fa";


export default function Header(props) {

 console.log(props)



    const styles = {
    color: "black",
    width: "30px",
    height: "25px",
  };
  return (
    <header>
        <nav>
        <img src={reactLogo} alt="React-Logo"/>
        <h3> Gael </h3>
        </nav>  
        <div>
         <FaCartArrowDown style={styles}/>
         <span>  0 {props.count} </span>
        </div>
    </header>
  );
}
