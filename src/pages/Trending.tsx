import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import MovieCard, {
  MovieCardProps as MovieData,
} from "../components/MovieCard";
import PaginationBar from "../components/Pagination";
import Genres, { GenreProps } from "../components/Genres";

export interface MoviesList {
  results: Array<MovieData>;
  total_pages: number;
}

const TrendingPage: React.FC = () => {
  const [moviesList, setMoviesList] = useState<MoviesList>();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [genre, setGenre] = useState<GenreProps>();

  useEffect(() => {
    const getPopularMovies = async () => {
      if (!genre) {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            process.env.REACT_APP_API_KEY
          }&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}`
        );
        setMoviesList(data);
      } else {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            process.env.REACT_APP_API_KEY
          }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=${genre.id}`
        );
        setMoviesList(data);
      }
    };
    getPopularMovies();
  }, [currentPage, genre]);

  return (
    <>
      <Genres setGenre={setGenre} setCurrentPage={setCurrentPage} />
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {moviesList
          ? moviesList.results.map((movie) => {
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
      <PaginationBar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default TrendingPage;
