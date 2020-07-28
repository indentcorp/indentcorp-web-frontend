import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.7;
  padding-top: 95px;
  padding-left: 15px;
  font-family: 'IBM Plex Mono', monospace;
`;

const Title = styled.span`
  position: relative;
  font-weight: 400;
  font-size: 29px;
  color: #356efb;
  top: 0.8em;
  z-index: 2;
`;

const TextBox = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #efeded;
  height: 165px;
  width: 618px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #454545;
  padding-left: 40px;
  padding-top: 20px;
`;

const LinkBox = styled.a`
  color: #454545;
  font-size: 15px;
  padding-top: 15px;
  text-decoration: underline;
  font-weight: 500;
  a:hover {
    color: #454545;
  }
`;

const DetailTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #8e8e8e;
  padding-bottom: 1.5%;
`;

const DetailDate = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
  font-size: 13px;
  color: #8e8e8e;
  margin-left: 5px;
`;

const DetailSentence = styled.div`
  display: flex;
  font-size: 15px;
`;

const PressBox = () => {
  return (
    <Container>
      <Title>(Press)</Title>
      <TextBox>
        <DetailTitle>
          벤처스퀘어 <DetailDate>2019. 12.</DetailDate>
        </DetailTitle>
        <DetailSentence>
          인덴트코퍼레이션, 퓨처플레이 등으로부터 12억 규모 투자 유치
        </DetailSentence>
        <LinkBox
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.notion.so/indent/Press-cae202ba33a346d092fb15c58408d03c'
        >
          더보기 →
        </LinkBox>
      </TextBox>
    </Container>
  );
};

export default PressBox;
