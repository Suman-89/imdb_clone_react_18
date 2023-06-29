import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movieData }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" heighlightColor="#444">
            <Skeleton height={300} duration={10} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movieData.id}`}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <div className="cards" style={{}}>
            <img
              src={`https://image.tmdb.org/t/p/original/${
                movieData ? movieData.poster_path : ''
              }`}
              alt=""
              className="card_image"
              style={{ height: '300px' }}
            />
            <div className="cards_overlay" style={{}}>
              <div className="card_title">
                {movieData ? movieData.original_title : ''}
              </div>
              <div className="card_runtime">
                {movieData ? movieData.release_date : ''}
                <span className="card_rating">
                  {movieData ? movieData.vote_average : ''}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card_description">
                {movieData ? movieData.overview.slice(0, 118) + '...' : ''}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default MovieCard;
