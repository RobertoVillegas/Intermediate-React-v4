import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode, useState } from "react";
import ThemeContext from "./ThemeContext";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  const theme = useState("darkBlue");

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div
          className="m-0 p-0"
          style={{
            background:
              "url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)",
          }}
        >
          <BrowserRouter>
            <header className="mb-10 w-full bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 p-7 text-center">
              <Link to="/" className="text-6xl text-white hover:text-gray-200">
                Adopt Me!
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
