import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieList.css';
import MovieCard from '../card/MovieCard';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const MovieList = () => {
  const { type } = useParams();
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      ` https://api.themoviedb.org/3/movie/${
        type ? type : 'popular'
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log('reponse-->', response.results);
        setMovieList(response.results);
      })
      .catch((err) => {
        console.log('err-->', err);
      });
  };

  return (
    <>
      <div className="movie_list">
        <h2 className="list_title">
          {(type ? type : 'popular').toUpperCase()}
        </h2>
        <div className="list_cards">
          {movieList &&
            movieList.map((mdata, mindex) => {
              return <MovieCard movieData={mdata} key={mdata.id} />;
            })}
        </div>
      </div>
    </>
  );
};

export default MovieList;
