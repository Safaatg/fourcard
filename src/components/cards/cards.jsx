import "./cards.css";
import supervisor from "../../assets/images/icon-supervisor.svg";
import calculator from "../../assets/images/icon-calculator.svg";
import builder from "../../assets/images/icon-team-builder.svg";
import karma from "../../assets/images/icon-karma.svg";


function Cards  (){
    return (
      <div className="container">
      <h1 className="title">
        Reliable, efficient delivery <span>Powered by Technology</span>
      </h1>
      <p className="about">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
      <div className="icons">
        <div className="super">
          <h2 className="title-2">Supervisor</h2>
          <p className="p-1">Monitors activity to identify project roadblocks</p>
          <img src={supervisor} />
        </div>
        <div className="team">
          <h2 className="title-2">Team Builder</h2>
          <p className="p-1">
            Scans our talent network to create the optimal team for your project
          </p>
          <img src={builder} />
        </div>
        <div className="karma">
          <h2 className="title-2">Karma</h2>
          <p className="p-1">Regularly evaluates our talent to ensure quality</p>
          <img src={karma}/>
        </div>
        <div className="calc">
          <h2 className="title-2">Calculator</h2>
          <p className="p-1">
            Uses data from past projects to provide better delivery estimates
          </p>
          <img src={calculator} />
        </div>
      </div>
    </div>
    );
}

export default Cards;
