import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./MovieDetail.css";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState();
  const { id } = useParams();

  const getMovieData = () => {
     fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log("reponse-->", response);
          setMovieDetail(response);
      })
      .catch((err) => {
        console.log("err-->", err);
      });
  };

  useEffect(() => {
    getMovieData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="movie">
        <div className="movie__intro">
          <img
            className="movie__backdrop"
            src={`https://image.tmdb.org/t/p/original/${
              movieDetail && movieDetail ? movieDetail.backdrop_path : ""
            }`}
            alt=""
          />
        </div>
        <div className="movie__detail">
          <div className="movie__detailLeft">
            <div className="movie__posterBox">
              <img  //https://image.tmdb.org/t/p/original/
                className="movie__poster"
                src={`https://image.tmdb.org/t/p/original/${
                  movieDetail && movieDetail ? movieDetail.poster_path : ""
                }`}
                alt=""
              />
            </div>
          </div>
          <div className="movie__detailRight">
            <div className="movie__detailRightTop">
              <div className="movie__name">
                {movieDetail ? movieDetail.original_title : ""}
              </div>
              <div className="movie__tagline">
                {movieDetail ? movieDetail.tagline : ""}
              </div>
              <div className="movie__rating">
                {movieDetail ? movieDetail.vote_average : ""}{" "}
                <i className="fas fa-star" />
                <span className="movie__voteCount">
                  {movieDetail ? "(" + movieDetail.vote_count + ") votes" : ""}
                </span>
              </div>
              <div className="movie__runtime">
                {movieDetail ? movieDetail.runtime + " mins" : ""}
              </div>
              <div className="movie__releaseDate">
                {movieDetail ? "Release date: " + movieDetail.release_date : ""}
              </div>
              <div className="movie__genres">
                {movieDetail && movieDetail.genres
                  ? movieDetail.genres.map((genre,gIndex) => (
                      <>
                        <span className="movie__genre" id={genre.id} key={gIndex}>
                          {genre.name}
                        </span>
                      </>
                    ))
                  : ""}
              </div>
            </div>
            <div className="movie__detailRightBottom">
              <div className="synopsisText">Synopsis</div>
              <div>{movieDetail ? movieDetail.overview : ""}</div>
            </div>
          </div>
        </div>
        <div className="movie__links">
          <div className="movie__heading">Useful Links</div>
          {movieDetail && movieDetail.homepage && (
            <Link
              to={movieDetail.homepage}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <p>
                <span className="movie__homeButton movie__Button">
                  Homepage <i className="newTab fas fa-external-link-alt"></i>
                </span>
              </p>
            </Link>
          )}
          {movieDetail && movieDetail.imdb_id && (
            <Link
              to={"https://www.imdb.com/title/" + movieDetail.imdb_id}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <p>
                <span className="movie__imdbButton movie__Button">
                  IMDb<i className="newTab fas fa-external-link-alt"></i>
                </span>
              </p>
            </Link>
          )}
        </div>
        <div className="movie__heading">Production companies</div>
        <div className="movie__production">
          {movieDetail &&
            movieDetail.production_companies &&
            movieDetail.production_companies.map((company,coIndex) => (
              <>
                {company.logo_path && (
                  <span className="productionCompanyImage" key={coIndex}>
                    <img
                      className="movie__productionComapany"
                      src={
                        "https://image.tmdb.org/t/p/original/" +
                        company.logo_path
                      }
                      alt=""
                    />
                    <span>{company.name}</span>
                  </span>
                )}
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
