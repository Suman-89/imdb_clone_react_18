import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./Card.css";

const MovieCard = ({ movieData }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" heighlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movieData.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div
            className="cards"
            style={{
              display: "inline-block",
              transition: "transform .2s",
              position: "relative",
              borderRadius: "10px",
              overflow: "hidden",
              margin: "0.19rem",
              cursor: "pointer",
              minWidth: "200px",
              height: "300px",
              zIndex: "0",
              border: "1px solid rgb(99, 99, 99)",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${
                movieData ? movieData.poster_path : ""
              }`}
              alt=""
              className="card_image"
              style={{ height: '300px'}}
            />
            <div className="cards_overlay"
            style={{
              position: 'absolute',
              padding: '0 1rem 1rem 1rem',
              bottom: '0px',
              height: '290px',
              display: 'flex',
              flexDirection: 'column',
              width: '85%',
              justifyContent: 'flex-end',
              backgroundImage: 'linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1))',
              opacity: '0',
              transition: 'opacity .2s'
            }}>
              <div className="card_title">
                {movieData ? movieData.original_title : ""}
              </div>
              <div className="card_runtime">
                {movieData ? movieData.release_date : ""}
                <span className="card_rating">
                  {movieData ? movieData.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card_description">
                {movieData ? movieData.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default MovieCard;
