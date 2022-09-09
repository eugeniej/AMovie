import styled from "styled-components";

export const TextStyled = styled.p`
  color: ${(props) => props.theme.color};
  font-size: ${(props) =>
    props.theme.level === "h1"
      ? "3rem"
      : props.theme.level === "h2"
      ? "1.5rem"
      : "1rem"};
  font-weight: ${(props) =>
    props.theme.level === "h1"
      ? "600"
      : props.theme.level === "h2"
      ? "400"
      : "300"};
  align-self: ${(props) => props.theme.alignSelf};
  font-family: "Roboto", sans-serif;
`;
