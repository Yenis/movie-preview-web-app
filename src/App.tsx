import { Container, Pagination } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import React from "react";
import HeaderTopBar from "./components/Header";
import Trending from "./pages/Trending";
import Recent from "./pages/Recent";
import { useCurrentPage } from "./helpers/customHooks/usePageHook";

const App: React.FC = () => {

  const { PageContextProvider } = useCurrentPage();

  return (
    <PageContextProvider>
      <HeaderTopBar />
      <Container>
        <Routes>
          <Route path="/" element={<Trending />}></Route>
          <Route path="/trending" element={<Trending />}></Route>
          <Route path="/recent" element={<Recent />}></Route>
        </Routes>
      </Container>
      <Pagination />
    </PageContextProvider>
  );
};

export default App;
