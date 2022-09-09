import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Align, TextLevel } from "../../services/types";
import { useThemeContext } from "../../ThemeProvider";
import Text from "../atoms/Text";
import { GoBack, NavbarStyled, TitleWrapper } from "./NavBar.style";
import { ThemeControls } from "./ThemeControls";

interface NavbarProps {
  title: string;
}

export const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const { themeSettings } = useThemeContext();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <NavbarStyled theme={{ backgroundColor: themeSettings.header }}>
      {location.pathname !== "/" && (
        <GoBack
          onClick={() => navigate(-1)}
          theme={{ color: themeSettings.color }}
          className="material-symbols-outlined"
        >
          arrow_back_ios
        </GoBack>
      )}
      <TitleWrapper>
        <Text
          color={themeSettings.color}
          align={Align.center}
          level={TextLevel.H1}
        >
          {title}
        </Text>
      </TitleWrapper>
      <ThemeControls />
    </NavbarStyled>
  );
};
