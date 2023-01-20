//SCSS Imports
import "./adminView.scss";

//React Imports

//Component Imports
import ProfileCard from "../../Components/ProfileCard/profileCard";
import AddsContainer from "./addsContainer";

//Assets

const AdminView = (props) => {
  return (
    <div className="admin-view">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ProfileCard />
          </div>
          <div className="col-8">
            <AddsContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
