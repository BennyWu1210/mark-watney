import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Donate from "./components/Pages/Donate";
import Description from "./components/Pages/Description";
import NewsPage from "./components/Pages/NewsPage";
import Footer from "./components/Footer";

// https://stackoverflow.com/questions/54427793/getting-blank-page-after-react-app-publish-in-github
function App() {
  const news = [
    {
      id: 0,
      path: "/news/elon-musk",
      label: "Breaking News",
      srcSmall: require("./images/Elon-Musk-Old.png"),
      srcLarge: require("./images/spaceX.jpeg"),
      title:
        "Sources: \"Elon Musk is planning to increase SpaceX's involvement in Mark's rescue\"",
      text: "The trillionaire has ambitious plans. Here's what we know:",
    },
    {
      id: 1,
      path: "/news/president-babcock",
      label: "NASA Update",
      srcSmall: require("./images/Taylor-Swift.jpg"),
      srcLarge: require("./images/Taylor-Swift-Background.jpg"),
      title:
        "Chairman of The North American Union (NAU) hosts a joint press conference with NASA",
      text: "The conference is a significant turning point, analysis says ",
    },
    {
      id: 2,
      path: "/news/potato-prices",
      label: "Analysis",
      srcSmall: require("./images/Potatoes.jpg"),
      srcLarge: require("./images/Potatoes-Background.jpg"),
      title:
        "Potato prices have risen by 734% in the past year, and it will likely to rise even more in the near future",
      text: "Potatoes are now more expensive than gas",
    },
    {
      id: 3,
      path: "/news/ares3-interview",
      label: "Interview",
      srcSmall: require("./images/Ares3.jpg"),
      srcLarge: require("./images/Ares3-Background.jpg"),
      title: "Exclusive interview with the NASA Ares 3 crew:",
      text: "See what the heros think about their mission ",
    },
  ];

  const getNewsPage = (index) => {
    return (
      <NewsPage
        image={news[index].srcLarge}
        textFile={require("./TextFiles/News" + index + ".txt")}
        title={news[index].title}
      />
    );
  };

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home news={news} />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/description" element={<Description />} />
          {news.map((n) => (
            <Route key={n.id} path={n.path} element={getNewsPage(n.id)} />
          ))}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
