
import "../main/style.css"

export default function Main (props){
    console.log(props)

     return(
        <main>
        <p>  {props.item.description} </p>
        <p> {props.item.price} </p>
        </main>
     )
}