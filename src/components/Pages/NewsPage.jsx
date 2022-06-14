import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import "./NewsPage.css";

function NewsPage({ title, image, textFile }) {
  const [textContent, setTextContent] = useState("");
  // Read data from text file
  const getPageContent = () => {
    fetch(textFile)
      .then(function (res) {
        return res.text();
      })
      .then(function (data) {
        setTextContent(data);
        return data;
      });
  };
  useEffect(() => {
    getPageContent();
  });

  return (
    <>
      <NavBar color="black" />
      <div className="title-container">
        <img src={image} alt={title} className="title-background" />
      </div>

      <div className="news-content">
        <h1>{title}</h1>

        {textContent.split("\n").map((paragraph) => (
          <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
        ))}
        <i>Date: June 13th, 2035</i>
      </div>
    </>
  );
}
export default NewsPage;
