import React, { useContext } from "react";
import { PortfolioCard } from "src/components/Cards/PortfolioCard";
import { Title } from "src/components/UI/Title";
import { GlobalContex } from "src/store/Context";


const Portfolio = () => {
  const responsive = window.screen.width;
  // const portfoiloData = [
  //   {
  //     img: "./media/astrolabdash.jpg",
  //     title: "Система Астролаб",
  //     aosType: "fade-right",
  //     className: "row-start-1 row-end-3 w-[600px] h-[400px]",
  //     type: "CRM",
  //   },
  //   {
  //     img: "./media/atrium.png",
  //     title: "Atrium",
  //     aosType: "fade-right",
  //     className: "",
  //     type: "Веб-сайт",
  //   },
  //   {
  //     img: "./media/babaev.jpg",
  //     title: "Babaev",
  //     aosType: "fade-right",
  //     className: "",
  //     type: "Веб-сайт",
  //   },
  //   {
  //     img: "./media/gekt.jpg",
  //     title: "Gekt",
  //     aosType: "fade-right",
  //     className: "",
  //     type: "Веб-сайт",
  //   },
  //   {
  //     img: "./media/renova.png",
  //     title: "Renova",
  //     aosType: "fade-right",
  //     className: "",
  //     type: "Веб-сайт",
  //   },
  //   {
  //     img: "./media/juba.jpg",
  //     title: "Juba",
  //     aosType: "fade-left",
  //     className: "",
  //     type: "Веб-сайт",
  //   },
  //   {
  //     img: "./media/global.png",
  //     title: "Global Visa",
  //     aosType: "fade-left",
  //     className: "",
  //     type: "Веб-сайт",
  //   },
  //   {
  //     img: "./media/tinchlik.png",
  //     title: "Tinchlik",
  //     aosType: "fade-left",
  //     className: "row-start-1 row-end-3 col-start-2 w-[600px] h-[400px]",
  //     type: "Веб-сайт",
  //   },
  //   {
  //     img: "./media/alzar.png",
  //     title: "Alzar",
  //     aosType: "fade-left",
  //     className: "",
  //     type: "Веб-сайт",
  //   },
  //   {
  //     img: "./media/alzargar.png",
  //     title: "Alzargar",
  //     aosType: "fade-left",
  //     className: "",
  //     type: "Веб-сайт",
  //   },
  //   {
  //     img: "./media/juba.jpg",
  //     title: "Juba",
  //     aosType: "fade-left",
  //     className: "",
  //     type: "Веб-сайт",
  //   },
  //   {
  //     img: "./media/global.png",
  //     title: "Global Visa",
  //     aosType: "fade-left",
  //     className: "",
  //     type: "Веб-сайт",
  //   },
  //   {
  //     img: "./media/tinchlik.png",
  //     title: "Tinchlik",
  //     aosType: "fade-left",
  //     className: "row-start-1 row-end-3 col-start-3 h-[400px] w-[600px] ",
  //     type: "Веб-сайт",
  //   },
  //   {
  //     img: "./media/alzar.png",
  //     title: "Alzar",
  //     aosType: "fade-left",
  //     className: "",
  //     type: "Веб-сайт",
  //   },
  //   {
  //     img: "./media/alzargar.png",
  //     title: "Alzargar",
  //     aosType: "fade-left",
  //     className: "",
  //     type: "Веб-сайт",
  //   },
  // ];
  const { allPortfolio } = useContext(GlobalContex);
  const data = [];
  allPortfolio?.map((item, index) => {
    let newObj = item;
    if (index === 0) {
      newObj["className"] = "row-start-1 row-end-3 w-[600px] h-[400px]";
    }
    if (index === 7) {
      newObj["className"] = "row-start-1 row-end-3 col-start-2 w-[600px] h-[400px]";
    }
    if (index >= 5) {
      newObj["aosType"] = "fade-right";
    } else {
      newObj["aosType"] = "fade-left";
    }
    data?.push(newObj);
  });
  return (
    <section className="wrapper pt-[100px]" id="portfolio">
      <div className="flex justify-between items-center w-full">
        <Title title={"ПОРТФОЛИО"} />
      </div>
      {responsive > 500 && (
        <div className="mt-8 grid gap-5">
          <div className="grid grid-cols-[auto_1fr_1fr] gap-5">
            {data
              ?.filter((_, index) => index < 5)
              ?.map((item) => (
                <PortfolioCard
                  title={item?.title}
                  className={item?.className}
                  img={item?.image_url}
                  aosType={item?.aosType}
                  type={item?.type}
                  key={item?.id}
                />
              ))}
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-5">
            {data
              ?.filter((_, index) => index >= 5 && index < 10)
              ?.map((item) => (
                <PortfolioCard
                  title={item?.title}
                  className={item?.className}
                  img={item?.image_url}
                  aosType={item?.aosType}
                  type={item?.type}
                  key={item?.id}
                />
              ))}
          </div>
          <div className="grid grid-cols-[1fr_1fr_auto] gap-5">
            {data
              ?.filter((_, index) => index >= 10)
              ?.map((item) => (
                <PortfolioCard
                  title={item?.title}
                  className={item?.className}
                  img={item?.image_url}
                  aosType={item?.aosType}
                  type={item?.type}
                  key={item?.id}
                />
              ))}
          </div>
        </div>
      )}
      {responsive <= 500 && (
        <div className="mt-8 grid grid-cols-[1fr_1fr] gap-5">
          {allPortfolio?.map((item) => (
            <PortfolioCard
              title={item?.title}
              img={item?.image_url}
              className={"h-[100px]"}
              aosType={item?.aosType}
              type={item?.type}
              key={item?.id}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Portfolio;
