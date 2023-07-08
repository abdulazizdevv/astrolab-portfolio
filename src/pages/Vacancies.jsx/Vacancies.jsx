import React from "react";
import { useEffect } from "react";
import { VacanciesCard } from "src/components/Cards/VacanciesCard";
import { Title } from "src/components/UI/Title";

const Vacancies = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <section className="wrapper pt-[120px]" id="vacancies">
      <Title title={"ВАКАНСИИ"} />
      <div className="grid lg:grid-cols-3 gap-5 mt-5">
        <VacanciesCard />
      </div>
       </section>
  );
};

export default Vacancies;
