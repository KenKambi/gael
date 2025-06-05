import { DiVim } from "react-icons/di";
import "../cartpage/style.css";

export default function CartPage(props) {
  //console.log(props.cart)

  const total = props.cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return (
    <div className="my-orders">
      {props.cart.length === 0 ? (
        <div className="no-items">
          <h2>Hello, There are currently no items in the cart.</h2>
        </div>
      ) : (
        <div className="ordered-list">
          {props.cart.map((item) => {
            return (
              <div className="cart-display">
                <div className="cart-display-item" key={item.id}>
                  <img src={item.image} alt="Perfume " /> <br />
                  <div className="cart-display-item-info">
                  Item id {item.id} <br />
                  Item Description: {item.description}
                  Qunatity : {item.quantity} <br /> <br />
                  Total : KES {(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="checkout-section">

        <h3> Subtotal: KES {total.toFixed(2)} </h3>
        <p> Send your oder to Gael Essence's Whatsapp/Instagram page:</p>
        <a href="#" target="_blank">
        <button target="_blank" > Proceed to checkout via Whatsapp</button>
        </a>
        
        <button> Proceed to checkout via Intsagram</button>
      </div>

    </div>
  );
}
