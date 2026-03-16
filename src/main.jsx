import "./index.css";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router";
import ReactDOM from "react-dom/client";
import Body from "./components/core/Body.jsx";
import NotFound from "./components/pages/NotFound.jsx";

const theme = createTheme({
  typography: {
    fontFamily: "var(--crimson)",
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
            <Route path="medicare-options" element={<Body />} />
            <Route path="*" element={NotFound} />
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
);
