import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useFilterStore } from '../store';

export default function SortSelect() {
    const { isAscending, changeSorting } = useFilterStore((state) => state)

    return (
        <Box sx={{ minWidth: 240 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sorting</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={isAscending ? 'ascending' : 'descending'}
                    label="Sorting"
                    onChange={(e) => changeSorting(e.target.value)}
                >
                    <MenuItem value={'ascending'}>Ascending</MenuItem>
                    <MenuItem value={'descending'}>Descending</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}