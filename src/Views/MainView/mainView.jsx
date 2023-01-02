//CSS Imports
import "./mainView.scss";

//React Imports
import { useNavigate } from "react-router-dom";

//Component Imports
import OverviewCard from "../../Components/OverviewCard/overviewCard";
import FilterComp from "../../Components/Filter/filter";

import { addData } from "../../Data/adds";

//Assets

const MainView = (props) => {

  const navigate = useNavigate();

  const clickHandler = (selectedID) => {
    navigate(selectedID);
  }

  return (
    <div className="main-view">
      <FilterComp />
      <div className="container">
        <div className="row">
          {addData.map((advertisement, i) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4" key={"miniAdd-"+i}>
                <OverviewCard
                  data = {advertisement}
                  onClick = {clickHandler}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainView;
