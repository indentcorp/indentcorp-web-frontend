import React from 'react';
import styled from 'styled-components';
import Highlighter from '../../Modules/Highlighter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.7;
  margin-top: 102px;
  margin-left: 20px;
  margin-bottom: -48px;
  padding-left: 15px;
  @media (max-width: 1650px) {
    /* margin-left: 45vw; */
  }
`;

const Numbering = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
`;

const Title = styled.span`
  width: 100%;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  font-size: 29px;
  color: #8e8e8e;
  margin: -8px;
  /* position: absolute; */
  padding-bottom: 40px;
`;

const TextBox = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
`;
const Text = styled.div`
  position: relative;
  margin-left: -7px;
  top: -50px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 17px;
  color: #454545;
`;
const FirstSentence = styled.div`
  line-height: 3;
`;

const IndentIs = () => {
  return (
    <Container>
      <Title>[indent corp.]</Title>
      <TextBox>
        <Highlighter
          highlightColor={'#FFFEAF'}
          highlightWidth={'15px'}
          highlightHeight={'133px'}
          top={'-12px'}
          zIndex={-1}
        />
        <Text>
          <br />
          <FirstSentence>인덴트코퍼레이션은</FirstSentence>
          <Numbering>1.</Numbering> 미래를 예측하고
          <br />
          <Numbering>2.</Numbering> 현재를 활용하여
          <br />
          <Numbering>3.</Numbering> 시장을 혁신합니다.
          <br />
        </Text>
      </TextBox>
    </Container>
  );
};

export default IndentIs;
