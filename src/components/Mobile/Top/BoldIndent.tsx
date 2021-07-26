import React from 'react';
import styled from 'styled-components';


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

const Container = styled.div`
  position: relative;
  margin-top: -159px;
  font-size: 36px;
  color: #fffeaf;
  text-align: left;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  line-height: 52px;
  margin-left: 20px;
`;
