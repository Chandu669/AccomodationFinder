//SCSS Imports
import "./addsContainer.scss";

//React Imports

//Component Imports
import OverviewCard from "../../Components/OverviewCard/overviewCard";

import { addData } from "../../Data/adds";

//Assets

const AddsContainer = (props) => {
  return (
    <div className="adds-container">
      <div className="topic-section">
        <p className="topic">Adds(1)</p>
        <hr className="line" />
      </div>
      <div className="adds-grid">
        <div className="row">
          <div className="col-6">
            <OverviewCard data={addData[1]} onClick={() => {}} />
          </div>
          <div className="col-6">
            <OverviewCard data={addData[2]} onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddsContainer;
