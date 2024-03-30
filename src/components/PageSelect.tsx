import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useFilterStore } from '../store';

export default function PageSelect() {
    const { page, setPage } = useFilterStore((state) => state)

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    return (
        <Stack spacing={2}>
            <Pagination
                count={99}
                page={page}
                onChange={handleChange}
                renderItem={(item) => (
                    <PaginationItem
                        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        {...item}
                    />
                )}
            />
        </Stack>
    );
}