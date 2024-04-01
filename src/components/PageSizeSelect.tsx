import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useFilterStore } from '../store';

export default function PageSizeSelect() {
    const { pageSize, setPageSize } = useFilterStore((state) => state)
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Count</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={pageSize}
                    label="Count"
                    onChange={(e) => setPageSize(e.target.value)}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}