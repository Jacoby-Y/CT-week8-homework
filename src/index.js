import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext"

///// I can't get themes to work
// import { createTheme, colors, ThemeProvider } from "@mui/material";
// const theme = createTheme({
//     palette: {
//         secondary: {
//             main: colors.orange[500],
//         },
//     },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AppContextProvider>
    </React.StrictMode>
);