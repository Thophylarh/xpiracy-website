import React from "react";
import Hero from "./Hero";
import Spiritual from "./Spiritual";
import Journey from "./Journey";
import Mail from "./Mail";
import Footer from "../../components/footer";
import ScrollToTop from "../../components/ScrollToTop";

const Home = () => {
  return (
    <div>
      <Hero />
      <Spiritual />
      <ScrollToTop />
      <Journey />
      <Mail />
    </div>
  );
};

export default Home;
