import { createContext } from "react";

//we initialize the context with a hook , in which the updater is an empty function
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
