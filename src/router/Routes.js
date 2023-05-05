import React from "react";
// Homepage Demo
import HomeAgency from "../views/all-home-version/HomeAgency";

// Service
import Service from "../views/inner-pages/service/Service";
import ServiceDetails from "../views/inner-pages/service/ServiceDetails";
import InteriorDesign from "../views/inner-pages/service/InteriorDesign";
import Maintenance from "../views/inner-pages/service/Maintenance";

// About
import AboutUs from "../views/inner-pages/about/AboutUs";

// Portfolio
import WorksGrid from "../views/inner-pages/portfolio/WorksGrid";

// Others
import Contact from "../views/inner-pages/Contact";
import ClientsPage from "../views/inner-pages/Clients";
import ProjectsPage from "../views/inner-pages/Projects";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import TestimonialPage from "../views/inner-pages/Testimonial";
import ProjectPlanning from "../views/inner-pages/service/ProjectPlanning";

const Routes = () => {
  return (
    <>
      <Router basename={'/deckofloor'}>
        <ScrollTopBehaviour />
        <Switch>
          {/*  Homepage Demo */}
          <Route exact path="/" component={HomeAgency} />
          
          {/* Service */}
          <Route path="/service" component={Service} />
          <Route path="/service-details" component={ServiceDetails} />
          <Route path="/interior-Design" component={InteriorDesign} />
          <Route path="/project-planning" component={ProjectPlanning} />
          <Route path="/maintenance" component={Maintenance} />

          {/* About */}
          <Route path="/about-us" component={AboutUs} />

          {/* Portfolio */}
          <Route path="/product-portfolio" component={WorksGrid} />

          {/* others */}
          <Route path="/testimonials" component={TestimonialPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/clients" component={ClientsPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
