import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";

const BookInfo = ({ title, author, pages, summary, img }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={img ?? "https://images-na.ssl-images-amazon.com/images/I/51RjYy9XU9L.jpgs"}
                alt="Book Photo"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {author ?? "Minecraft Essentials"}
                </Typography>
                <Typography gutterBottom variant="body1">
                    by {title ?? "Mojang"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {summary ?? "You're alone in a mysterious new world, full of hidden dangers. You have only minutes to find food and shelter before darkness falls and the monsters come looking for you."}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Save</Button>
                <Button size="small">Something else, lol</Button>
            </CardActions>
        </Card>
    );
}

export default BookInfo;