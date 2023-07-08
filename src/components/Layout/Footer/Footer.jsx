import React from "react";
import { useState } from "react";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";
import SuccessModal from "src/components/SuccessModal/SuccessModal";
import sms from "src/assets/icons/envelope.svg";
import location from "src/assets/icons/marker.svg";
import phone from "src/assets/icons/phone-call.svg";
const Footer = () => {
  const nav = [
    {
      title: "О НАС",
      href: "#about",
    },
    {
      title: "СЕРВИСЫ",
      href: "#services",
    },
    {
      title: "ПОРТФОЛИО",
      href: "#portfolio",
    },
  ];
  const [inputValue, setInputValue] = useState("");
  const [success, setSuccess] = useState(false);
  let tg = {
    token: "6242136083:AAF1sg_MpGg-rV_FtN6wVWo3ulF-kPa72Co", // Your bot's token that got from @BotFather
    chat_id: "1778083508", // The user's(that you want to send a message) telegram chat id
  };

  function sendMessage() {
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${
      tg.chat_id
    }&text=${`ASTROLAB.UZ: Для проекта: ${inputValue.replace(/[^0-9]/g, "")}`}`; // The url to request
    const xht = new XMLHttpRequest();
    xht.onreadystatechange = function () {
      if (xht.readyState == XMLHttpRequest.DONE) {
        if (JSON.parse(xht.responseText).ok) {
          setSuccess((prev) => !prev);
          setInputValue("");
        }
      }
    };
    xht.open("GET", url);
    xht.send();
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let value = inputValue.replace(/[^0-9]/g, "");
    if (value?.length === 12) {
      sendMessage();
    }
  };
  const onChangeHref = (href) => {
    if (window.location.pathname === "/vacancies") {
      setTimeout(() => {
        window.location.href = `${href}`;
      }, 0);
    } else {
      window.location.href = `${href}`;
    }
  };
  return (
    <>
      <footer className="bg-[#0b0b21] pt-10 mt-20">
        <div className="wrapper text-white ">
          <div className="lg:flex justify-between py-3">
            <div className="lg:grid hidden gap-4">
              <div className="flex gap-10">
                {nav.map((item, index) => (
                  <Link
                    to={"/"}
                    onClick={() => onChangeHref(item?.href)}
                    key={index}
                    className="lg:text-xl text-lg"
                  >
                    {item.title}
                  </Link>
                ))}
                <Link to={"/vacancies"} className="lg:text-xl text-lg">
                  ВАКАНСИИ
                </Link>
              </div>
              <div className="flex gap-5 text-lg justify-between">
                <div className="flex items-center gap-3">
                  <img src={sms} alt="" className="w-5" />
                  <a href="mailto:info@astrolab.uz">info@astrolab.uz</a>
                </div>
                <div className="flex items-center gap-3">
                  <img src={phone} alt="" className="w-5" />
                  <a href="tel:+998712000321">+998 71 200-03-21</a>
                </div>
              </div>
              <a
                href="https://yandex.uz/maps/10335/tashkent/house/YkAYdANpSkIDQFprfX9wcXVhZQ==/?ll=69.249373%2C41.310921&z=16.74"
                target={"_blank"}
                className="group relative flex items-center gap-3 bg-transparent py-2 px-5 rounded-def border border-white duration-700 hover:bg-[#2e4683] cursor-pointer"
              >
                <img src={location} alt="" className="w-5 " />
                <p>Ислам Каримов 49, 10 этаж</p>
                <span className="absolute right-1 group-hover:bg-white group-hover:text-[#2e4683] duration-700 bg-[#2e4683] py-1 px-4 rounded-[7px]">
                  Map
                </span>
              </a>
            </div>
            <div>
              <p className="lg:text-2xl text-xl">
                Готовы обсудить детали проекта?
              </p>
              <div className="lg:flex grid lg:gap-0 gap-2 items-center">
                <InputMask
                  mask="+\9\9\8\ 99 999 99 99"
                  maskChar=" "
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                  required={true}
                  placeholder="Номер телефона *"
                  className="outline-none bg-transparent text-xl mt-3 border-b-[1px] border-b-gray-500 p-2"
                />
                <button
                  className="px-5 py-2 bg-[#466ACC] rounded-def lg:ml-5"
                  onClick={onSubmit}
                >
                  Отправить
                </button>
              </div>
            </div>
          </div>
          <div className="grid gap-1 lg:text-lg text-sm  lg:hidden">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src={sms} alt="" className="w-3" />
                <a href="mailto:info@astrolab.uz">info@astrolab.uz</a>
              </div>
              <div className="flex items-center gap-2">
                <img src={phone} alt="" className="w-3" />
                <a href="tel:+998712000321">+998 71 200-03-21</a>
              </div>
            </div>
            <a
              href="https://yandex.uz/maps/10335/tashkent/house/YkAYdANpSkIDQFprfX9wcXVhZQ==/?ll=69.249373%2C41.310921&z=16.74"
              target={"_blank"}
              className="group mt-5 relative flex items-center gap-2 bg-transparent py-2 px-2 rounded-def border border-white duration-700 hover:bg-[#2e4683] cursor-pointer"
            >
              <img src={location} alt="" className="w-3 " />
              <p>Ислам Каримов 49, 10 этаж</p>
              <span className="absolute right-1 group-hover:bg-white group-hover:text-[#2e4683] duration-700 bg-[#2e4683] py-1 px-4 rounded-[7px]">
                Map
              </span>
            </a>
          </div>
          <div className="border-t-[1px] border-t-gray-500 text-center py-5 mt-5">
            <p className="text-xs lg:text-base ">
              © ASTROLAB GROUP 2023. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
      {success && <SuccessModal setSuccess={setSuccess} />}
    </>
  );
};

export default Footer;
