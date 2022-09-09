import styled from "styled-components";

export const NavbarStyled = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.backgroundColor};
  color: black;
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const GoBack = styled.span`
  color: ${(props) => props.theme.color};
`;
