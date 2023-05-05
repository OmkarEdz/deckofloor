import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../form/Search";
import DropdownMenu from "./menu/DropdownMenu";
import MobileMenu from "./menu/MobileMenu";

const HeaderAgency = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <header className="ptf-header ptf-header--style-1">
        <div
          className={
            navbar
              ? "ptf-navbar ptf-navbar--main ptf-navbar--sticky ptf-navbar--transparent ptf-navbar--white-text-on-top ptf-navbar--fixed ptf-navbar--solid"
              : "ptf-navbar ptf-navbar--main ptf-navbar--sticky ptf-navbar--transparent ptf-navbar--white-text-on-top"
          }
        >
          <div className="container-xxl">
            <div className="ptf-navbar-inner header-inner-wrap">
              {/* <!--Logo--> */}
              <Link className="ptf-navbar-logo" to="/">
                <img
                  className="black"
                  src={process.env.PUBLIC_URL + `/assets/img/root/Logo-Orange.svg`}
                  alt=""
                  loading="lazy"
                />
                <img
                  className="white"
                  src={process.env.PUBLIC_URL + `/assets/img/root/logo-WH.svg`}
                  alt=""
                  loading="lazy"
                />
              </Link>
              {/* <!--Navigation--> */}
              <nav className="ptf-nav ptf-nav--default nav-inner-menu">
                {/* <!--Menu--> */}
                <DropdownMenu />
              </nav>
              {/* <!--Buttons--> */}

              {/* <!--Offcanvas Menu Toggle--> */}
              <div
                className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle bar right"
                onClick={handleClick1}
              >
                <i className="lnir lnir-menu-alt-5"></i>
              </div>
              {/* Toggle bar icon */}
            </div>
          </div>
        </div>
      </header>
      {/* End header */}

      <div
        className={
          click1 ? "ptf-offcanvas-menu is-open" : "ptf-offcanvas-menu "
        }
      >
        <div className="ptf-offcanvas-menu__header justify-content-end">
          <span
            className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle"
            onClick={handleClick1}
          >
            <i className="lnir lnir-close"></i>
          </span>
        </div>
        {/* End .ptf-offcanvas-menu__header */}

        <MobileMenu />
      </div>
      {/* End sidebar menu */}
    </>
  );
};

export default HeaderAgency;
