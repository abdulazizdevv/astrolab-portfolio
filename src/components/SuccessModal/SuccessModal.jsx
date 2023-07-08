import React from "react";
import { useEffect } from "react";
import check from "src/assets/images/check.png";
const SuccessModal = ({ setSuccess }) => {
  useEffect(() => {
    setTimeout(() => {
      setSuccess((prev) => !prev);
    }, 3000);
  }, []);
  return (
    <div className="w-screen h-screen bg-[#0a0a0a83] fixed top-0 left-0 z-[99] grid place-items-center">
      <div
        className="bg-white inline-block p-5 rounded-def text-black relative boxShadow lg:w-auto w-80"
        data-aos="zoom-in"
      >
        <div className="flex items-center justify-center gap-2">
          <img src={check} alt=""  className="w-10"/>
          <h6 className="text-xl font-bold">Успешно отправлено!</h6>
        </div>
        <p>Наши специалисты свяжутся с вами в ближайшее время</p>
      </div>
    </div>
  );
};

export default SuccessModal;
