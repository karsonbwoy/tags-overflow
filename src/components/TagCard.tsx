import { Box, Card, CardContent, Typography } from "@mui/material";

export type TagProps = {
    tagName: string,
    posts: number
}
export default function TagCard({ tagName, posts }: TagProps) {
    return (
        <Box width='200px' height='100%'>
            <Card sx={{ height: '100%' }}>
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