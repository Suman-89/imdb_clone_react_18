import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./HomePage.css";


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
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
                  alt=""
                />
              </div>
              <div className="posterImage_overlay">
                <div className="posterImage_title">
                  {movieData ? movieData.original_title : ""}
                </div>
                <div className="posterImage_runtime">
                    {movieData?movieData.release_date:''}
                    <span className="posterImage_rating">
                        {movieData?movieData.vote_average:''}
                        <i className="fas fa-star" />{" "}
                    </span>
                    <div className="posterImage_description">
                        {movieData?movieData.overview:''}
                    </div>
                </div>
              </div>
            </Link>
          ))}
      </Carousel>
    </div>
  );
};

export default HomePage;
