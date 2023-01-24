//CSS Imports
import "./newAdd.scss";

//React Imports
import { useState } from "react";
import GoogleMapReact from "google-map-react";

//Component Imports
// import { Marker } from "react-google-maps";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ThemeProvider } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import { ReactComponent as LocationIcon } from "../../Assets/svgs/location-4.svg";

//Assets

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const NewAdd = (props) => {
  const SingleSelect = (props) => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

    return (
      <FormControl sx={{ m: 1, width: props.width?props.width:150,marginTop: 0 }}>
        <Select
          value={selectedValue}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          size="small"
        >
          {props.values.map((arrValue) => (
            <MenuItem key={arrValue} value={arrValue}>
              {arrValue}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  const MultiSelect = (props) => {
    const [values, setValues] = useState([]);

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;

      setValues(typeof value === "string" ? value.split(",") : value);
    };

    return (
      <FormControl sx={{ m: 1, width: 300,marginTop: 0 }}>
        {/* <InputLabel id="demo-multiple-checkbox-label">{props.title}</InputLabel> */}
        <Select
          //   labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          value={values}
          onChange={handleChange}
          //   input={<OutlinedInput label={props.title} />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          size="small"
        >
          {props.values.map((arrValue) => (
            <MenuItem key={arrValue} value={arrValue}>
              <Checkbox checked={values.indexOf(arrValue) > -1} />
              <ListItemText primary={arrValue} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  const LocationSelector = (props) => {
    const [markerPosition, setMarkerPosition] = useState({
      lat: 6.853253,
      lng: 79.90276,
    });

    const [zoom, setZoom] = useState(16);
    const [draggable, setDraggable] = useState(true);

    const [coordinates, setCoordinates] = useState({
      lat: 6.853253,
      lng: 79.90276,
    });

    const mouseMoveHandler = (childKey, childProps, mouse) => {
      setDraggable(false);
      setMarkerPosition({
        lat: mouse.lat,
        lng: mouse.lng,
      });
    };

    const mouseUpHandler = (childKey, childProps, mouse) => {
      setDraggable(true);
    };

    const mouseDownHandler = (childKey, childProps, mouse) => {
      setDraggable(false);
    };

    const onMapChange = ({ center, zoom }) => {
      setCoordinates(center);
      setZoom(zoom);
    };

    return (
      <div className="map-container">
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDQkB_ruiUHXSNWhBYSgO1h_YwFuE5QH5A" }}
          defaultCenter={coordinates}
          draggable={draggable}
          center={coordinates}
          defaultZoom={16}
          zoom={zoom}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={onMapChange}
          onChildMouseDown={mouseDownHandler}
          onChildMouseUp={mouseUpHandler}
          onChildMouseMove={mouseMoveHandler}
          onChildClick={""}
        >
          <LocationIcon lat={markerPosition.lat} lng={markerPosition.lng} className="location-icon"/>
        </GoogleMapReact> */}
      </div>
    );
  };

  const InputSection = (props) => {
    return (
      <div className="input-section">
        <p className="title">
          {props.title}
          <span className="tip">{props.tip ? " " + props.tip : ""}</span>
        </p>
        <div className="children">{props.children}</div>
      </div>
    );
  };

  return (
    <div className="new-add">
      <InputSection title="Title" tip="(title of the advertisement)">
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          //   defaultValue="Boarding room for 2 university students"
          variant="filled"
          size="small"
          placeholder="Boarding room for 2 university students"
          fullWidth
        />
      </InputSection>

      <InputSection
        title="Location"
        tip="(Drag the marker onto the your place)"
      >
        <LocationSelector />
      </InputSection>

      <InputSection title="Gender Preference">
        <MultiSelect values={["Male", "Female"]} />
      </InputSection>

      <InputSection title="For" >
        <SingleSelect width={70} values={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]} />
        <MultiSelect values={["University Students","Workers"]} />
      </InputSection>

      <InputSection title="Monthly Rental" tip="(to the whole room)">
      <p className="prefix-text">
      Rs.
      </p>
      <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          variant="filled"
          size="small"
          placeholder="5000 or 4000 - 5000"
          sx={{
            width: 250
          }}
        />
        <Checkbox sx={{
            marginLeft: "35px"
        }}/>
        <p style={{
            margin: 0,
            display: 'flex',
            alignItems: "center",
        }}>
        Negotiable
        </p>
      </InputSection>

      <InputSection title="Surface" tip="(roughly)">
      <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          variant="filled"
          size="small"
          sx={{
            width: 100
          }}
        />
        <p className="suffix-text">
            m<sup>2</sup>
        </p>
      </InputSection>

      <InputSection title="Beds" >
        <SingleSelect width={70} values={[1,2,3,4,5,6,7,8,9,10]} />
        <SingleSelect width={220} values={["Single Bed/s","Bunker Bed/s","Double Bed"]} />
      </InputSection>

      <InputSection title="Bathrooms" >
        <SingleSelect width={70} values={[1,2,3,4,5]} />
        <SingleSelect width={220} values={["Attached Bathroom/s","Common Bathroom/s"]} />
      </InputSection>
    </div>
  );
};

export default NewAdd;
