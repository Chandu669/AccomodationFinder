//SCSS Imports
import "./profileCard.scss";

//React Imports

//Component Imports
import { ReactComponent as UserIcon } from "../../Assets/svgs/user-icon.svg";

//Assets

const profData = {
  userName: "Yehan Appartments",
  gMail: "yehan.kalhara@gmail.com",
  fName: "Yehan Kalhara Wanigathunga",
  contact: "076-2297883",
};

const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      <div className="upper-section">
        <div className="user-icon">
          <UserIcon className="icon-svg" />
        </div>
        <p className="user-name">{profData.userName}</p>
        <p className="g-mail">{profData.gMail}</p>
      </div>

      <hr className="h-divider" />

      <div className="section-2">
        <div className="info-section">
          <p className="key">Name</p>
          <p className="value">{profData.fName}</p>
        </div>

        <div className="info-section">
          <p className="key">Contact</p>
          <p className="value">{profData.contact}</p>
        </div>
      </div>

      <div className="edit-btn">
      Edit Profile
      </div>
    </div>
  );
};

export default ProfileCard;
