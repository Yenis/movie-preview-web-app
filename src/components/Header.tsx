import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import UndoIcon from "@mui/icons-material/Undo";
import RecommendIcon from "@mui/icons-material/Recommend";
import { Tooltip } from "@mui/material";

const HeaderTopBar: React.FC = () => {
  const navigateTo = useNavigate();

  const infoMessage = `Movie Preview Web App`;

  return (
    <AppBar position="sticky" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Tooltip title={infoMessage}>
            <Button
              onClick={() => {
                window.scroll(0, 0);
              }}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 600,
                color: "inherit",
                scrollBehavior: "auto",
              }}
            >
              <Box
                component="img"
                sx={{ borderRadius: 2 }}
                src={require("../logo2.png")}
              />
            </Button>
          </Tooltip>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Tooltip title="Navigate to Trending Page">
              <Button
                onClick={() => {
                  navigateTo("/trending");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <StarIcon sx={{ paddingLeft: 1, paddingRight: 1 }} />
                  POPULAR
                </Box>
              </Button>
            </Tooltip>
            <Tooltip title="Navigate to Recent Page">
              <Button
                onClick={() => {
                  navigateTo("/recent");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <UndoIcon sx={{ paddingLeft: 1, paddingRight: 1 }} />
                  RECENT
                </Box>
              </Button>
            </Tooltip>
            <Tooltip title="View Top Rated Movies">
              <Button
                onClick={() => {
                  navigateTo("/toprated");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <RecommendIcon sx={{ paddingLeft: 1, paddingRight: 1 }} />
                  TOP RATED
                </Box>
              </Button>
            </Tooltip>
            <Tooltip title="Search Movies">
              <Button
                onClick={() => {
                  navigateTo("/search");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <SearchIcon sx={{ paddingLeft: 1, paddingRight: 1 }} />
                  SEARCH
                </Box>
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderTopBar;
