//CSS Imports

//React Imports
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

//Component Imports

//Assets

const MenuItem = (props) => {
const [selected, setSelected] = useState(false);

const pathName = useLocation().pathname;
const pathsArray = pathName.split("/");
const firstPath = "/" + pathsArray[1];

useEffect(() => {
    setSelected(firstPath === props.link);
}, [pathName, props.link]);

  return (
      <li>
        <Link to={props.link} className={`nav-link scrollto ${selected ? "active": ""}`}>
            {props.title}
        </Link>
      </li>
  );
};

export default MenuItem;
