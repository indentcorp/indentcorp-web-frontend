import React from 'react';
import styled from 'styled-components';
import IndentIs from './IndentIs';
import VreviewIs from './VreviewIs';
import PressBox from './PressBox';
import HistoryBox from './HistoryBox';

const Container = styled.div`
  width: 100%;
`;

const TopSecond = () => {
  return (
    <Container>
      <IndentIs />
      <VreviewIs />
      <PressBox />
      <HistoryBox />
    </Container>
  );
};

export default TopSecond;
