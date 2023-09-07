import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import MainPage from "pages/ui/MainPage";
import "./index.scss";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <MainPage />
        </ThemeProvider>
    );
}

export default App;
