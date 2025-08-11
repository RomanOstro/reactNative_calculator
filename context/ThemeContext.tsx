import { createContext, ReactNode, useContext, useState } from "react";

interface IThemeProviderState {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

export const useThemeContext = () => useContext(ThemeContext);

interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
