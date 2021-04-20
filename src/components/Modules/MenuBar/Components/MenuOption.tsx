import React from 'react';
import styled from 'styled-components';
import { Titles } from '../MenuBar';

const Container = styled.div`
  display: flex;
  cursor: pointer;
`;

const Title = styled.div<{
  isSelected: boolean;
  fontSize?: string;
}>`
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 300)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '15px')};
  color: #454545;
  list-style: none;
  @media (max-width: 420px) {
    padding: 17px 30px;
  }
`;

interface Props {
  title: Titles;
  isSelected: boolean;
  switchMenuHandler: (title: Titles) => void;
  offsetTop: number;
  fontSize?: string;
}

const MenuOption = ({
  title,
  isSelected,
  switchMenuHandler,
  offsetTop,
  fontSize,
}: Props) => {
  const scrollHandler = (offsetTop: number) => {
    switchMenuHandler(title);
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <Container onClick={() => scrollHandler(offsetTop)}>
      <Title
        isSelected={isSelected}
        fontSize={fontSize}
        style={{ fontWeight: isSelected ? 700 : 300 }}
      >
        {title}
      </Title>
    </Container>
  );
};

export default MenuOption;
