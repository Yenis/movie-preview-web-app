import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const PaginationBar: React.FC<PaginationProps> = (props) => {
  const handlePageChange = (pageNumber: number) => {
    props.setCurrentPage(pageNumber);
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
          size="large"
          count={100}
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
