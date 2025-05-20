
import "../main/style.css"

export default function Main (props){

     return(
        <main>
        <p> {props.item.description} </p>
        <p> {props.item.price} </p>
        <p> {props.item.image} </p>
        <img src={props.item.image} alt="" />
        <hr/>
        </main>
     )
}