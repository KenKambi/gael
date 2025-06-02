import "../cartpage/style.css";

export default function CartPage(props) {
  //console.log(props.cart)

  const total = props.cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return (
    <>
      {props.cart.length === 0 ? (
        <div className="no-items">
          <h2>Hello, There are currently no items in the cart.</h2>
        </div>
      ) : (
        <ul className="ordered-list">
          {props.cart.map((item) => {
            return ( 
              <section>


              <li key={item.id}>
                <img src={item.image} alt="Perfume " /> <br />
                Item id {item.id} <br />
                Qunatity : {item.quantity} <br />
                Total : KES {(item.price * item.quantity).toFixed(2)}
              </li>
              </section>
            );
          })}
        </ul>
      )}
      <h3> Total: KES {total.toFixed(2)} </h3>
    </>
  );
}
