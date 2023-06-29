import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./HomePage.css";
import MovieList from "../../component/movielist/MovieList";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((response) => {
        console.log("reponse-->", response.results);
        setPopularMovies(response.results);
      })
      .catch((err) => {
        console.log("err-->", err);
      });
  }, []);

  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        style={{ padding: "4px" }}
      >
        {popularMovies &&
          popularMovies.map((movieData, index) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movieData.id}`}
              key={index}
            >
              <div className="posterImage" style={{ height: "600px" }}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
                  alt=""
                  style={{ margin: "auto", display: "block", width: "100%" }}
                />
              </div>
              <div
                className="posterImage_overlay"
                style={{
                  position: "absolute",
                  padding: "5rem",
                  bottom: "0px",
                  height: "70%",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  backgroundImage:
                    "linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1))",
                  opacity: "1",
                  transitionOpacity: ".3s",
                }}
              >
                <div
                  className="posterImage_title"
                  style={{
                    fontWeight: "900",
                    fontSize: "4rem",
                    marginBottom: "0.4rem",
                    textAlign: "left",
                  }}
                >
                  {movieData ? movieData.original_title : ""}
                </div>
                <div
                  className="posterImage_runtime"
                  style={{
                    fontSize: "2rem",
                    marginBottom: "1rem",
                  }}
                >
                  {movieData ? movieData.release_date : ""}
                  <span
                    className="posterImage_rating"
                    style={{ marginLeft: "3rem" }}
                  >
                    {movieData ? movieData.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                  <div
                    className="posterImage_description"
                    style={{
                      fontStyle: "italic",
                      fontSize: "1rem",
                      marginBottom: "0.25rem",
                      display: "flex",
                      textAlign: "left",
                      width: "50%",
                    }}
                  >
                    {movieData ? movieData.overview : ""}
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </Carousel>
      <MovieList/>
    </div>
  );
};

export default HomePage;
