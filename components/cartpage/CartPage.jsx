import { DiVim } from "react-icons/di";
import "../cartpage/style.css";

export default function CartPage(props) {
  //console.log(props.cart)

  const total = props.cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const formattedTotal = total.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })

  const message = encodeURIComponent(
    `Hello, I would like to order:\n\n` +
      props.cart
        .map((item) => {
          return `${item.name}\n Quantity: ${
            item.quantity
          } - KES ${item.price.toFixed(2)}\n`;
        })
        .join(`\n`) +
      `\n\n Total: KES ${formattedTotal}`
  );

  // const instagramLink = `https://www.instagram.com/direct/t/bossyboy_ke?text=${message}`;
  const whatsappLink = `https://wa.me/254757382779?text=${message}`;
  return (
    <div className="my-orders">
      {props.cart.length === 0 ? (
        <div className="no-items">
          <h2>Hello, There are currently no items in the cart.</h2>
        </div>
      ) : (
        <div className="ordered-list">
          <h3> Your Cart :</h3>

          {props.cart.map((item) => {
            return (
              <div className="cart-display">
                <div className="cart-display-item" key={item.id}>
                  <img src={item.image} alt="Perfume " /> <br />
                  <div className="cart-display-item-info">
                    Item id {item.id} <br /> <br />
                    Item Description: <br /> {item.description} <br /> <br />
                    Qunatity : {item.quantity} <br /> <br />
                    Total : KES {(item.price * item.quantity).toFixed(2)}
                    <hr />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="checkout-section">
        <h3>
          {" "}
          Subtotal: KES{" "}
          {formattedTotal}{" "}
        </h3>
        <p> Send your oder to Gael Essence's Whatsapp/Instagram page:</p>
        {/* <a href={instagramLink} target="_blank">
          <button> Order via Intagram</button>
        </a> */}
        <a href={whatsappLink} target="_blank">
          <button> Order via Whatsapp</button>
        </a>
      </div>
    </div>
  );
}
