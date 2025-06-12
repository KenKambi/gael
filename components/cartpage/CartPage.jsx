import { DiVim } from "react-icons/di";
import { FaWhatsapp } from "react-icons/fa";
import "../cartpage/style.css";

export default function CartPage(props) {
  const total = props.cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const formattedTotal = total.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const message = encodeURIComponent(
    `Hello, I would like to order:\n\n` +
      props.cart
        .map((item) => {
          return `${item.name}\n Quantity: ${
            item.quantity
          } - KES ${item.price.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}\n`;
        })
        .join(`\n`) +
      `\n\n Subtotal: KES ${formattedTotal}`
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
              <div className="cart-display" key={item.id}>
                <div className="cart-display-item">
                  <img src={item.image} alt={item.name} /> <br />
                  <div className="cart-display-item-info">
                    <span>{item.name}</span>
                    <p>
                      Item Description: <br /> {item.description2} <br /> <br />
                    </p>
                    <p>Qunatity : {item.quantity}</p>
                    <p>
                      Total : KES{" "}
                      {(item.price * item.quantity).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {props.cart.length !== 0 ? (
        <div className="checkout-section">
          <h3> Subtotal: KES {formattedTotal} </h3>
          <p> Send your oder to Gael Essence's Whatsapp page:</p>
          {/* <a href={instagramLink} target="_blank">
          <button> Order via Intagram</button>
        </a> */}
          <a href={whatsappLink} target="_blank">
            <button>
              {" "}
              Order via Whatsapp <FaWhatsapp />{" "}
            </button>
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
