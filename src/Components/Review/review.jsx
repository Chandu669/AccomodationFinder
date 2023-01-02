//CSS Imports
import "./review.scss";

//React Imports
import { useState } from "react";

//Component Imports
import { Rating } from "@mui/material";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
// import StarIcon from "@mui/icons-material/Star";

//Assets

const labels = {
  1: "Bad",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const ReviewSection = (props) => {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);

  return (
    <div className="container review-section">
      <div className="row">
        <div className="col-12">
          <div className="rating">
            <Rating
              name="hover-feedback"
              value={value}
              size="large"
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            {value !== null && (
              <Box sx={{ ml: 2, width:"100px" }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </div>
          <hr />
          <div className="review">
            <p className="msg">
            You should be a member to review the add.
            </p>
            <div className="">
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
