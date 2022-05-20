import axios from "axios";
import React, { useEffect, useState } from "react";
import HeaderTopBar from "./components/Header";

interface MovieData {
  backdrop_path: string;
  original_title: string;
}

interface PopularMoviesList {
  results: Array<MovieData>;
  total_pages: number;
}

const App: React.FC = () => {
  const [popularMoviesList, setPopularMoviesList] =
    useState<PopularMoviesList>();

  useEffect(() => {
    const getPopularMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${1}`
      );
      console.log("RESULTS:", data.results);
      console.log("PAGES:", data.total_pages);
      setPopularMoviesList(data);
    };
    getPopularMovies();
  }, []);

  return (
    <div className="App">
      <HeaderTopBar />
      <ul>
        {popularMoviesList
          ? popularMoviesList.results.map((movie) => {
              return <li key={movie.backdrop_path}>{movie.original_title}</li>;
            })
          : null}
      </ul>
    </div>
  );
};

export default App;
