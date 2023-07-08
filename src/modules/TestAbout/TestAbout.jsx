import React from "react";
import "./index.scss";
import astrnout from "src/assets/images/astronaut2.png";
const TestAbout = () => {
  return (
    <div className="wrapper relative">
      <div id="astronaut">
        <img src={astrnout} alt="" width="350" />
      </div>

      {/* <div id="astronaut2">
        <img
          src="https://images.vexels.com/media/users/3/152641/isolated/preview/2b3d63661f0d7fe62c36168604985f26-space-cosmonaut-cartoon-by-vexels.png"
          alt=""
          width="250"
        />
      </div> */}
    </div>
  );
};

export default TestAbout;
