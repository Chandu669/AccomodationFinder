//CSS Imports
import "./sMap.scss";

//React Imports
import GoogleMapReact from "google-map-react";

//Component Imports
import { ReactComponent as Location } from "./icons/location-4.svg";

//Assets

const SmallMap = (props) => {
  const coordinates = { lat: 6.853253, lng: 79.90276 };

  return (
    <div className="location-section">
        <p className="title">
        Location
        </p>
        <hr></hr>
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDQkB_ruiUHXSNWhBYSgO1h_YwFuE5QH5A" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={16}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={""}
          onChildClick={""}
        >
          <Location lat={6.853253} lng={79.90276} className="location-icon" />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default SmallMap;
