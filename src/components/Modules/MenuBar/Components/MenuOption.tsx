import React from 'react';
import styled from 'styled-components';
import { Titles } from '../index';

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
    console.log('offsetTop', offsetTop);
    switchMenuHandler(title);
    // window.scrollTo(0, 1000);
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
    // SmoothVerticalScrolling(Element, 100, offsetTop);
    // console.log('scrollHandler fired');
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

function SmoothVerticalScrolling(e, time, where) {
  var eTop = e.getBoundingClientRect().top;
  var eAmt = eTop / 100;
  var curTime = 0;
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, where);
    curTime += time / 100;
  }
}

function SVS_B(eAmt, where) {
  if (where === 'center' || where === '') window.scrollBy(0, eAmt / 2);
  if (where === 'top') window.scrollBy(0, eAmt);
}