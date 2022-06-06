import { Chip, Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

interface GenrePageProps {
  setGenre: (genre: any) => void;
  setCurrentPage: (page: number) => void;
}

const Genres: React.FC<GenrePageProps> = (props) => {
  const [genres, setGenres] = useState<any>([]);

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
    // eslint-disable-next-line
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: 2,
        justifyContent: "space-around",
      }}
    >
      {genres.map((genre: any) => (
        <Chip
          style={{ margin: 2, color: "white" }}
          label={genre.name}
          key={genre.id}
          variant="outlined"
          clickable
          onClick={() => {
            props.setGenre(genre.id);
            props.setCurrentPage(1);
          }}
        />
      ))}
    </Container>
  );
};

export default Genres;
