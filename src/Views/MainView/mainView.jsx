//CSS Imports
import "./mainView.scss";

//React Imports

//Component Imports
import OverviewCard from "../../Components/OverviewCard/overviewCard";

import { addData } from "../../Data/adds";

//Assets

const MainView = (props) => {
  return (
    <div className="main-view">
      <div className="container">
        <div className="row">
          {addData.map((advertisement, i) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4" key={"miniAdd-"+i}>
                <OverviewCard
                  data = {advertisement}
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
