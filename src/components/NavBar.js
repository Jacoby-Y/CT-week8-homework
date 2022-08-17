import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Book from "@mui/icons-material/Book";
import MenuItem from "@mui/material/MenuItem";

const Item = ({ text, onClick })=>{
    return (
        <MenuItem onClick={onClick} sx={{ml: 1}}>
            <Typography textAlign="center">{text}</Typography>
        </MenuItem>
    );
}

const NavBar = ()=>{
    return (
        <AppBar position="relative" style={{marginBottom: "3rem"}}>
            <Toolbar>
                <Book />
                <Typography variant="h6">
                    Book Store
                </Typography>
                <Item text="Login" />
                <Item text="Register" />
                <Item text="Edit Profile" />
                <Item text="Something else" />
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;