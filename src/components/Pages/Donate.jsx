import React from "react";
import HeroSection from "../HeroSection";
import NavBar from "../NavBar";

function Donate() {
  return (
    <>
      <NavBar color="white" />
      <HeroSection
        imageSource={require("../../images/Donate-background.jpg")}
        title={"Donate"}
        subtitle={"If there is hope, there will be success"}
      />
      <div
        className="content"
        style={{ backgroundColor: "white", marginTop: "0px" }}
      >
        <h1>sdfasdfa</h1>
        <p>spdkfpos</p>
      </div>
    </>
  );
}
export default Donate;
