import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import React from "react";
import HeaderTopBar from "./components/Header";
import TrendingPage from "./pages/Trending";
import SearchPage from "./pages/Search";
import RecentPage from "./pages/Recent";
import TopRatedPage from "./pages/TopRated";

const App: React.FC = () => {

  return (
    <>
      <HeaderTopBar />
      <Container>
        <Routes>
          <Route path="/" element={<TrendingPage />}></Route>
          <Route path="/trending" element={<TrendingPage />}></Route>
          <Route path="/toprated" element={<TopRatedPage />}></Route>
          <Route path="/recent" element={<RecentPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </Container>
    </>
  );
};

export default App;
