import Background from "../back/imageonline-co-brightnessadjusted.jpg";
import Moving from "../back/clouds.png";
import Fog from "../back/fog-low.png";
// import Ryan from "./back/ryan.jpg";

function Header() {
  return (
    <div
      className="page-header section-dark"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="content-center">
        <div className="container">
          <div
            className="title-brand"
            // style={{
            //   filter: "brightness(16900%)",
            // }}
          >
            {" "}
            <h1 className="presentation-title">Asma@</h1>
            <div
              className="fog-low"
              // style={{
              //   filter: "brightness(19000%)",
              // }}
            >
              <img src={Fog} alt="" />
            </div>
            <div
              className="fog-low right"
              // style={{
              //   filter: "brightness(900%)",
              // }}
            >
              <img src={Fog} alt="" />
            </div>
          </div>
          <h2 className="presentation-subtitle text-center">
             salé, sucré, . . . Nos odeurs emplient vos goûts de joie{" "}
          </h2>
        </div>
      </div>

      <div
        className="moving-clouds"
        style={{ backgroundImage: `url(${Moving})` }}
      ></div>
    </div>
  );
}

export default Header;
