import { Container } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard, {
  MovieCardProps as MovieData,
} from "../components/MovieCard";
import { useCurrentPage } from "../helpers/customHooks/usePageHook";

interface PopularMoviesList {
  results: Array<MovieData>;
  total_pages: number;
}

interface TrendingProps {}

const TrendingPage: React.FC<TrendingProps> = () => {
  const [popularMoviesList, setPopularMoviesList] =
    useState<PopularMoviesList>();

    const { currentPage } = useCurrentPage();

  useEffect(() => {
    const getPopularMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}`
      );
      setPopularMoviesList(data);
    };
    getPopularMovies();
  }, [currentPage]);

  return (
    <Container sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {popularMoviesList
        ? popularMoviesList.results.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
                original_language={movie.original_language}
              />
            );
          })
        : null}
    </Container>
  );
};

export default TrendingPage;
