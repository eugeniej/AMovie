import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 2rem;
  padding: 0.5rem;
`;

export const InputStyled = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.color};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.placeholderColor};
  }
`;

export const CloseIcon = styled.div`
  display: flex;
  color: ${(props) => props.theme.color};
`;
