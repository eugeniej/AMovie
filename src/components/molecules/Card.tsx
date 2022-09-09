import React, { useState } from "react";
import { Align, Movie, TextLevel } from "../../services/types";
import { useThemeContext } from "../../ThemeProvider";
import Text from "../atoms/Text";
import { CardWrapper, Image, ImageWrapper } from "./Card.style";

interface CardProps {
  item: Movie;
  handleClick?: () => void;
  urlImage: string;
}
export const Card: React.FC<CardProps> = ({ item, handleClick, urlImage }) => {
  const [isHovering, setIsHovering] = useState(false);
  const { themeSettings } = useThemeContext();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <CardWrapper onClick={handleClick}>
      <ImageWrapper onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Image src={urlImage} alt=""></Image>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            padding: "0.5rem",
            zIndex: 1,
          }}
        >
          {isHovering && (
            <Text
              align={Align.center}
              color={themeSettings.color}
              level={TextLevel.p}
            >
              {item.title}
            </Text>
          )}
        </div>
      </ImageWrapper>
    </CardWrapper>
  );
};
