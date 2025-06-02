import "../cartpage/style.css";

export default function CartPage(props) {
  console.log(props.cart)
  return (
    <div className="no-items">
      <h2>Hello, There are currently no items in the cart.</h2>
    </div>
  );
}
