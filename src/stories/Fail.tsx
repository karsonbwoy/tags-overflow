import * as React from 'react';
import Box from '@mui/material/Box';
import { Alert } from '@mui/material';

export default function Fail() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Alert severity='error'>Failed to fetch data.</Alert>
        </Box>
    );
}