import { Grid, Box } from "@mui/material";
import { TagProps } from "./TagCard";
import TagCard from "./TagCard";

export default function Tags({ fetchedData }: { fetchedData: TagProps[] }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container my={4} rowSpacing={2} columnSpacing={1}>
                {fetchedData.map((el, i) => (<Grid item key={i}>
                    <TagCard tagName={el.tagName} posts={el.posts} />
                </Grid>))}
            </Grid>
        </Box>
    );
}