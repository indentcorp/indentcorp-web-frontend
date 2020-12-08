import React from 'react';
import styled from 'styled-components';


const WeWork = () => {
  return (
    <Container>
      <TextBox>
        We
        <br />
        work
        <br />
        anywhere
        <br />
        we want
      </TextBox>
    </Container>
  );
};

export default WeWork;

const Container = styled.div`
  margin-bottom: -376px;
  position: relative;
  top: -35px;
  z-index: -1;
`;

const TextBox = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  font-size: 70px;
  text-align: right;
  line-height: 95px;
  color: #afffd4;
  /* float: right; */
`;
