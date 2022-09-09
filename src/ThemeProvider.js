import { createContext, useContext, useMemo, useState } from "react";

const themes = {
  light: {
    background: "#fff",
    color: "#282c34",
    header: "#60A5FA",
    placeholderColor: "#9CA3A6",
  },
  dark: {
    background: "#4B5563",
    color: "#fff",
    header: "#1F2937",
    placeholderColor: "#9CA3A6",
  },
};

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isOn, setOn] = useState(false);
  const updateSettings = () => setOn(!isOn);

  const value = useMemo(() => {
    return {
      isOn,
      updateSettings,
    };
  }, [isOn]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const { isOn, updateSettings } = useContext(ThemeContext);
  return useMemo(() => {
    return {
      theme: isOn ? "Off" : "On",
      themeSettings: isOn ? themes.light : themes.dark,
      updateSettings,
    };
  }, [isOn, updateSettings]);
};

export default ThemeProvider;
