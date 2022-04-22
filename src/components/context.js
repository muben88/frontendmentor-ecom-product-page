import { createContext, useState } from "react";
import productImg0 from "../assets/images/image-product-1.jpg";
import productImg1 from "../assets/images/image-product-2.jpg";
import productImg2 from "../assets/images/image-product-3.jpg";
import productImg3 from "../assets/images/image-product-4.jpg";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
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

  // for the slideshow
  const imgs = [productImg0, productImg1, productImg2, productImg3];

  const [index, setIndex] = useState(0);

  const [modal, setModal] = useState(false);

  const setTrue = () => {
    setModal(true);
  };
  const setFalse = () => {
    setModal(false);
  };

  const handleNext = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const handlePrev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  //add to cart
  const [cart, setCart] = useState(false);
  const addToCart = () => {
    setCart(true);
  };
  const removeFromCart = () => {
    setCart(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        inputValue,
        imgs,
        index,
        modal,
        cart,
        handlePlus,
        handleMinus,
        setFalse,
        setTrue,
        setIndex,
        handleNext,
        handlePrev,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
