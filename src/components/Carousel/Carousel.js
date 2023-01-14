import React from "react";
import "./Carousel.css";
import image1 from "../../utils/images/carousel-1.svg";
import image2 from "../../utils/images/carousel-2.svg";
import image3 from "../../utils/images/carousel-3.svg";

const Carousel = () => (
  <>
    <div className="carousel">
      <div className="carousel__items">
        <div className="carousel__item">
          <div className="carousel__img">
            <img src={image1} alt="" />
          </div>
          <div className="carousel__info">
            <p className="text-muted">Take a quiz!</p>
            <h4>Learn and earn $CKB</h4>
          </div>
        </div>
        <div className="carousel__item">
          <div className="carousel__img">
            <img src={image2} alt="" />
          </div>
          <div className="carousel__info">
            <p className="text-muted">
              Portfolio{" "}
              <span role="img" aria-label="">
                🔥
              </span>
            </p>
            <h4>Track your trades in one place, not all over the place</h4>
          </div>
        </div>
        <div className="carousel__item">
          <div className="carousel__img">
            <img src={image3} alt="" />
          </div>
          <div className="carousel__info">
            <p className="text-muted">Portfolio</p>
            <h4>Track your trades in one place, not all over the place</h4>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Carousel;
