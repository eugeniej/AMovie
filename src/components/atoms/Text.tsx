import React from "react";
import { Align, TextLevel } from "../../services/types";
import { TextStyled } from "./Text.style";

interface TextProps {
  children: React.ReactNode;
  align?: Align;
  color?: string;
  level?: TextLevel;
}

const Text: React.FC<TextProps> = ({
  level,
  color,
  children = null,
  align,
}) => {
  return (
    <TextStyled theme={{ color: color, level: level, align: align }}>
      {children}
    </TextStyled>
  );
};

export default Text;
