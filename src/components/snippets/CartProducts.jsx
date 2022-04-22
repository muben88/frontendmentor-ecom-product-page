import { useContext } from "react";
import img from "../../assets/images/image-product-1.jpg";
import removeIcon from "../../assets/images/icon-delete.svg";
import GlobalContext from "../context";

function CartProducts() {
  const { inputValue, removeFromCart } = useContext(GlobalContext);

  return (
    <>
      <div className="cart-product">
        <div className="product-img">
          <img src={img} alt="img" />
        </div>
        <div>
          <p>Autumn Limited Edition...</p>
          <p>
            $125.00 x {inputValue} <span>${inputValue * 125}.00</span>
          </p>
        </div>
        <div className="delete-icon" onClick={removeFromCart}>
          <img src={removeIcon} alt="delete item" />
        </div>
      </div>
      <div className="checkout-btn">
        <button>Checkout</button>
      </div>
    </>
  );
}
export default CartProducts;
