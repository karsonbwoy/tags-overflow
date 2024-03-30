import { Stack } from "@mui/material";
import PageSizeSelect from "./PageSizeSelect";
import SortSelect from "./SortSelect";

export default function Filter() {
    return (
        <Stack spacing={2} direction='row'>
            <SortSelect></SortSelect>
            <PageSizeSelect></PageSizeSelect>
        </Stack>
    )
}