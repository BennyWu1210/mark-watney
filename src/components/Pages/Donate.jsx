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
        style={{ backgroundColor: "white", padding: "4rem" }}
      >
        <h1>Let’s stand together! 🕊</h1>
        <p style={{ fontSize: "20px" }}>
          We aim to bring the world together through the effort of bringing our
          hero home, and we need your help. 60% of your donation goes straight
          to our space agencies to accelerate the effort of saving Mark Watney,
          30% of them go to international organizations for the development of
          future space-exploration technologies, while the remaining goes to
          charities that support the next generations of cosmologists and
          astronautes. Every dollar you give will increase the chance of Mark’s
          rescue, please consider supporting this mission 💖
        </p>
        <div className="donate-container">
          <div
            className="donate-population-count"
            style={{
              margin: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h3 style={{ fontWeight: "bold", color: "rgb(220, 15, 15)" }}>
              890, 384, 302 people have donated
            </h3>
          </div>
          <div
            className="donate-amount-count"
            style={{
              margin: "2rem",
              margin: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h3 style={{ fontWeight: "bold", color: "rgb(220, 15, 15)" }}>
              💲2, 320, 478, 697 has been raised
            </h3>
          </div>
          <div
            className="donate-button"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "3rem",
            }}
          >
            <button
              className="btn btn-success"
              style={{
                fontSize: "30px",
              }}
            >
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="https://i.imgflip.com/6jkx54.jpg"
              >
                Donate Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Donate;
