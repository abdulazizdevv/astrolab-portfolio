import React from "react";
import Loader from "../Loader/Loader";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Loader />
    </>
  );
};

export default Layout;
