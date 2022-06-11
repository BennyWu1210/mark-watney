import React from "react";
import "./CardsSection.css";
import Card from "./common/Card";
import "./CardsSection.css";
function CardsSection({ news }) {
  return (
    <>
      <div className="cards">
        <h1>The Mission 🚀</h1>
        <p>
          It is the year 2035. After almost a century of crazy development, the
          world has seen unprecedented growth in the field of space exploration.
          “<b>Ares 4</b>” was one of the many crazy missions that shocked the
          world and truly demonstrates our potential, many believe that it is
          human’s first step of conquering the Solar System.
        </p>
        <p>
          The 6 astronauts landed on Mars 324 Sols (a solar day on Mars) ago.
          Everything was going great until a giant dust storm approaches their
          base on Sol 6, the astronauts were forced to leave. The problem is:{" "}
          <i>only 5 of them were able to come back.</i>
        </p>
        <p>
          It turned out that the 6th astronaut was alive, miraculously. Up until
          today, it has been <b>318 Sols, 13 hours and 18 minutes</b> since the
          unlucky astronaut - Mark Watney - was stranded on a red planet 180
          million kilometers away from our home. The space agency and countless
          scientists around the world are on a mission to rescue him.
        </p>
        <p>
          Mark is a true pioneer of humanity. Many say that the World has never
          been this united before, and that is exactly what the{" "}
          <b>“Save Mark Watney”</b>
          organization is aiming for - spread hope while bringing humanity
          together against this challenge.
        </p>
        <p>
          Please scroll to view the latest news today regarding the world’s
          effort to save Mark Watney
        </p>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <Card
                path={news[0].path}
                label={news[0].label}
                src={news[0].srcSmall}
                title={news[0].title}
                text={news[0].text}
              />
              <Card
                path="/news/1"
                label="Breaking News"
                src={require("../images/Home-background.jpg")}
                text="President speaks out"
              />
            </ul>
            <ul className="cards__items">
              <Card
                path="/news/1"
                label="Breaking News"
                src={require("../images/Home-background.jpg")}
                text="President speaks out"
              />
              <Card
                path="/news/1"
                label="Breaking News"
                src={require("../images/Home-background.jpg")}
                text="President speaks out"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardsSection;
