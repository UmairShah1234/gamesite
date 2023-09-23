import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";
import { CustomLeftArrow, CustomRightArrow } from "./arrows";

import { useTheme } from "@mui/material";
const CarouselComp = () => {
  const theme = useTheme();
  const colors = theme.palette.mode;
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
          <img src="/images/Banner6.png" alt="Banner4" />

          <p className=" text-light absolute top-40 font-extrabold text-3xl left-32">
            Rent VRs for Your
          </p>
          <p className=" text-light absolute top-48 font-extrabold text-3xl left-32">
            Next Gaming Adventure
          </p>
          <p className=" text-light absolute top-56 font-extrabold text-3xl left-32">
            Adventure
          </p>

          <p className="  text-light absolute text-xl top-72 left-32">
            Experience the Ultimate Gaming 
          </p>
          <p className="  text-light absolute text-xl top-80 left-32">
           Experience with Our
          </p>
          <p className="  text-light absolute text-xl top-[50%] left-32">
            VR Rentals
          </p>
          <button
            className={`relative bottom-56 right-[32%] border hover:bg-${
              colors === "dark" ? "stone-600" : "stone-300"
            } p-3 border-${colors === "dark" ? "white" : "black"}`}
            variant="outlined"
          >
            Rent VR
          </button>
        </div>
        <div className="slides">
          <img src="/images/WhiteVRbanner.png" alt="Banner4" />
          <p className=" text-black absolute top-40 font-extrabold text-3xl left-32">
            Rent VRs for Your
          </p>
          <p className=" text-black absolute top-48 font-extrabold text-3xl left-32">
            Next Gaming Adventure
          </p>
          <p className=" text-black absolute top-56 font-extrabold text-3xl left-32">
            Adventure
          </p>

          <p className="  text-black absolute text-xl top-72 left-32">
            Experience the Ultimate Gaming 
          </p>
          <p className="  text-black absolute text-xl top-80 left-32">
           Experience with Our
          </p>
          <p className="  text-black absolute text-xl top-[50%] left-32">
            VR Rentals
          </p>
          <button
            className={`relative bottom-56 right-[32%] border hover:bg-${
              colors === "dark" ? "stone-600" : "stone-300"
            } p-3 border-${colors === "dark" ? "white" : "black"}`}
            variant="outlined"
          >
            Rent VR
          </button>
        </div>
        <div className="slides">
          <img src="/images/Banner2.png" alt="Banner2" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div className="slides">
          <img src="/images/Banner3.png" alt="Banner3" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div className="slides">
          <img src="/images/Banner4.png" alt="Banner1" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
