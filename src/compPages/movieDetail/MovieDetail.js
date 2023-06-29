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
        <div className="movie_intro">
          <img
            className="movie_backdrop"
            src={`https://image.tmdb.org/t/p/original/${
              movieDetail && movieDetail ? movieDetail.backdrop_path : ""
            }`}
            alt=""
          />
        </div>
        <div className="movie_detail">
          <div className="movie_detailLeft">
            <div className="movie_posterBox">
              <img  //https://image.tmdb.org/t/p/original/
                className="movie_poster"
                src={`https://image.tmdb.org/t/p/original/${
                  movieDetail && movieDetail ? movieDetail.poster_path : ""
                }`}
                alt=""
              />
            </div>
          </div>
          <div className="movie_detailRight">
            <div className="movie_detailRightTop">
              <div className="movie_name">
                {movieDetail ? movieDetail.original_title : ""}
              </div>
              <div className="movie_tagline">
                {movieDetail ? movieDetail.tagline : ""}
              </div>
              <div className="movie_rating">
                {movieDetail ? movieDetail.vote_average : ""}{" "}
                <i className="fas fa-star" />
                <span className="movie_voteCount">
                  {movieDetail ? "(" + movieDetail.vote_count + ") votes" : ""}
                </span>
              </div>
              <div className="movie_runtime">
                {movieDetail ? movieDetail.runtime + " mins" : ""}
              </div>
              <div className="movie_releaseDate">
                {movieDetail ? "Release date: " + movieDetail.release_date : ""}
              </div>
              <div className="movie_genres">
                {movieDetail && movieDetail.genres
                  ? movieDetail.genres.map((genre,gIndex) => (
                      <>
                        <span className="movie_genre" id={genre.id} key={gIndex}>
                          {genre.name}
                        </span>
                      </>
                    ))
                  : ""}
              </div>
            </div>
            <div className="movie_detailRightBottom">
              <div className="synopsisText">Synopsis</div>
              <div>{movieDetail ? movieDetail.overview : ""}</div>
            </div>
          </div>
        </div>
        <div className="movie_links">
          <div className="movie_heading">Useful Links</div>
          {movieDetail && movieDetail.homepage && (
            <Link
              to={movieDetail.homepage}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <p>
                <span className="movie_homeButton movie_Button">
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
                <span className="movie_imdbButton movie_Button">
                  IMDb<i className="newTab fas fa-external-link-alt"></i>
                </span>
              </p>
            </Link>
          )}
        </div>
        <div className="movie_heading">Production companies</div>
        <div className="movie_production">
          {movieDetail &&
            movieDetail.production_companies &&
            movieDetail.production_companies.map((company,coIndex) => (
              <>
                {company.logo_path && (
                  <span className="productionCompanyImage" key={coIndex}>
                    <img
                      className="movie_productionComapany"
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
