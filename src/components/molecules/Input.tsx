import React from "react";
import { useThemeContext } from "../../ThemeProvider";
import { CloseIcon, InputStyled, InputWrapper } from "./Input.style";

interface InputProps {
  value: string;
  setValue: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ value, setValue }) => {
  const { themeSettings } = useThemeContext();

  return (
    <InputWrapper>
      <InputStyled
        type="text"
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        placeholder="Search for a movie"
        theme={{ color: themeSettings.color }}
      />
      <CloseIcon
        theme={{ color: themeSettings.color }}
        className="material-symbols-outlined"
        onClick={() => setValue("")}
      >
        cancel
      </CloseIcon>
    </InputWrapper>
  );
};
