import { Alert, Box } from '@mui/material';

export default function Fail() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Alert severity='error'>Failed to fetch data.</Alert>
        </Box>
    );
}