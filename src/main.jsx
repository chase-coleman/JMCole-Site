import "./index.css";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router";
import ReactDOM from "react-dom/client";
import Body from "./components/core/Body.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import "../src/assets/fonts/fonts.css"

const theme = createTheme({
  palette: {
    mode: "light",
    background: { default: "#FFFFFF", paper: "#FFFFFF" },
    primary: { main: "#04446C" },
    secondary: { main: "#52691B" },
    text: { primary: "#0A1E2D", secondary: "#46617A" },
  },
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
});

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Body />} />
            <Route path="about" element={<Body />} />
            <Route path="turning-65" element={<Body />} />
            <Route path="contact" element={<Body />} />
            <Route path="medicare-faqs" element={<Body />} />
            <Route path="medicare-options" element={<Body />}>
              <Route path=":type" element={<Body />}/>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
);
