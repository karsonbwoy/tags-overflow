import * as React from 'react';
import { Box, Stack, Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useFilterStore } from '../store';

export default function PageSelect({ count }: { count: number }) {
    const { page, setPage } = useFilterStore((state) => state)

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stack spacing={2}>
                <Pagination
                    count={count}
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
        </Box>
    );
}