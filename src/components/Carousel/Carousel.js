import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import image1 from "../../utils/images/carousel-1.svg";
import image2 from "../../utils/images/carousel-2.svg";
import image3 from "../../utils/images/carousel-3.svg";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="carousel">
        {/* <div className="carousel__items">
          
        </div> */}
        <Slider {...settings}>
          <div>
            <div className="carousel__item">
              <div className="carousel__img">
                <img src={image1} alt="" />
              </div>
              <div className="carousel__info">
                <p className="text-muted">Take a quiz!</p>
                <h4>Learn and earn $CKB</h4>
              </div>
            </div>
          </div>
          <div>
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
          </div>
          <div>
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
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
