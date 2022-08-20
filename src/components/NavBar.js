import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Book from "@mui/icons-material/Book";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Item = ({ path, text, onClick })=>{
    return (
        <Link to={path} style={{textDecoration: "none", color: "white"}}>
            <MenuItem onClick={onClick} sx={{ml: 1}}>
                <Typography textAlign="center">
                    {text}
                </Typography>
            </MenuItem>
        </Link>
    );
}

const NavBar = ()=>{
    const { user } = useContext(AppContext);

    return (
        <AppBar position="relative" style={{marginBottom: "3rem"}}>
            <Toolbar>
                <Book />
                <Typography variant="h6">
                    Book Store
                </Typography>
                <Item path="/" text="Home" />
                {user && <>
                    <Item path="/editprofile" text="Edit Profile" />
                    <Item path="/books" text="Book Browser" />
                    <Item path="/userbooks" text="Your Books" />
                    <div style={{marginLeft: "auto"}}><Item path="/logout" text="Logout" /></div>
                </>}
                {!user && <>
                    <Item path="/login" text="Login" />
                    <Item path="/register" text="Register" />
                </> }
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;