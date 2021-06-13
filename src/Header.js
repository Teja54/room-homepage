import React, { useState, useRef } from "react";
import data from "./data";

const Header = () => {
  const [list, setList] = useState(data);
  const [index, setIndex] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const imgRef = useRef(null);

  const slideRight = () => {
    setIndex((index + 1) % list.length); // increases index by 1
    console.log((index + 1) % list.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(list.length - 1); // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex);
    }
  };

  const changeImg = () => {
    if (
      imgRef.current.src ===
      "https://res.cloudinary.com/teja54/image/upload/v1623490941/icon-hamburger_klusqo.svg"
    ) {
      imgRef.current.src =
        "https://res.cloudinary.com/teja54/image/upload/v1623490941/icon-close_yqd4gu.svg";
      setShowNav(true);
    } else {
      imgRef.current.src =
        "https://res.cloudinary.com/teja54/image/upload/v1623490941/icon-hamburger_klusqo.svg";
      setShowNav(false);
    }
  };

  const { id, bi, h3, p } = list[index];
  const myStyle = {
    backgroundImage: `url(${bi})`,
    animation: "fadeMe 1s",
  };
  return (
    <header key={id}>
      <div className="header" style={myStyle}>
        <nav>
          <div className="hamburger" onClick={changeImg}>
            <img
              src="https://res.cloudinary.com/teja54/image/upload/v1623490941/icon-hamburger_klusqo.svg"
              alt=""
              ref={imgRef}
            />
          </div>
          <a href className="logo">
            <img
              src="https://res.cloudinary.com/teja54/image/upload/v1623490943/logo_t0uiv3.svg"
              alt=""
            />
          </a>
          <ul className={`${showNav ? "nav-list active" : "nav-list"}`}>
            <li>
              <a href>home</a>
            </li>
            <li>
              <a href>shop</a>
            </li>
            <li>
              <a href>about</a>
            </li>
            <li>
              <a href>contact</a>
            </li>
          </ul>
        </nav>
        <div className="btn-container">
          <div className="btn left-btn" onClick={slideLeft}>
            <img
              src="https://res.cloudinary.com/teja54/image/upload/v1623490941/icon-angle-left_ql74pu.svg"
              alt=""
            />
          </div>
          <div className="btn right-btn" onClick={slideRight}>
            <img
              src="https://res.cloudinary.com/teja54/image/upload/v1623490941/icon-angle-right_ypwhnz.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="header-text">
        <h3>{h3}</h3>
        <p>{p}</p>
        <a href className="shopnow">
          <span>shop now</span>
          &nbsp;
          <img
            src="https://res.cloudinary.com/teja54/image/upload/v1623490941/icon-arrow_j5ldqk.svg"
            alt=""
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
