import styled from "styled-components";
import pixelsToVW from "../utils/convertPixelsToVW";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Roboto;
    margin: 0;
  }
  `;

export const ThemeStyled = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  height: 100%;
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${pixelsToVW(32)};
  max-width: ${(props) => props.theme.size};
  width: 100%;
  height: 100%;
  flex: 1;
`;
