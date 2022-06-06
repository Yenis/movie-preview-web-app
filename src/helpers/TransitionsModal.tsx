import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";

interface FullMovieData {
  backdrop_path: string;
  budget: number;
  homepage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  height: "75%",
  bgcolor: "rgb(35, 0, 75)",
  color: "whitesmoke",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};

export const TransitionsModal = ({ children, id }: any) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [content, setContent] = useState<FullMovieData>();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data);
    setContent(data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <Box>
      <Button onClick={handleOpen}>{children}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={{ ...style, display: "flex" }}>
            <Box
              sx={{
                border: "2px solid #fff",
                width: "40%",
                height: "100%",
                marginRight: 1,
              }}
            >
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: "100%",
                }}
                src={
                  content &&
                  `https://image.tmdb.org/t/p/w500${content.poster_path}`
                }
                alt="N/A"
              />
            </Box>
            <Box
              sx={{
                border: "2px solid #fff",
                width: "60%",
                height: "100%",
                marginLeft: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box component="h2">{content && content.title}</Box>
              <Box component="h4">Tagline: {content && content.tagline}</Box>
              <Box sx={{ paddingLeft: 2, paddingRight: 2 }} component="p">
                {content && content.overview}
              </Box>
              <Box sx={{ fontSize: "large", fontWeight: 500 }} component="p">
                Budget: {content && content.budget} $, Revenue:{" "}
                {content && content.revenue} $
              </Box>

              <Box sx={{ fontSize: "large", fontWeight: 500 }} component="p">
                Original Title and Language: {content && content.original_title}
                , {content && content.original_language.toUpperCase()}
              </Box>

              <Box
                sx={{ fontSize: "large", fontWeight: 500, margin: 1 }}
                component="p"
              >
                Release Date: {content && content.release_date}, Runtime:{" "}
                {content && content.runtime} min
              </Box>

              <Box
                sx={{ fontSize: "large", fontWeight: 500, margin: 1 }}
                component="p"
              >
                Popularity: {content && content.popularity} Average Vote:{" "}
                {content && content.vote_average} Number of Votes:{" "}
                {content && content.vote_count}
              </Box>
              <Box component="a" href={content && content.homepage}>
                {content && content.homepage}
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};
