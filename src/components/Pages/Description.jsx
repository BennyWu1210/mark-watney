import React from "react";
import HeroSection from "../HeroSection";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
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
        style={{ backgroundColor: "white", padding: "4rem" }}
      >
        <h1>We believe in hope. ❤️</h1>
        
        <p style={{ fontSize: "20px" }}>
          <b>“Save Mark Watney”</b> is a non-profit organization that represent
          humanity’s unanimous effort to rescue Mark Watney! Learn more about
          the latest news of the organization{" "}
          <Link to="/">
            <i>here</i>
          </Link>
        </p>

        <b>
          p.s. Ms. Babcock let me know how many easter eggs you've found in this
          website:D
        </b>
        <br />
        <b>Citation</b>
        <i>Weir, Andy. The Martian: A Novel. First paperback classroom edition. New York: Broadway Books, 2014. Print.</i>
        <br />
        <br />
        <video src={require("../../Videos/World.mp4")} autoPlay muted/>
      </div>
    </>
  );
}
export default Description;
