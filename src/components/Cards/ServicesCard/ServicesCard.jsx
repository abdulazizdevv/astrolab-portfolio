import React from "react";

const ServicesCard = ({ title, subtitle, img }) => {
  return (
    <div
      className="bg-[#466ACC] rounded-def lg:p-10 p-5 duration-700 opacity-50"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <h6 className="lg:text-3xl text-xl font-bold text-center">{title}</h6>
      <img src={"http://" + img} alt="" className={"mx-auto text-center lg:w-[300px] w-[200px] lg:h-[200px] h-[100px] object-contain my-5"}/>
      <p className="lg:text-xl text-sm">{subtitle}</p>
    </div>
  );
};

export default ServicesCard;
