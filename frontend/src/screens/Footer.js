import React from "react";
import { SocialIcon } from "react-social-icons";

// import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <div className="footer">
      <div className="containerFooter bottom_border ">
        <div className="rowFooter">
          <div className=" col-footer">
            <h5 className=" col_white_amrc pt2">NOUS CONTACTER</h5>
            <p>
              <i className="fa fa-location-arrow"></i> Avenue Kaled ibn elwalid Aouina{" "}
            </p>
            <p>
              <i className="fa fa-phone"></i> +216 55 480 391{" "}
            </p>
            <p>
              <i className="fa fa fa-envelope"></i> miraspa@gmail.com{" "}
            </p>
          </div>
          <hr />
          <div className=" col-footer">
            <h5>NOS PARTENAIRES</h5>
            <p className="mb10">Supremÿa de Sisley</p>
            <p className="mb10">Time-Filler de Filorga</p>
            <p className="mb10">Nuxuriance Ultra de Nuxe</p>
          </div>
          <hr />
          <div className=" col-footer">
            <h5>REJOIGNEZ-NOUS</h5>
            <div className="IconsFlex">
              <div className="IconsContainer">
                <SocialIcon url="https://facebook.com/asmaapat" />
              </div>{" "}
              <div className="IconsContainer">
                <SocialIcon url="https://twitter.com/asmaapat" />
              </div>
              <div className="IconsContainer">
                <SocialIcon url="https://instagram.com/asmaapat" />
              </div>{" "}
              <div className="IconsContainer">
                <SocialIcon url="https://linkedin.com/asmaapat" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
