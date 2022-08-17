import React from "react";
import { 
    // Typography,
    // AppBar,
    // Card,
    // CardAction,
    // CardContent,
    // CardMedia,
    // Grid,
    // Toolbar,
    CssBaseline,
    Container } from "@mui/material";
import BookInfo from "./components/BookInfo";
import NavBar from "./components/NavBar";
import LoginForm from "./forms/LoginForm";
import Register from "./forms/RegisterForm";

const App = ()=>{
    return (
        <>
        <CssBaseline />
        <NavBar />
        <main style={{paddingBottom: "5rem"}}>
            <div>
                <Container maxWidth="sm">
                    {/* <BookInfo /> */}
                    {/* <LoginForm /> */}
                    {/* <Register /> */}
                    <Register editting={true} />
                </Container>
            </div>
        </main>
        </>
    );
}

export default App;