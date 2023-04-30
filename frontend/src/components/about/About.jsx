import "./about.css";
import Award from "../../img/award.png";
import mern from "../../img/mern.jpg";
import mernStack from "../../img/mernStack.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={mernStack}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I supported the success of several projects
        </p>
        <p className="a-desc">
        I am a seasoned software developer with 7 years of experience in developing solutions. I have a keen interest in developing real-world solutions to solve daily civic challenges. I started out as a surveyor, in course of my day-to-day tasks, I developed a keen interest in software development.I have worked as a software engineer in different capacities for various startups and commercialization projects. Some of the roles that I have assumed over time are Full-stack engineer, backend heavy engineer as well as an operations specialist. The various opportunities saw me transition from an entry-level engineer to a full-stack software engineer. My stack is mainly javascript react /react native/ typescript node / express mongodb & AWS for deployment. I like traveling and hiking, which give me so much fulfillment from the coding environment. 
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards </h4>
            <p className="a-award-desc">
            These Mindsets explore and uncover the philosophy behind my approach to creative problem solving, and show that how i think about design directly affects whether i'll arrive at innovative, impactful solutions.
            </p>
          </div>
        </div>
        <div className="a-award">
        <img src={mern} alt="" className="a-award-img" />
        <div className="a-award-texts">
          <h4 className="a-award-title">
          international coding challenge
          </h4>
          <p className="a-award-desc">
          TopCoder, Coderbyte, Project Euler ...
          Solving progressively hard problems in live-contests, is like a brain training app, but for real skills.
                    </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;