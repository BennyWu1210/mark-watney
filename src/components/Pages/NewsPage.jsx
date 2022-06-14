import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import "./NewsPage.css";

function NewsPage({ title, image, contentFile, analysisFile }) {
  const [textContent, setTextContent] = useState("");
  const [analysisContent, setAnalysisContent] = useState("");
  // Read data from text file
  const getPageContent = (file, setter) => {
    fetch(file)
      .then(function (res) {
        return res.text();
      })
      .then(function (data) {
        setter(data);
        return data;
      });
  };
  useEffect(() => {
    getPageContent(contentFile, setTextContent);
    getPageContent(analysisFile, setAnalysisContent);
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

        <h1 style={{ paddingTop: "4rem" }}>Analysis</h1>
        {analysisContent.split("\n").map((paragraph) => (
          <p
            style={{ color: "rgb(200, 70, 70)" }}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          ></p>
        ))}
      </div>
    </>
  );
}
export default NewsPage;
