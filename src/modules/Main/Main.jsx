import React from "react";
import mainBg from "src/assets/video/bg-video.mp4";
import mouse from "src/assets/icons/mouse.svg";
const Main = () => {
  return (
    <section className="w-full relative hidden lg:block">
      <video
        src={mainBg}
        loop
        autoPlay
        muted
        className="w-full h-screen object-cover"
      />
      <img
        src={mouse}
        alt="mouse"
        id="mouseToggle"
        className="absolute bottom-2 z-20 left-[48.5%] -translate-x-1/2 mouse duration-700"
      />
    </section>
  );
};

export default Main;
