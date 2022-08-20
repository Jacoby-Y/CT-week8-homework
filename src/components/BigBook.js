import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const BigBook = ({ book }) => {
    const { savedBooks, dispatchSavedBooks } = useContext(AppContext);
    const [view, setView ] = useState(false);
    
    if (!book) return (<></>);
    
    const { title, author, pages, summary, img, id } = book;

    const saveBook = ()=>{
        if (savedBooks.includes(id)) {
            // console.log(savedBooks);
            // savedBooks.splice(savedBooks.indexOf(id), 1);
            // console.log(savedBooks);
            // console.log(savedBooks);
            dispatchSavedBooks("REMOVE", id);
            // console.log(savedBooks);
        } else {
            dispatchSavedBooks("ADD", id);
        }
    }

    if (view) return (<Navigate to={`/book/${id}`} />)

    return (
        <Card sx={{ maxWidth: "80%", height: "100%", mb: 2.5, border: "3px solid #1976D2", mx: "auto", }} className="book-card">
            <CardMedia
                component="img"
                height="100%"
                sx={{maxHeight: "80vh"}}
                image={img ?? "https://images-na.ssl-images-amazon.com/images/I/51RjYy9XU9L.jpg"}
                alt="Book Photo"
                loading="lazy"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {title ?? "Minecraft Essentials"}
                </Typography>
                <Typography gutterBottom variant="body1">
                    by {author ?? "Mojang"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {summary ?? "You're alone in a mysterious new world, full of hidden dangers. You have only minutes to find food and shelter before darkness falls and the monsters come looking for you."}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{mt: 2}}>
                    Pages: {pages ?? 82}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={saveBook}>
                    {savedBooks.includes(id)
                        ? <span style={{color: "red"}}>Remove</span>
                        : <span>Save</span>
                    }
                </Button>
                <Button size="small" onClick={()=>{ setView(true) }}>View</Button>
            </CardActions>
        </Card>
    );
}

export default BigBook;