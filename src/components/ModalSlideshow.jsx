import iconNext from "../assets/images/icon-next.svg";
import iconPrev from "../assets/images/icon-previous.svg";
import closeIcon from "../assets/images/icon-close.svg";
import { useEffect, useState } from "react";

function ModalSlideshow({ imgs, setFalse }) {
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
    <div className="modal-container">
      <div className="close-modal" onClick={setFalse}>
        <img src={closeIcon} alt="close window" />
      </div>
      <div className="modal-top">
        <div className="modal-slide">
          <img src={imgs[index]} alt="product 1" />
        </div>

        <button className="modal-btn-prev" onClick={handlePrev}>
          <img src={iconPrev} alt="next image" />
        </button>
        <button className="modal-btn-next" onClick={handleNext}>
          <img src={iconNext} alt="previous image" />
        </button>
      </div>

      <div className="modal-thumbnails">
        {imgs.map((item, i) => {
          return (
            <div
              className="modal-thumb-img"
              key={i}
              onClick={() => setIndex(i)}
            >
              <img src={item} className={index === i ? "active" : ""} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ModalSlideshow;
