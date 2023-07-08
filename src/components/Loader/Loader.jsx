import React, { useEffect, useState } from "react";
import "./index.scss";
const Loader = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    window.document.body.style.overflow = "hidden";
    setTimeout(() => {
      setLoader(false);
      window.document.body.style.overflow = "auto";
    }, 3000);
  }, []);
  return (
    <>
      {loader && (
        <div
          className={`fixed top-0 left-0 bg-[#2e4683] w-screen h-screen z-[999] loader-animation grid place-items-center`}
        >
          <div className="loader">
            <div className="inner one"></div>
            <div className="inner two"></div>
            <div className="inner three"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
