import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import StarIcon from "@mui/icons-material/Star";
import UndoIcon from "@mui/icons-material/Undo";

const HeaderTopBar: React.FC = () => {
  return (
    <AppBar position="sticky" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SmartDisplayIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Button onClick={() => {window.scroll(0, 0)}}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 600,
              color: "inherit",
              scrollBehavior: "auto"
            }}
          >
            MOVIE PREVIEW WEB APP
          </Button>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <StarIcon sx={{ paddingLeft: 1, paddingRight: 1 }} />
                POPULAR
              </Box>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <UndoIcon sx={{ paddingLeft: 1, paddingRight: 1 }} />
                RECENT
              </Box>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, width: 400 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderTopBar;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
