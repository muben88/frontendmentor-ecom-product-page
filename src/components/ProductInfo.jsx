import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import { useState } from "react";

function ProductInfo() {
  const [inputValue, setInputValue] = useState(0);

  const handlePlus = () => {
    setInputValue(inputValue + 1);
  };

  const handleMinus = () => {
    if (inputValue < 1) {
      setInputValue(0);
    } else {
      setInputValue(inputValue - 1);
    }
  };

  return (
    <div className="product-info">
      <p className="company-title">SNEAKER COMPANY</p>
      <h1 className="product-title">
        Fall Limited Edition <br />
        Sneakers
      </h1>
      <p className="product-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="prodcut-pricing">
        <p className="discounted-price">
          $125.00 <span>50%</span>
        </p>
        <p className="original-price">$250.00</p>
      </div>
      <div className="add-to-cart-quantity">
        <div className="quantity-input">
          <input type="text" placeholder="0" value={inputValue} />
          <button className="btn-minus" onClick={handleMinus}>
            <img src={iconMinus} alt="minus button" />
          </button>
          <button className="btn-plus" onClick={handlePlus}>
            <img src={iconPlus} alt="plus button" />
          </button>
        </div>
        <div className="add-to-cart-btn">
          <button>
            <img src={cartIcon} alt="add to cart" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductInfo;
