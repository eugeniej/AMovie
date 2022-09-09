import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  position: "relative";
  margin: 0.8rem;
`;

export const Image = styled.img`
  max-width: 200px;
  max-height: 300px;
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
  display: "flex";
  position: "relative";
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  &&:hover:before {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    transition: height 0.5s ease-out;
    background: linear-gradient(to bottom, transparent 0%, black 100%);
  }
`;
