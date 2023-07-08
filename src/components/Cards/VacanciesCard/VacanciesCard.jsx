import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FormModal from "src/components/FormModal/FormModal";
import SuccessModal from "src/components/SuccessModal/SuccessModal";

const VacanciesCard = () => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (open) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }
  });
  return (
    <>
      <div
        className="py-10 px-5 rounded-[20px] boxShadow bg-white text-black text-lg grid gap-2"
        data-aos="zoom-out-up"
        data-aos-once="true"
      >
        <h6 className="text-3xl font-bold text-[#466ACC]">
          Frontend Developer
        </h6>
        <p>
          <b>График занятости:</b> Полный рабочий день
        </p>
        <p>
          <b>Заработная плата:</b> Для стажировки
        </p>
        <div className="text-base">
          <p className="text-lg">
            <b>Требования:</b>
          </p>
          <p>
            - Знание основ Frontend разработки, базовые знания HTML, CSS,
            JavaScript, React, Next.js, Redux, REST API
          </p>
          <p>- Понимание принципов разработки Web-проектов</p>
          <p>- Понимание основ работы систем контроля версий (Git)</p>
          <p>- Стремление к знаниям</p>
        </div>
        <button
          className="w-28 py-2 rounded-def text-white bg-[#466ACC] hover:bg-[#2e4683] duration-700 mt-4"
          onClick={() => setOpen((prev) => !prev)}
        >
          Контакт
        </button>
      </div>
      {open && <FormModal setOpen={setOpen} setSuccess={setSuccess}/>}
      {success && <SuccessModal setSuccess={setSuccess}/>}
    </>
  );
};

export default VacanciesCard;
