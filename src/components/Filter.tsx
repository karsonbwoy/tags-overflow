import { Stack, Box } from "@mui/material";
import PageSizeSelect from "./PageSizeSelect";
import SortSelect from "./SortSelect";

export default function Filter() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stack spacing={2} direction='row' useFlexGap flexWrap="wrap">
                <SortSelect></SortSelect>
                <PageSizeSelect></PageSizeSelect>
            </Stack>
        </Box>
    )
}