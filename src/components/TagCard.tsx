import { Box, Card, CardContent, Typography } from "@mui/material";

type TagProps = {
    tagName: string,
    posts: number
}
export default function TagCard({ tagName, posts }: TagProps) {
    return (
        <Box width='150px'>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {tagName}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Posts: {posts}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}