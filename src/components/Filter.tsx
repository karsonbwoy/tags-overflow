import { Stack } from "@mui/material";
import ItemCountSelect from "./ItemCountSelect";
import SortSelect from "./SortSelect";

export default function Filter() {
    return (
        <Stack spacing={2} direction='row'>
            <SortSelect></SortSelect>
            <ItemCountSelect></ItemCountSelect>
        </Stack>
    )
}