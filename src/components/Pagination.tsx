import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useCurrentPage } from '../helpers/customHooks/usePageHook';
 
const PaginationBar: React.FC = () => {

    const { currentPage, setCurrentPage } = useCurrentPage();

    const handlePageChange = () => {
        setCurrentPage(2)
        window.scroll(0, 0);
    }

    return (
        <Stack spacing={2}>
          <Pagination count={10} shape="rounded" />
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      );
}
 
export default PaginationBar;

