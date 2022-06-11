import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer">
        <p className="footer-heading">
          {
            "This website you see here is probably made after 30+ hours of learning a stupid thing called ReactJS & endless braindead debugging"
          }
        </p>
        <small className="website-rights">Benny © 2022</small>
      </section>
    </div>
  );
}
export default Footer;
