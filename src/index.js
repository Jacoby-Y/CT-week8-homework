import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

///// I can't get themes to work
// import { createTheme, colors, ThemeProvider } from "@mui/material";
// const theme = createTheme({
//     palette: {
//         secondary: {
//             main: colors.orange[500],
//         },
//     },
// });

ReactDOM.render(
    (
        // <ThemeProvider theme={theme}>
            <App />
        // </ThemeProvider>
    ),
    document.getElementById("root")
)