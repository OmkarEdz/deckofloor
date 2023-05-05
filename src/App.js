import React, { useEffect } from "react";
import Routes from "./router/Routes";
import WhatsappIcon from "./components/Whatsapp";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
// import { jarallax } from "jarallax";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>DeckOFloor – The Complete Flooring Solution</title>
        <meta name="description" content="Portfolio & Agency React Template" />
        <meta
          name="keywords"
          content="agency, bootstrap 5, business, clean, corporate, creative, fullpage, minimal, modern, multipurpose, parallax, personal, photography, portfolio, showcase"
        />
      </Helmet>
      {/* End React Helmet for SEO */}

      <WhatsappIcon />

      <Routes />
      {/* End All Routes */}
    </>
  );
};

export default App;
