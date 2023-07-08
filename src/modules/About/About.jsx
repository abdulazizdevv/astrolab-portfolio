import globusWorld from "src/assets/icons/globus.svg";
import TopVector from "src/assets/icons/topVector.svg";
import { Title } from "src/components/UI/Title";
import "./about.scss";

export const About = () => {
  return (
    <>
      <div className="about_bg defaultLinear" id="about">
        <div className="all_hero wrapper lg:h-[900px] h-[700px]">
          <div className="text  items-start lg:flex lg:gap-52">
            <Title title={"О НАС"} />
            <p className="text_p lg:text-3xl text-xl lg:ml-[100px]">
              Каждая крупная компания должна благодарить не только себя, но и
              тех, кто стоял рядом с ней и верил в нее. Ведь самый главный
              принцип в нашей работе – доверие.
              <span className="all_txt">
                Доверие не только обеспечивает лояльность клиентов и партнеров,
                но и повышает нашу требовательность к себе. Мы сотрудничаем на
                основе отношений, построенных на тысячелетних человеческих
                традициях.
              </span>
            </p>
          </div>
          <div
            className="globus"
            data-aos="zoom-in-down"
            data-aos-duration="10000"
            data-aos-once="true"
          >
            <img className="globus_img" src={globusWorld} alt="" />
            {/* <div className="tops cursor-pointer">
              <img src={TopVector} alt="top" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
