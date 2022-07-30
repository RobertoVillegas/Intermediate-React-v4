import { createContext } from "react";

// Mimic a useState hook in context
// const [theme, setTheme] = useState('darkBlue');

const ThemeContext = createContext<[string, (theme: string) => void]>([
  "green",
  () => {},
]);

export default ThemeContext;
