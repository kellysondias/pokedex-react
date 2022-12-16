import styled from "styled-components";

export const SwitcherButton = styled.div`
  display: flex;

  img {
    cursor: pointer;
    max-width: 76px;
  }

  @media (max-width: 620px) {
    align-self: flex-end;
    margin-right: 15px;

    img {
      max-width: 61px;
    }
  }

  @media (max-width: 375px) {
    img {
      max-width: 58px;
    }
  }
`;