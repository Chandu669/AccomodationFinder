//SCSS Imports
import "./overviewCard.scss";

//React Imports

//Component Imports
import { Rating } from "@mui/material";
import { Stack } from "@mui/material";

import { ReactComponent as SurfaceIcon } from "../../Assets/svgs/surface-icon.svg";
import { ReactComponent as BathIcon } from "../../Assets/svgs/bath-icon.svg";
import { ReactComponent as BedIcon } from "../../Assets/svgs/bed-icon1.svg";
import { ReactComponent as MaleIcon } from "../../Assets/svgs/male-icon.svg";
import { ReactComponent as FemaleIcon } from "../../Assets/svgs/female-1.svg";
import { ReactComponent as StudentIcon } from "../../Assets/svgs/student-icon2.svg";
import { ReactComponent as WorkerIcon } from "../../Assets/svgs/worker-icon.svg";
import { ReactComponent as CalendarIcon } from "../../Assets/svgs/calendar-icon.svg";

//Assets

const OverviewCard = (props) => {

    const data = props.data;

  const InfoSet = (props) => {
    return (
      <div className="mini-title">
        <props.icon className="icon" />
        <p className="key-text">{props.children}</p>
      </div>
    );
  };

  const GenderLogo = (props) => {
    const gender = props.value;

    if (gender == "male,female") {
      return (
        <div
          className="gender-div"
          style={{
            right: "calc(70px - 100%)",
          }}
        >
          <MaleIcon className="gender-icon" />
          <p className="divider">|</p>
          <FemaleIcon className="gender-icon" />
        </div>
      );
    } else if (gender == "male") {
      return (
        <div
          className="gender-div"
          style={{
            right: "calc(40px - 100%)",
          }}
        >
          <MaleIcon className="gender-icon" />
        </div>
      );
    } else if (gender == "female") {
      return (
        <div
          className="gender-div"
          style={{
            right: "calc(40px - 100%)",
          }}
        >
          <FemaleIcon className="gender-icon" />
        </div>
      );
    }
  };

  const WhomLogo = (props) => {
    const whom = props.for;
    if (whom == "student,worker") {
      return (
        <div className="whom-div">
          <WorkerIcon className="whom-icon" />
          <StudentIcon className="whom-icon" />
        </div>
      );
    } else if (whom == "student") {
      return (
        <div className="whom-div">
          <StudentIcon className="whom-icon" />
        </div>
      );
    } else if (whom == "worker") {
      return (
        <div className="whom-div">
          <WorkerIcon className="whom-icon" />
        </div>
      );
    }
  };

  const PriceTag = (props) => {
    return (
      <div className="price-div">
        <p className="top-text">{props.values.duration}</p>
        <p className="price-text">{props.values.price}</p>
        {props.values.extra == "negotiable" ? (
          <p className="price-sub-text">(Negotiable)</p>
        ) : (
          ""
        )}
      </div>
    );
  };

  return (
    <div className="overview-card">
      <div className="img-box">
        <img
          src={require("" + data.img)}
          alt="first image of the image list"
        />
      </div>

      <PriceTag
        values={data.price}
      />

      <GenderLogo value={data.gender} />

      <WhomLogo for={data.for} />

      <div className="info-wrapper">
        <div className="title-section">
          <span>
            <p className="title-p">{data.title}</p>
          </span>
        </div>
        <div className="key-value-sets">
          <div className="set">
            <InfoSet icon={SurfaceIcon}>Surface</InfoSet>
            <p className="value">
              : {data.surface}m<sup>2</sup>
            </p>
          </div>

          <div className="set">
            <InfoSet icon={BedIcon}>Beds</InfoSet>
            <p className="value">: {data.beds}</p>
          </div>

          <div className="set">
            <InfoSet icon={BathIcon}>Bathroom</InfoSet>
            <p className="value">: {data.bathroom}</p>
          </div>

          <div className="set">
            <InfoSet icon={CalendarIcon}>Available from</InfoSet>
            <p className="value">: {data.from}</p>
          </div>
        </div>
        <div className="rate-date">
          <div className="rate">
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={data.rate}
                precision={0.1}
                readOnly
              />
            </Stack>
            <p className="rate-count">({data.rateCount})</p>
          </div>
          <p className="date">{data.date}</p>
        </div>
      </div>
      
    </div>
  );
};

export default OverviewCard;
