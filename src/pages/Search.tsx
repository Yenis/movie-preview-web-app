import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard, { MovieCardProps } from "../components/MovieCard";
import { TextField, Button, Container, Box } from "@mui/material";
import { useCurrentPage } from "../helpers/customHooks/usePageHook";
import SearchIcon from "@mui/icons-material/Search";

const SearchPage: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);

  const { currentPage } = useCurrentPage();

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
            process.env.REACT_APP_API_KEY
        }&query=${searchText}&page=${currentPage}&include_adult=false`
      );
      setContent(data.results);
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
        {content
          ? content.map((movie: MovieCardProps) => {
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
      {searchText && !content && <h2>No Movies Found</h2>}
    </Box>
  );
};

export default SearchPage;

// import React, { useState } from "react";
// import { styled, alpha } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import SearchIcon from "@mui/icons-material/Search";
// import InputBase from "@mui/material/InputBase";
// import { useCurrentPage } from "../helpers/customHooks/usePageHook";
// import axios from "axios";
// import { FormLabel } from "@mui/material";

// const SearchPage: React.FC = () => {

//     const [searchInput, setSearchInput] = useState();
//     const [content, setContent] = useState([]);

//     const { currentPage } = useCurrentPage();

//     const fetchSearch = async () => {
//         try {
//           const { data } = await axios.get(
//             `https://api.themoviedb.org/3/search/$movie?api_key=${
//               process.env.REACT_APP_API_KEY
//             }&language=en-US&query=${searchInput}&page=${currentPage}&include_adult=false`
//           );
//           console.log(data);
//         } catch (error) {
//           console.error(error);
//         }
//       };

//   return (
//     <Box sx={{ flexGrow: 0, width: 400 }}>
//       <Search >
//         <SearchIconWrapper>
//           <SearchIcon />
//         </SearchIconWrapper>
//         <FormLabel onSubmit={fetchSearch}>
//         <StyledInputBase onChange={(e: any) => {(setSearchInput(e.target.value))}}
//           placeholder="Search…"
//           inputProps={{ "aria-label": "search" }}
//         />
//         </FormLabel>
//       </Search>
//     </Box>
//   );
// };

// export default SearchPage;

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));
