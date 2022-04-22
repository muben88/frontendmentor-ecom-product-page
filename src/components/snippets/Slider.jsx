import ModalSlideshow from "./ModalSlideshow";
import iconNext from "../../assets/images/icon-next.svg";
import iconPrev from "../../assets/images/icon-previous.svg";
import GlobalContext from "../context";
import { useContext, useEffect } from "react";

function Slider() {
  const {
    imgs,
    index,
    modal,
    setIndex,
    setTrue,
    setFalse,
    handleNext,
    handlePrev,
  } = useContext(GlobalContext);

  useEffect(() => {
    setIndex(0);
  }, []);

  return (
    <div className="slider-container">
      <div className={modal ? "darken-bg" : ""}></div>
      <div className="slider-top">
        <div className="slide" onClick={setTrue}>
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
      {modal && <ModalSlideshow imgs={imgs} setFalse={setFalse} />}
    </div>
  );
}
export default Slider;
