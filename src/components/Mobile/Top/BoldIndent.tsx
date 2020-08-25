import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: -159px;
  font-size: 36px;
  color: #fffeaf;
  text-align: left;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  line-height: 52px;
  margin-left: 20px;
  /* margin-bottom: 80px; */
`;

const BoldIndent = () => {
  return (
    <Container>
      Bold
      <br />
      Move,
      <br />
      Bold
      <br />
      Intention.
    </Container>
  );
};

export default BoldIndent;
