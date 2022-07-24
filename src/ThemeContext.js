import { createContext } from "react";

// Mimic a useState hook in context
// const [theme, setTheme] = useState('darkBlue');

const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
