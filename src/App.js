import React, { useContext, useEffect } from "react";
import { 
    CssBaseline,
    Container } from "@mui/material";
import BookInfo from "./components/BookInfo";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Books from "./pages/Books";
import Register from "./pages/Register";
import EditProfile from "./pages/EditProfile";
import { AppContext } from "./context/AppContext";
import { Navigate } from "react-router-dom";
import Alert from "./components/Alert";
import ViewBook from "./pages/ViewBook";

const Logout = ()=>{
    const { setUser } = useContext(AppContext);
    
    setUser(null);
}

const App = ()=>{
    const { user } = useContext(AppContext);

    return (
        <>
        <CssBaseline />
        <NavBar />
        <Alert />
        <Container maxWidth="lg">
            <Routes>
                <Route path="/" element={<Index />} />
                {user && <>
                    <Route path="/editprofile" element={<EditProfile />} />
                    <Route path="/books" element={<Books userBooks={false} />} />
                    <Route path="/userbooks" element={<Books userBooks={true} />} />
                    <Route path="/book/:id" element={<ViewBook />} />
                </>}
                {!user && <>
                    <Route path="/register" element={<Register />} />
                </> }
                <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />} />
                <Route path="/logout" element={user ? <Logout /> : <Navigate to='/login' />} />
            </Routes>
        </Container>
        </>
    );
}

export default App;