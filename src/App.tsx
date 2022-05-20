import axios from "axios";
import React, { useEffect, useState } from "react";

interface PopularMoviesList {
  results: Array<any>;
}

const App: React.FC = () => {
  const [popularMoviesList, setPopularMoviesList] =
    useState<PopularMoviesList>();

  useEffect(() => {
    const getPopularMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${1}`
      );
      console.log("RESULTS:", data.results);
      console.log("PAGES:", data.total_pages);
      setPopularMoviesList(data);
    };
    getPopularMovies();
  }, []);

  return (
    <div className="App">
      {popularMoviesList ?
        popularMoviesList.results.map((movie) => {
          return <pre key={movie.backdrop_path}>{movie.original_title}</pre>;
        }) : null}
    </div>
  );
};

export default App;
