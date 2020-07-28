import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: -111px;
  margin-right: 12px;
`;

const TextBox = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  font-size: 47px;
  text-align: right;
  color: #afffd4;
  line-height: 66px;
`;

const WeWork = () => {
  return (
    <Container>
      <TextBox>
        We
        <br />
        Work
        <br />
        anywhere
        <br />
        we want
      </TextBox>
    </Container>
  );
};

export default WeWork;
