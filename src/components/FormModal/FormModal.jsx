import React from "react";
import { useState } from "react";
import InputMask from "react-input-mask";

const FormModal = ({ setOpen, setSuccess }) => {
  const [inputValue, setInputValue] = useState("");
  let tg = {
    token: "6242136083:AAF1sg_MpGg-rV_FtN6wVWo3ulF-kPa72Co", // Your bot's token that got from @BotFather
    chat_id: "1778083508", // The user's(that you want to send a message) telegram chat id
  };

  function sendMessage() {
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${
      tg.chat_id
    }&text=${`ASTROLAB.UZ: Для стажировки: ${inputValue.replace(
      /[^0-9]/g,
      ""
    )}`}`; // The url to request
    const xht = new XMLHttpRequest();
    xht.onreadystatechange = function () {
      if (xht.readyState == XMLHttpRequest.DONE) {
        if (JSON.parse(xht.responseText).ok) {
          setOpen((prev) => !prev);
          setSuccess((prev) => !prev);
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

  return (
    <div className="w-screen h-screen bg-[#0a0a0a83] fixed top-0 left-0 z-[99] grid place-items-center">
      <div
        className="bg-white inline-block p-5 rounded-def text-black relative boxShadow lg:w-auto w-80"
        data-aos="zoom-in"
      >
        <h6 className="text-xl font-bold">
          Не ждите! Оставьте заявку и мы с вами свяжемся.
        </h6>
        <form className="lg:flex grid gap-5 lg:justify-between mt-5">
          <InputMask
            mask="+\9\9\8\ 99 999 99 99"
            maskChar=" "
            placeholder="Номер телефона *"
            className="outline-none bg-transparent text-xl mt-3 border-b-[1px] border-b-gray-500"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="px-5 py-2 text-white rounded-def bg-[#466ACC]"
            onClick={onSubmit}
          >
            Отправить
          </button>
          <span
            className="absolute bg-white -top-5 -right-5 w-6 h-6 rounded-full grid place-items-center text-black boxShadow cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            X
          </span>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
