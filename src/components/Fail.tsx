import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Loading() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h5">Failed to fetch data.</Typography>
        </Box>
    );
}