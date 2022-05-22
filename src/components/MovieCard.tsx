import { Box } from "@mui/material";

export interface MovieCardProps {
  id?: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  original_language: string;
  original_title?: string;
}

const MovieCard: React.FC<MovieCardProps> = (props) => {
  return (
    <Box
      sx={{
        width: { xs: 180, md: 240 },
        height: { xs: 300, md: 385 },
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        backgroundColor: "darkslategrey",
        color: "whitesmoke",
        margin: 1,
        "&:hover": {
          backgroundColor: "#9c27b0",
        },
      }}
    >
      <Box
        component="img"
        sx={{
          width: { xs: 164, md: 224 },
          height: { xs: 225, md: 300 },
          margin: 1,
          borderRadius: 3,
        }}
        src={`https://image.tmdb.org/t/p/w300${props.poster_path}`}
        alt="N/A"
      />
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            fontWeight: 600,
            fontSize: "large",
          }}
        >
          {props.title}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: 1,
          }}
        >
          <Box sx={{ fontWeight: 500 }}>{props.release_date}</Box>
          {props.vote_average > 7 ? (
            <Box sx={{ fontWeight: 600, fontSize: "large", color: "gold" }}>
              {props.vote_average}
            </Box>
          ) : (
            <Box sx={{ fontWeight: 600, color: "silver" }}>
              {props.vote_average}
            </Box>
          )}
          <Box sx={{ fontWeight: 800, color: "silver" }}>
            {props.original_language.toUpperCase()}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieCard;
