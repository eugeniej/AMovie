import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Navbar } from "./components/molecules/NavBar";
import { MovieDetails } from "./components/pages/MovieDetails";
import { GlobalStyles, ThemeStyled } from "./components/Global.style";
import { useThemeContext } from "./ThemeProvider";

function App() {
  const { themeSettings } = useThemeContext();

  return (
    <ThemeStyled theme={{ backgroundColor: themeSettings.background }}>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar title="Movies" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeStyled>
  );
}

export default App;
