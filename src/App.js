import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode } from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
