import React from "react";
import { Link } from "react-router-dom";

const menuContent = [
  {
    name: "About Us",
    routerPath: "/about-us",
  },
  {
    name: "Services",
    routerPath: "/service",
    dropDownItems: [
      {
        name: "End-to-end Flooring Solution",
        routerPath: "/service-details",
      },
      {
        name: "Interior Design Projects",
        routerPath: "/interior-Design",
      },
      {
        name: "Project Planning and Estimation",
        routerPath: "/project-planning",
      },
      {
        name: "Maintenance of Carpets and Flooring",
        routerPath: "/maintenance",
      }
    ]
  },
  {
    name: "Products Portfolio",
    routerPath: "/product-portfolio",
  },
  {
    name: "Clients",
    routerPath: "/clients",
  },
  {
    name: "Projects",
    routerPath: "/projects",
  },
  {
    name: "Contact",
    routerPath: "/contact",
  },
];

const DropdownMenu = () => {
  return (
    <ul className="sf-menu">
      {menuContent.map((item, i) => (
        <li className={`menu-item-has-children ${item.menuClass}`} key={i}>
          <Link to={item.routerPath} className={item.activeClass}>
            <span>{item.name}</span>
          </Link>
          {(() => {
              if (item.dropDownItems){
                  return (
          <ul className="sub-menu mega" >
            {item.dropDownItems.map((val, i) => (
              <li key={i}>
                <Link to={val.routerPath}>
                  {" "}
                  <span>{val.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          )
              }
              
              return null;
            })()}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
