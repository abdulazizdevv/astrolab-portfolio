import React, { useEffect } from "react";
import { useState } from "react";
import logo from "src/assets/images/logo.png";
import { gsap } from "gsap";
import Hamburger from "hamburger-react";
import "./index.scss";
import { Link } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState(
    window.screen.width > 500 ? "none" : "flex"
  );

  const nav = [
    {
      title: "О НАС",
      href: "/#about",
    },
    {
      title: "СЕРВИСЫ",
      href: "/#services",
    },
    {
      title: "ПОРТФОЛИО",
      href: "#portfolio",
    },
  ];

  window.onscroll = function () {
    if (window.screen.width > 500) {
      if (window.location.pathname !== "/vacancies") {
        myFunction();
      }
    }
  };

  function myFunction() {
    if (document.documentElement.scrollTop > 50) {
      setDisplay("flex");
      document.getElementById("mouseToggle").style.opacity = "0";
    } else {
      setDisplay("none");
      document.getElementById("mouseToggle").style.opacity = "1";
    }
  }
  useEffect(() => {
    if (window.screen.width > 500) {
      gsap.fromTo("#header", { y: "-100" }, { duration: 1, y: "0" });
      if (window.location.pathname === "/vacancies") {
        setDisplay("flex");
      }
    }
  });
  useEffect(() => {
    if (open) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }
  });

  const onChangeHref = (href) => {
    if (window.location.pathname === "/vacancies") {
      setTimeout(() => {
        setOpen(false);
        window.location.href = `${href}`;
      }, 0);
    } else {
      setOpen(false);
      window.location.href = `${href}`;
    }
  };

  return (
    <>
      <header
        className="bg-white flex fixed z-[99] top-0 w-full"
        style={{ display: display }}
        id="header"
      >
        <nav className="wrapper flex items-center justify-between w-full ">
          <Link to={"/"}>
            <img src={logo} alt="" width={265} /> 
            
          </Link>
          <ul className="items-center gap-5 text-black text-2xl uppercase hidden lg:flex">
            {nav.map((item, index) => (
              <li key={index} className={"cursor-pointer"}>
                <Link to={"/"} onClick={() => onChangeHref(item?.href)}>
                  {item.title}
                </Link>
              </li>
            ))}
            <li className={"cursor-pointer"}>
              <Link to={"/vacancies"}>ВАКАНСИИ</Link>
            </li>
          </ul>
          <div className="hamburger lg:hidden block">
            <Hamburger color={"#2e4683"} toggled={open} toggle={setOpen} />
          </div>
        </nav>
      </header>
      {open && (
        <div className="fixed top-[80px] bg-[#000000a2] w-full h-full z-[100]">
          <div
            className="fixed bg-white rounded-tl-2xl rounded-bl-2xl w-[70%] top-[80px] right-0 h-[90vh] text-center grid place-items-center"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <ul className="items-center gap-5 text-black text-xl uppercase grid ">
              {nav.map((item, index) => (
                <li key={index} className={"cursor-pointer"}>
                  <Link to={"/"} onClick={() => onChangeHref(item?.href)}>
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className={"cursor-pointer"} onClick={() => setOpen(false)}>
                <Link to={"/vacancies"}>ВАКАНСИИ</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
