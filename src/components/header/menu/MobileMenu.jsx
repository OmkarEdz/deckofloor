import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import Social from "../../social/Social";

const MobileMenu = () => {
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className="ptf-offcanvas-menu__navigation mobileMenu_custWrap">
        {/* <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                <SubMenu title={item.name} key={i}>
                  {item.dropDownItems.map((val, i) => {
                  <MenuItem key={i}>
                      <Link to={val.routerPath}>{val.name}</Link>
                    </MenuItem>
                  })}
                </SubMenu>
              ))}
            </Menu>
          </SidebarContent>
        </ProSidebar> */}
        <nav className="navbar navbar-default" role="navigation">
          <ul className="mobileMenu_cust">
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li className={isActive ? "null" : "active"}>
              <Link to="/service" className="subMenu" onClick={ToggleClass}>Services</Link>
              <ul className={isActive ? "null" : "active"}>
                <li>
                  <Link to="/service-details">End-to-end Flooring Solution</Link>
                </li>
                <li>
                  <Link to="/interior-Design">Interior Design Projects</Link>
                </li>
                <li>
                  <Link to="/project-planning">Project Planning and Estimation</Link>
                </li>
                <li>
                  <Link to="/maintenance">Maintenance of Carpets and Flooring</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/product-portfolio">Products Portfolio</Link>
            </li>
            <li>
              <Link to="/clients">Clients</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            {/* <li>
              <Link to="/testimonials">Testimonials</Link>
            </li> */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          @{new Date().getFullYear()} decko floor. All Rights Reserved.
        </p>
        <Social />
      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;
