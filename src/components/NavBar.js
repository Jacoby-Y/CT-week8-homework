import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Book from "@mui/icons-material/Book";

const NavBar = ()=>{
    return (
        <AppBar position="relative" style={{marginBottom: "3rem"}}>
            <Toolbar>
                <Book />
                <Typography variant="h6">
                    Book Store
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;