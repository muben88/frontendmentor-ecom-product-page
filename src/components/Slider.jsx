import productImg0 from "../assets/images/image-product-1.jpg";
import productImg1 from "../assets/images/image-product-2.jpg";
import productImg2 from "../assets/images/image-product-3.jpg";
import productImg3 from "../assets/images/image-product-4.jpg";
import iconNext from "../assets/images/icon-next.svg";
import iconPrev from "../assets/images/icon-previous.svg";
import { useState, useEffect } from "react";

function Slider() {
  const imgs = [productImg0, productImg1, productImg2, productImg3];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

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
        {imgs.map((item, i) => {
          return (
            <div className="thumb-img" key={i} onClick={() => setIndex(i)}>
              <img src={item} className={index === i ? "active" : ""} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Slider;
