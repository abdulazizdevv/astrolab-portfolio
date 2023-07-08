import "./index.scss";
const PortfolioCard = ({ className, title, img, aosType, type }) => {
  return (
    <>
      <div
        className={`portfolio-card rounded-[10px] bg-[#2e4683] relative z-10  ${className}`}
        data-aos={aosType}
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <img
          src={"http://" + img}
          alt=""
          className="absolute -z-[4] inset-0 w-full h-full object-cover"
        />
        <div className="lg:pt-5 lg:pl-5 p-2">
          <h6 className="lg:text-2xl text-sm">{title}</h6>
          <p className="text-sm uppercase">
            {type === "web" ? "Веб-сайт" : type}
          </p>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
