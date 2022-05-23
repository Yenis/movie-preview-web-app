import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import React from "react";
import HeaderTopBar from "./components/Header";
import TrendingPage from "./pages/Trending";
import { useCurrentPage } from "./helpers/customHooks/usePageHook";
import SearchPage from "./components/Search";

const App: React.FC = () => {

  const { PageContextProvider } = useCurrentPage();

  return (
    <PageContextProvider>
      <HeaderTopBar />
      <Container>
        <Routes>
          <Route path="/" element={<TrendingPage />}></Route>
          <Route path="/trending" element={<TrendingPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </Container>
    </PageContextProvider>
  );
};

export default App;
