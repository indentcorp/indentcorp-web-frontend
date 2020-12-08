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
  margin-top: -135px;
  margin-right: 12px;
`;

const TextBox = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  font-size: 36px;
  text-align: right;
  color: #afffd4;
  line-height: 52px;
`;
