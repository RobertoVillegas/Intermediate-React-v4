import { StrictMode, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  const theme = useState("darkBlue");

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
