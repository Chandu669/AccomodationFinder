//CSS Imports
import "./simageViewer.css";

//React Imports
import { useState, useEffect, useRef } from "react";

//Component Imports
import { ReactComponent as FullScreenIcon } from "./icons/full_icon.svg";

//Assets

const SImageViewer = (props) => {
  const imageList = props.imageList;
  let selectedImg = props.selectedImage;

  //Set the index of the selected image file's name in array

  const listLength = imageList.length;

  const [imgPos, setImgPos] = useState({
    currX: 0,
    currY: 0,
    str: "translate(0px,0px)",
  });
  // Store the current cordinations of the image and set the translate

  const setImage = (index) => {
    props.setSelectedImage(index);
  };

  function nextImg() {
    // dragReset();
    // setScale(1);
    if (selectedImg !== listLength - 1) {
      setImage(selectedImg + 1);
    }
  }

  function prevImg() {
    // dragReset();
    // setScale(1);
    if (selectedImg !== 0) {
      setImage(selectedImg - 1);
    }
  }

  return (
    <div className="image-viewer-container">
      <div
        className="icon-wrapper"
        onClick={() => {
          console.log("Pressed!!");
          props.setIsOpen(true);
        }}
      >
        <FullScreenIcon
          className="full-screen-icon"
          onClick={() => {
            console.log("Pressed!!");
            props.setIsOpen(true);
          }}
        />
      </div>
      <div
        className="viewer-window"
        style={{
          width: (listLength * 100).toString() + "%",
        }}
      >
        {/* <img src={require("./images/img-1.jpg")} /> */}
        {imageList.map((imageFile, index) => {
          // Get the exact source
          const imgSrc = imageFile;

          return (
            <div
              style={{
                transform:
                  "translateX(-" + (selectedImg * 100).toString() + "%)",
              }}
              key={"m-image-" + index}
              id={"main-img-" + index}
              className={
                index === selectedImg
                  ? "img-frame__selected"
                  : "img-frame__normal"
              }
            >
              <div className="img-wrapper">
                <img
                  id={index === selectedImg ? "selected-main-img" : ""}
                  style={
                    selectedImg === index
                      ? {
                          transform: imgPos.str + " scale(" + 1.0 + ")",
                          // cursor: pointer,
                        }
                      : { transform: "scale(1)" }
                  }
                  src={require("" + imgSrc)}
                  className="view-img"
                  alt={"Selected main image"}
                  draggable={true}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="img-panel">
        {imageList.map((imageFile, index) => {
          // Get the exact source
          const imgSrc = imageFile;

          return (
            <div
              key={"img" + index}
              id={"thumb-img-" + index}
              style={{
                transform:
                  "translateX(calc(" +
                  `${selectedImg * -77.5}` +
                  "px + 148px))",
              }}
              className={selectedImg === index ? "selected-img" : "normal-img"}
              onClick={() => {
                setImage(index);
              }}
            >
              <img
                src={require("" + imgSrc)}
                className="image"
                alt={imageFile}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SImageViewer;
