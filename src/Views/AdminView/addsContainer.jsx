//SCSS Imports
import "./addsContainer.scss";

//React Imports
import { useNavigate } from "react-router-dom"; 

//Component Imports
import OverviewCard from "../../Components/OverviewCard/overviewCard";
import { ReactComponent as AddIcon } from "../../Assets/svgs/plus-icon.svg";

import { addData } from "../../Data/adds";

//Assets

const AddsContainer = (props) => {

  const navigate = useNavigate();

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
          {/* <div className="col-6">
            <OverviewCard data={addData[2]} onClick={() => {}} />
          </div> */}
          <div className="col-6">
            <div className="new-add-link-div">
              <div className="add-icon" onClick={() => navigate("/admin/new-add")}>
                <AddIcon className="icon-svg" />
              </div>
              <p className="instruction">Create a new Add</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddsContainer;
