import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard, { MovieCardProps } from "../components/MovieCard";
import { TextField, Button, Container, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PaginationBar from "../components/Pagination";

const SearchPage: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState([]);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchText}&page=${currentPage}&include_adult=false`
      );
      setSearchList(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          style={{ flex: 1, margin: 5 }}
          label="Search"
          variant="filled"
          color="warning"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          onClick={fetchSearch}
          variant="contained"
          color="secondary"
          size="large"
          style={{ marginLeft: 10 }}
        >
          <SearchIcon />
        </Button>
      </Box>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {searchList
          ? searchList.map((movie: MovieCardProps) => {
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
    </Box>
  );
};

export default SearchPage;
