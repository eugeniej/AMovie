import React from "react";
import { useThemeContext } from "../../ThemeProvider";
import { ThemeControlsWrapper } from "./ThemeControls.style";

export const ThemeControls: React.FC = () => {
  const { theme, updateSettings, themeSettings } = useThemeContext();
  return (
    <div onClick={updateSettings}>
      {theme === "Off" ? (
        <ThemeControlsWrapper
          theme={{ color: themeSettings.color }}
          className="material-symbols-outlined"
        >
          toggle_off
        </ThemeControlsWrapper>
      ) : (
        <ThemeControlsWrapper
          theme={{ color: themeSettings.color }}
          className="material-symbols-outlined"
        >
          toggle_on
        </ThemeControlsWrapper>
      )}
    </div>
  );
};
