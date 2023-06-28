import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        margin: "0 2.5rem",
        padding: ".5rem 0",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <div
        className="headerLeft"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Link to="/">
          <img
            className="header_icon"
            style={{ width: "80px", cursor: "pointer" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt=""
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span
            style={{
              margin: "0 30px",
              fontSize: "1.3rem",
              cursor: "pointer",
              color: "white",
            }}
          >
            Popular
          </span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span style={{
              margin: "0 30px",
              fontSize: "1.3rem",
              cursor: "pointer",
              color: "white",
            }}>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span style={{
              margin: "0 30px",
              fontSize: "1.3rem",
              cursor: "pointer",
              color: "white",
            }}>Upcoming</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
