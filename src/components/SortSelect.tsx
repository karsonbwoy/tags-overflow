import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SortSelect() {
    const [direction, setDirection] = React.useState('Ascending');

    const handleChange = (event: SelectChangeEvent) => {
        setDirection(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 240 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sorting</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={direction}
                    label="Sorting"
                    onChange={handleChange}
                >
                    <MenuItem value={'Ascending'}>Ascending</MenuItem>
                    <MenuItem value={'Descending'}>Descending</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}