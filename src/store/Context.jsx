import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const GlobalContex = createContext();

const Contex = ({ children }) => {
  const [allPortfolio, setAllPortfolio] = useState([]);
  const [allServices, setAllServices] = useState([]);

  const getAllPortfolio = async () => {
    try {
      const respon = await axios.get("https://astrolab.uz/v1/portfolios");
      setAllPortfolio(respon?.data?.Portfolio);
    } catch (error) {
      console.log(error, "Error");
    }
  };
  const getAllServices = async () => {
    try {
      const respon = await axios.get("https://astrolab.uz/v1/services");
      setAllServices(respon?.data?.Services);
    } catch (error) {
      console.log(error, "Error");
    }
  };

  useEffect(() => {
    getAllServices();
    getAllPortfolio();
  }, []);

  const state = {
    allServices,
    allPortfolio,
  };

  return (
    <>
      <GlobalContex.Provider value={state}>{children}</GlobalContex.Provider>
    </>
  );
};
export default Contex;
