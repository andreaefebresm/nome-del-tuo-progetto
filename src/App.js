import React from "react";
import image from "./images/Group 3-1.png";
import maskGroup7 from "./images/Group 3-2.png";
import screenshot20240913Alle1809341 from "./images/Group 3-3.png";
import "./App.css";

export const App = () => {
  return (
    <div className="HOMEPAGE">
      <div className="div">
        <div className="text-wrapper">AEFM</div>
        <div className="group" />
        <div className="group-2" />
        <div className="group-3" />
        <div className="group-4" />
        <div className="mask-group-wrapper">
          <div className="mask-group">
            <div className="overlap-group">
              <div className="dsc" />
              <img className="img" alt="Mask group" src={maskGroup7} />
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <div className="mask-group">
            <div className="overlap-group">
              <div className="dsc" />
              <img className="img" alt="Mask group" src={image} />
            </div>
          </div>
        </div>
        <div className="group-5" />
        <div className="group-6" />
        <div className="group-7">
          <div className="mask-group">
            <div className="overlap-group">
              <div className="dsc-2" />
              <img className="img" alt="Screenshot" src={screenshot20240913Alle1809341} />
            </div>
          </div>
        </div>
        <div className="group-8">
          <div className="mask-group">
            <div className="overlap-group">
              <div className="dsc-2" />
              <img className="img" alt="Screenshot" src={screenshot20240913Alle1809341} />
            </div>
          </div>
        </div>
        <div className="group-9" />
        <div className="group-10" />
        <p className="ABOUT-ME-lorem-ipsum">
          ABOUT ME
          <br />
          Lorem ipsum dolor sit amet consectetur. Molestie ac posuere at fames venenatis nulla eget molestie adipiscing.
          Tristique eros tellus enim hendrerit. Nullam in morbi mattis eu. Ut quis urna convallis nascetur libero elit
          tincidunt cursus.
        </p>
        <div className="INFORMATION-DESIGN">
          INFORMATION DESIGN
          <br />
          WEBSITE DEVELOPMENT
          <br />
          EDITORIAL DESIGN
          <br />
          BRANDING
          <br />
          PHYSICAL
        </div>
        <div className="text-wrapper-2">COPYRIGHT 2024</div>
        <div className="text-wrapper-3">PIVA 10170000000</div>
        <div className="text-wrapper-4">PIVA 10170000000</div>
      </div>
    </div>
  );
};

export default App;