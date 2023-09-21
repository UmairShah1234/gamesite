import "./arrows.css";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const CustomLeftArrow = ({ onClick }) => (
  <div
    className="custom-arrow-slider custom-arrow-left"
    onClick={() => {
      console.log("Left arrow clicked");
      onClick();
    }}
  >
    <ArrowLeftIcon />
    {/* Your custom left arrow icon or content */}
  </div>
);

const CustomRightArrow = ({ onClick }) => (
  <div
    className="custom-arrow-slider custom-arrow-right"
    onClick={() => {
      console.log("Right arrow clicked");
      onClick();
    }}
  >
    <ArrowRightIcon />
    {/* Your custom right arrow icon or content */}
  </div>
);

export { CustomLeftArrow, CustomRightArrow };
