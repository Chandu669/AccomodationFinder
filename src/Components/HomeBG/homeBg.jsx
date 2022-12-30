//CSS Imports
import "./homeBg.css";

//React Imports

//Component Imports

//Assets
import  { ReactComponent as HouseIcon } from "../../Assets/svgs/house.svg";
import  { ReactComponent as StudentIcon } from "../../Assets/svgs/cap-2.svg";

const HomeBG = (props) => {
  return (
    <section id="hero">
      <div className="hero-container" data-aos="fade-up" data-aos-delay="150">
        {/* <img src="assets/img/mavos_logo.svg" alt="logo" /> */}
        <h1>Hello....!</h1>
        <h2>
          Looking for a Boarding place? <br /> You're in right place
        </h2>
        <div className="waylf">
        <p className="question">What are you looking for?</p>
          <div className="row-sec">
            <div className="div-sec">
              <div className="icon-div">
                <HouseIcon className="svg-icon1"/>
              </div>
              <h3>Houses</h3>
            </div>
            <div className="div-sec">
              <div className="icon-div">
                <StudentIcon className="svg-icon2"/>
              </div>
              <h3>Studentrooms</h3>
            </div>
          </div>
        </div>
        {/* <div class="d-flex">
        <a href="#about" class="btn-get-started scrollto">Let's talk</a>
        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div> */}
      </div>
    </section>
  );
};

export default HomeBG;
