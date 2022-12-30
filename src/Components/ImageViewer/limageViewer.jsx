//CSS,SCSS Imports
import './limageViewer.scss';

//React Imports
import { useState, useEffect, useRef } from "react";

//Component Imports
import { ReactComponent as NextIcon } from "./icons/next_icon.svg";
import { ReactComponent as PreviousIcon } from "./icons/previous_icon.svg";
import { ReactComponent as CloseIcon } from "./icons/close_icon.svg";
import { ReactComponent as PlayIcon } from "./icons/play_icon.svg";
import { ReactComponent as PauseIcon } from "./icons/pause_icon.svg";
import { ReactComponent as LastIcon } from "./icons/last_icon.svg";
import { ReactComponent as FirstIcon } from "./icons/first_icon.svg";
import { ReactComponent as ZoomInIcon } from "./icons/zoom-in_icon.svg";
import { ReactComponent as ZoomOutIcon } from "./icons/zoom-out_icon.svg";

//Assets


const LImageViewer = (props) => {
    let selectedImg = props.selectedImage;

  const [slideShow, setSlideShow] = useState(false);
  // Set the slideshow

  const [slideDuration, setSlideDuration] = useState(2000);
  // Set the duration of a slide

  const [scale, setScale] = useState(1);
  // Set the scale of the image(using scale)

  const [pan, setPan] = useState(false);
  // Set the ability to move the image(pan)(after zooming)

  const [pointer, setPointer] = useState("default");
  // Set the cursor occasionaly

  const [msg, setMsg] = useState({
    on: false,
    str: "",
  });
  // Set the msg to display on the image

  const [dragStratPos, setDragStartPos] = useState({
    prevX: 0,
    prevY: 0,
    x: 0,
    y: 0,
  });
  // Store the position of the mouse when the panning starts

  const [imgPos, setImgPos] = useState({ currX: 0, currY: 0, str: "translate(0px,0px)" });
  // Store the current cordinations of the image and set the translate

  const scales = [0.8, 1.0, 1.5, 2.0, 2.5, 4.0, 5.0, 8.0];
  // Set zoom levels to trigger when click zoomIn & aoomOut icon btns

  const oneWheelScale = 0.2;
  // Value of the scale that changes when the mouse is scrolled

  const slideShowRef = useRef(slideShow);
  slideShowRef.current = slideShow;
  // To on/off the slideshow at the correct time

  const listLength = props.imageList.length;
  let slideTime = slideDuration / 1000;

  const setImage = (index) => {
    props.setSelectedImage(index);
  };

  const setImageMsg = (MSG) => {
    setMsg({
      on: true,
      str: MSG,
    });

    let msgTime = setTimeout(function () {
      setMsg({
        on: false,
        str: "",
      });
      clearTimeout(msgTime);
    }, 1200);
  };

  const toggleSlideShow = () => {
    setScale(1);
    if (slideShow) {
      setSlideShow(false);
      setImageMsg("Slideshow : Off");
    } else {
      setSlideShow(true);
      setImageMsg("Slideshow : On");
    }
  };

  function closeViewer() {
    props.setIsOpen(false);
  }

  const dragReset = () => {
    setImgPos({
      currX: 0,
      currY: 0,
      str: "translate(" + 0 + "px, " + 0 + "px)",
    });
  };

  function nextImg() {
    dragReset();
    setScale(1);
    if (selectedImg !== listLength - 1) {
      setImage(selectedImg + 1);
    } else {
      setImageMsg("Last Image");
      setSlideShow(false);
    }
  }

  function prevImg() {
    dragReset();
    setScale(1);
    if (selectedImg !== 0) {
      setImage(selectedImg - 1);
    } else {
      setImageMsg("First Image");
    }
  }

  let intDur;
  function handleDurInput(e) {
    try {
      intDur = parseFloat(e.target.value);
    } catch (error) {
      alert("You should enter a number to the slide duration.");
    }
    if (intDur) {
      setSlideDuration(intDur * 1000);
    }
  }

  const panStartHandler = (e) => {
    if (scale > 1) {
      setPan(true);
      setPointer("grab");
      let prev_x = imgPos.currX;
      let prev_y = imgPos.currY;

      setDragStartPos({
        prevX: prev_x,
        prevY: prev_y,
        x: e.pageX,
        y: e.pageY,
      });
    }
  };

  const panHandler = (e) => {
    if (e.pageX > 0 && e.pageY > 0 && scale > 1 && pan) {
      setPointer("grabbing");

      let X = e.pageX - dragStratPos.x + dragStratPos.prevX;
      let Y = e.pageY - dragStratPos.y + dragStratPos.prevY;

      if (X !== imgPos.currX || Y !== imgPos.currY) {
        setImgPos({
          currX: X,
          currY: Y,
          str: "translate(" + X + "px, " + Y + "px)",
        });
      }
    }
  };

  const panStopper = (e) => {
    setPan(false);
    setPointer("default");
  };

  const scaleLength = scales.length;

  function zoomIn(value) {
    if (!value) {
      let i = 0;
      let tempScale = 1;
      while (i < scaleLength) {
        tempScale = scales[i];
        i++;
        if (tempScale > scale) {
          break;
        }
      }
      setScale(tempScale);
      setImageMsg(`Zoom : ${Math.round(tempScale * 100)}%`);
    } else if (scale < scales[scaleLength - 1]) {
      setScale(scale + value);
      setImageMsg(`Zoom : ${Math.round((scale + value) * 100)}%`);
    }

    if (scale <= 1) {
      dragReset();
    }
  }

  function zoomOut(value) {
    if (!value) {
      let i = scaleLength - 1;
      let tempScale = 1;
      while (i >= 0) {
        tempScale = scales[i];
        i--;
        if (tempScale < scale) {
          break;
        }
      }
      setScale(tempScale);
      setImageMsg(`Zoom : ${Math.round(tempScale * 100)}%`);
    } else if (scale > scales[0]) {
      setScale(scale - value);
      setImageMsg(`Zoom : ${Math.round((scale - value) * 100)}%`);
    }

    if (scale <= 1.5) {
      dragReset();
    }
  }

  function wheelHandler(e) {
    if (e.deltaY > 0) {
      zoomOut(oneWheelScale);
    } else if (e.deltaY < 0) {
      zoomIn(oneWheelScale);
    }
  }

  const handleKeyDown = (e) => {
    const key = e.key;

    if (key === "ArrowLeft") {
      prevImg();
    } else if (key === "ArrowRight") {
      nextImg();
    } else if (key === "Escape") {
      props.setIsOpen(false);
    } else if (key === " ") {
      toggleSlideShow();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    return () => {
        document.body.style.overflow = 'unset';
      };
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    let slideTimer = setTimeout(function () {
      if (slideShowRef.current) {
        nextImg();
      }
    }, slideDuration);

    return () => {
      clearTimeout(slideTimer);
    };
  });

  return (
    <div className="img-viewer">
      <CloseIcon
        id="close-icon"
        onClick={() => {
          closeViewer();
        }}
      />
      <NextIcon
        className="main-icon"
        id="next-icon"
        onClick={() => {
          nextImg();
        }}
      />
      <PreviousIcon
        className="main-icon"
        id="previous-icon"
        onClick={() => {
          prevImg();
        }}
      />
      {/* main image frame */}
      <div className="tb-wrapper">
        <div className="tool-bar">
          <div className="tool-bar__slideshow">
            <div
              className="tool-bar__btn"
              onClick={() => {
                setImage(0);
              }}
            >
              <FirstIcon className="tool-bar__btn--icon" />
            </div>
            <div className="tool-bar__btn" onClick={toggleSlideShow}>
              {slideShow && <PauseIcon className="tool-bar__btn--icon" />}
              {!slideShow && <PlayIcon className="tool-bar__btn--icon" />}
            </div>
            <div
              className="tool-bar__btn"
              onClick={() => {
                setImage(listLength - 1);
              }}
            >
              <LastIcon className="tool-bar__btn--icon" />
            </div>
          </div>
          <div className="tool-bar__zoom">
            <div
              className="tool-bar__btn"
              onClick={() => {
                zoomOut();
              }}
            >
              <ZoomOutIcon className="tool-bar__btn--icon" />
            </div>
            <div
              className="tool-bar__btn"
              onClick={() => {
                zoomIn();
              }}
            >
              <ZoomInIcon className="tool-bar__btn--icon" />
            </div>
          </div>
        </div>
        <div className="count-viewer">
          <p className="count-viewer__text">
            <b>{`${selectedImg + 1}/${listLength}`}</b>
          </p>
        </div>
        {msg.on && (
          <div className="msg-viewer">
            <p className="msg-viewer__text">{msg.str}</p>
          </div>
        )}
      </div>
      <div
        className="img-frame"
        onWheel={wheelHandler}
        onMouseDown={panStartHandler}
        onMouseMove={panHandler}
        onMouseUp={panStopper}
        onDragStart={(e) => {
          if (scale > 1) {
            e.preventDefault();
          }
        }}
      >
        {props.imageList.map((imageFile, index) => {
          // Get the exact source
          const imgSrc = imageFile;

          return (
            <div
              style={{
                transform: "translateX(-" + (selectedImg * 80).toString() + "vw)",
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
                          transform: imgPos.str + " scale(" + scale + ")",
                          cursor: pointer,
                        }
                      : { transform: "scale(1)" }
                  }
                  src={require(""+imgSrc)}
                  className="view-img"
                  alt={"Selected main image"}
                  draggable={true}
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* scrollable list of the images */}
      <div className="img-container">
        {props.imageList.map((imageFile, index) => {
          // Get the exact source
          const imgSrc = imageFile;

          return (
            <div
              key={"img" + index}
              id={"thumb-img-" + index}
              style={{
                transform:
                  "translateX(calc(" +
                  `${selectedImg * -12.7}` +
                  "vh + 27vw - 3px - 7.5vh)",
              }}
              className={selectedImg === index ? "selected-img" : "normal-img"}
              onClick={() => {
                setImage(index);
              }}
            >
              <img src={require(""+imgSrc)} className="image" alt={imageFile} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default LImageViewer;