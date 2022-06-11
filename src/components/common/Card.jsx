import React from "react";
import { Link } from "react-router-dom";

function Card({ path, label, src, title, text }) {
  return (
    <>
      <li className="cards__item">
        <Link to={path} className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={label}>
            <img src={src} alt="News Image" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h4 className="cards__item__title">{title}</h4>
            <p className="cards__item__text">{text}</p>
          </div>
        </Link>
      </li>
    </>
  );
}
export default Card;
