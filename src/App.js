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
