import React from 'react';
import styled from 'styled-components';
import Highlighter from '../../Modules/Highlighter/Highlighter';


const IndentIs = ({ receivingRef }: any) => {
  return (
    <Container>
      <Title>[indent corp.]</Title>
      <TextBox>
        <Highlighter
          highlightColor={'#FFFEAF'}
          highlightWidth={'10px'}
          highlightHeight={'102px'}
          top={'-19px'}
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
        <div ref={receivingRef} />
      </TextBox>
    </Container>
  );
};

export default IndentIs;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.7;
  margin-top: 80px;
  margin-left: 15px;
  margin-bottom: -48px;
  padding-left: 5px;
`;

const Numbering = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
`;

const Title = styled.span`
  width: 100%;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  font-size: 20px;
  color: #8e8e8e;
  margin: -5px;
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
  font-size: 13px;
  color: #454545;
`;
const FirstSentence = styled.div`
  line-height: 3;
`;
