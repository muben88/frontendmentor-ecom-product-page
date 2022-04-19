import productImg0 from "../assets/images/image-product-1.jpg";
import productImg1 from "../assets/images/image-product-2.jpg";
import productImg2 from "../assets/images/image-product-3.jpg";
import productImg3 from "../assets/images/image-product-4.jpg";
import iconNext from "../assets/images/icon-next.svg";
import iconPrev from "../assets/images/icon-previous.svg";
import { useState } from "react";

function Slider() {
  const imgs = [productImg0, productImg1, productImg2, productImg3];
  const [index, setIndex] = useState(0);

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

  return (
    <div className="slider-container">
      <div className="slider-top">
        <div className="slide">
          <img src={imgs[index]} alt="product 1" />
        </div>

        <button className="btn-prev" onClick={handlePrev}>
          <img src={iconPrev} alt="next image" />
        </button>
        <button className="btn-next" onClick={handleNext}>
          <img src={iconNext} alt="previous image" />
        </button>
      </div>

      <div className="thumbnails">
        <div className="thumb-img">
          <img src={imgs[0]} alt={imgs[0]} />
        </div>
        <div className="thumb-img">
          <img src={imgs[1]} alt={imgs[1]} />
        </div>
        <div className="thumb-img">
          <img src={imgs[2]} alt={imgs[2]} />
        </div>
        <div className="thumb-img">
          <img src={imgs[3]} alt={imgs[3]} />
        </div>
      </div>
    </div>
  );
}
export default Slider;
