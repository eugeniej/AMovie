import styled from "styled-components";

export const MovieDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
`;

export const MovieInformations = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 768px) {
    padding: 0.5rem 4rem;
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
