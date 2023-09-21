import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";
import { CustomLeftArrow, CustomRightArrow } from "./arrows";
const CarouselComp = () => {
  return (
    <div className="container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        // autoPlay
        // interval={1000}
        // infiniteLoop={true}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && <CustomLeftArrow onClick={onClickHandler} />
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && <CustomRightArrow onClick={onClickHandler} />
        }
      >
        <div className="slides  relative">
        <img
            src="/images/Banner6.png"
            alt="Banner4"
          />
          
          <p className="border text-light absolute line-clamp-1 top-40 font-extrabold text-3xl left-32">Rent VRs for Your Next Gaming Adventure</p>
          <p className="border text-light absolute text-xl top-72 left-32">Experience the Ultimate Gaming Experience with Our VR Rentals</p>
        </div>
        <div className="slides">
        <img
            src="/images/Gamming Banner.png"
            alt="Banner4"
          />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div className="slides">
          <img
            src="/images/Banner2.png"
            alt="Banner2"
          />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div className="slides">
          <img
            src="/images/Banner3.png"
            alt="Banner3"
          />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div className="slides">
          <img
            src="/images/Banner4.png"
            alt="Banner1"
          />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
