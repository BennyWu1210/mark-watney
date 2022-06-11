import React from "react";
import CardsSection from "../CardsSection";
import HeroSection from "../HeroSection";
import NavBar from "../NavBar";
import NewsPage from "./NewsPage";

function Home({ news }) {
  return (
    <>
      <NavBar color="white" />
      <HeroSection
        imageSource={require("../../images/Home-background.jpg")}
        title={"Save Mark Watney"}
        subtitle={"Surviving the Red Plant"}
      />
      <CardsSection news={news} />
    </>
  );
}
export default Home;
