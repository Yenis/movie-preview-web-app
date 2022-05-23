import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useCurrentPage } from "../helpers/customHooks/usePageHook";
import { Box } from "@mui/material";

const PaginationBar: React.FC = () => {
  const { currentPage, setCurrentPage } = useCurrentPage();

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", margin: 2 }}>
        <Stack spacing={2}>
          <Pagination
            onChange={(e: any) => {
              handlePageChange(e.target.textContent);
            }}
            hideNextButton
            hidePrevButton
            color="primary"
            page={currentPage}
            size="large"
            count={10}
            defaultPage={1}
            boundaryCount={2}
            variant="outlined"  
            shape="rounded"
          />
        </Stack>
    </Box>
  );
};

export default PaginationBar;
