import React from "react";
import HeroSection from "../HeroSection";
import NavBar from "../NavBar";

function Description() {
  return (
    <>
      <NavBar color="black" />
      <HeroSection
        imageSource={require("../../images/Description-background.jpg")}
        title={"Description"}
        subtitle={'The "Save Mark Watney" foundation'}
      />
      <div
        className="content"
        style={{ backgroundColor: "white", marginTop: "0px" }}
      >
        <h1>PODSFOP</h1>
        <p>spdkfpos</p>
      </div>
    </>
  );
}
export default Description;
