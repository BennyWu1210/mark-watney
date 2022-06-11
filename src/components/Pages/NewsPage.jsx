import React, { useEffect, useState } from "react";
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
    console.log("BRUH");
    getPageContent();
  });

  return (
    <>
      <div className="title-container">
        <img src={image} alt={title} className="title-background" />
      </div>
      <h1>{title}</h1>
      <div className="news-content">
        {textContent.split("\n").map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </>
  );
}
export default NewsPage;
