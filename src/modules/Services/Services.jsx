import React, { useContext } from "react";
import { ServicesCard } from "src/components/Cards/ServicesCard";
import { Title } from "src/components/UI/Title";
import { GlobalContex } from "src/store/Context";
const Services = () => {
  const { allServices } = useContext(GlobalContex);
  return (
    <section className="wrapper pt-[100px]" id="services">
      <Title title={"СЕРВИСЫ"} />
      <div className="grid lg:grid-cols-3  gap-5 mt-5">
        {allServices?.map((item) => (
          <ServicesCard
            subtitle={item?.sub_title}
            title={item?.title}
            img={item?.image_url}
            key={item?.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
