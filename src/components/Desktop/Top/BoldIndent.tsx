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
  margin-top: -256px;
  /* margin-left: 680px; */
  /* z-index: -10; */
  width: 420px;
  height: 376px;
  font-size: 70px;
  color: #fffeaf;
  text-align: left;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  line-height: 90px;
  margin-left: 100px;
  margin-bottom: 152px;
`;