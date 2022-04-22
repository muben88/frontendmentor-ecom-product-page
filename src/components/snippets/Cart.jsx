import { useContext } from "react";
import GlobalContext from "../context";
import CartProducts from "./CartProducts";

function Cart() {
  const { inputValue, cart } = useContext(GlobalContext);
  return (
    <div className="cart-container">
      <div className="cart-title">
        <p>Cart</p>
      </div>
      <div className="cart-items">
        {inputValue && cart > 0 ? <CartProducts /> : <p>Your cart is empty</p>}
      </div>
    </div>
  );
}
export default Cart;
