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
          We aim to bring the world together through the effort of bringing our
          hero home, and we need your help. 60% of your donation goes straight
          to our space agencies to accelerate the effort of saving Mark Watney,
          30% of them go to international organizations for the development of
          future space-exploration technologies, while the remaining goes to
          charities that support the next generation of cosmologists and
          astronauts. Every dollar you give will increase the chance of Mark’s
          rescue, please consider supporting this mission 💖
        </p>
        <p style={{ fontSize: "20px" }}>
          “Save Mark Watney” is a non-profit organization that represent
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
        <br />
        <br />
        <video src={require("../../Videos/World.mp4")} autoPlay />
      </div>
    </>
  );
}
export default Description;
