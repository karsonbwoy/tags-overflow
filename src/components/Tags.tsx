import { Grid } from "@mui/material";
import { TagProps } from "./TagCard";
import TagCard from "./TagCard";

export default function Tags({ fetchedData }: { fetchedData: TagProps[] }) {
    return (
        <Grid container my={4} rowSpacing={2} columnSpacing={1}>
            {fetchedData.map(el => (<Grid item>
                <TagCard tagName={el.tagName} posts={el.posts} />
            </Grid>))}
        </Grid>
    );
}