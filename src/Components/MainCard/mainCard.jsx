//CSS Imports
import "./mainCard.css";

//React Imports
import { useState } from "react";
import { useParams } from "react-router-dom";

//Component Imports
import SImageViewer from "../ImageViewer/simageViewer";
import LImageViewer from "../ImageViewer/limageViewer";
import SmallMap from "../Map/sMap";
import FeedBack from "../R&C/r&c";
import ReviewSection from "../Review/review";
import { ReactComponent as TickIcon1 } from "../../Assets/svgs/tick-1.svg";
import { ReactComponent as TickIcon2 } from "../../Assets/svgs/tick-2.svg";
import { ReactComponent as SqIcon } from "../../Assets/svgs/sq-icon.svg";
import { ReactComponent as CallIcon } from "../../Assets/svgs/call-1.svg";

import { Rating } from "@mui/material";
import { Stack } from "@mui/material";

import { addData } from "../../Data/adds";

//Assets

const MainCard = (props) => {
  const { addID: selectedID } = useParams();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  const imageList1 = [
    "./images/img-1.jpg",
    "./images/img-2.jpg",
    "./images/img-3.jpg",
    "./images/img-4.jpg",
    "./images/img-5.jpg",
  ];

  let advertisementData = addData.find(
    (addvertise) => addvertise.id === selectedID
  );

  const TickItem1 = (props) => {
    return (
      <div className="tick-item">
        <TickIcon1 className="tick-icon" />
        <p className="title-info">{props.value}</p>
      </div>
    );
  };

  const TickItem2 = (props) => {
    return (
      <div className="tick-item">
        <TickIcon2 className="tick-icon" />
        <p className="title-info">{props.value}</p>
      </div>
    );
  };

  const SqItem = (props) => {
    return (
      <div className="tick-item">
        <SqIcon className="tick-icon" />
        <p className="title-info">{props.value}</p>
      </div>
    );
  };

  return (
    <div>
      {fullScreen && (
        <LImageViewer
          imageList={imageList1}
          setIsOpen={setFullScreen}
          selectedImage={selectedImageIndex}
          setSelectedImage={setSelectedImageIndex}
        />
      )}
      <div className="container main-card-div">
        <div className="organizer">
          <div className="left-section">
            <div className="images-box">
              <SImageViewer
                imageList={imageList1}
                selectedImage={selectedImageIndex}
                setIsOpen={setFullScreen}
                setSelectedImage={setSelectedImageIndex}
              />
            </div>
            <div className="map-comp"><SmallMap /></div>
          </div>

          <div className="right-section">
            <div className="title-div">
              <h3>{advertisementData.title}</h3>
            </div>

            <div className="rating-results">
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={advertisementData.rate}
                  precision={0.1}
                  readOnly
                />
              </Stack>
              <a href="#">{advertisementData.rateCount + " ratings"}</a>
              <p> | </p>
              <a href="#">6 Answered Questions</a>
            </div>

            <div className="row">
              <div className="left-info col-md-6 col-lg-6 col-sm-12">
                <div className="info-set">
                  <p className="sub-title">Per Month</p>
                  <p className="title-info">
                    {advertisementData.price.price +
                    ((advertisementData.price.extra === "negotiable")
                      ? " (negotiable)"
                      : "")}
                  </p>
                </div>

                <div className="info-set">
                  <p className="sub-title">Gender Preference</p>
                  <p className="title-info">
                    {advertisementData.gender === "male"
                      ? "Male"
                      : advertisementData.gender === "female"
                      ? "Female"
                      : "Male/Female"}
                  </p>
                </div>

                <div className="info-set">
                  <p className="sub-title">For</p>
                  <p className="title-info">
                    {`${advertisementData.membersCount} ` +
                    ((advertisementData.for === "student")
                      ? "University Student/s"
                      : advertisementData.for === "worker"
                      ? "Worker/s"
                      : "University Student/s or Worker/s")}
                  </p>
                </div>

                <div className="info-set">
                  <p className="sub-title">Type</p>
                  <p className="title-info">{advertisementData.type + " Room"}</p>
                </div>

                <div className="info-set">
                  <p className="sub-title">Beds</p>
                  <p className="title-info">{advertisementData.beds}</p>
                </div>

                <div className="info-set">
                  <p className="sub-title">Bathrooms</p>
                  <p className="title-info">{advertisementData.bathroom}</p>
                </div>

                <div className="info-set">
                  <p className="sub-title">Distance</p>
                  <p className="title-info">200m ,only 10minutes</p>
                </div>

                <div className="info-set">
                  <p className="sub-title">Available From</p>
                  <p className="title-info">{advertisementData.from}</p>
                </div>
              </div>

              <div className="right-info col-md-6 col-lg-6 col-sm-12">
                <div className="info-set">
                  <p className="sub-title">Utility availability</p>
                  <TickItem2 value={"Writing table"} />
                  <TickItem2 value={"Cloth rack"} />
                  <TickItem2 value={"Chairs"} />
                  <TickItem2 value={"Single-use Table"} />
                </div>

                <div className="info-set">
                  <p className="sub-title">Security</p>
                  <TickItem1 value={"CCTV Systems"} />
                  <TickItem1 value={"Gate"} />
                  <TickItem1 value={"Boundary Wall"} />
                </div>

                <div className="info-set">
                  <p className="sub-title">Non Paying Services</p>
                  <SqItem value={"Water"} />
                  <SqItem value={"Electricity"} />
                </div>

                <div className="info-set">
                  <p className="sub-title">
                    Paying Services <br />
                    (Need to pay separately, apart from monthly boarding fees)
                  </p>
                  <SqItem value={"Cleaning"} />
                  <SqItem value={"Wifi"} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="info-set">
                  <p className="sub-title">Posted On</p>
                  <p className="title-info">{advertisementData.date}</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="info-set">
                  <p className="sub-title">Contact</p>
                  <div className="tick-item">
                    <CallIcon className="tick-icon" />
                    <p className="title-info">{advertisementData.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="info-set" id="set-5">
              <p className="sub-title">Description</p>
              <p className="title-info">
              Safety of road and safety of surrounding area
              </p>
            </div> */}
        </div>
        
      </div>
      <ReviewSection />
      <div className="container feedback-sec">
          <div className="row">
            <div className="col-12">
            <FeedBack />
            </div>
          </div>
        </div>
    </div>
  );
};

export default MainCard;
