import React from 'react';
import styled from 'styled-components';


const PressBox = () => {
  return (
    <Container>
      <Title>(Press)</Title>
      <TextBox>
        <DetailTitle>
          벤처스퀘어 <DetailDate>2020. 05.</DetailDate>
        </DetailTitle>
        <DetailSentence>구매 전환율 끌어올린 '동영상 후기'의 힘</DetailSentence>
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

const Container = styled.div`
  /* display: block; */
  /* line-height: 0px; */
  margin-top: 65.5px;
  /* padding-top: 20px; */
  padding-left: 20px;
  height: 180px;
  margin-bottom: 47.5px;
  /* width: 325px; */
  height: 180px;
  font-family: 'IBM Plex Mono', monospace;
`;

const Title = styled.span`
  position: relative;
  font-weight: 400;
  font-size: 20px;
  color: #356efb;
  top: 10px;
  z-index: 2;
  /* margin-top: 45px; */
`;

const TextBox = styled.div`
  /* z-index: 1; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  background: #efeded;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #454545;
  padding: 45px 0px 28px 20px;
  /* padding-left: 20px; */
  height: 100%;
  /* width: 325px; */
`;

const LinkBox = styled.a`
  font-size: 12px;
  text-decoration: underline;
  font-weight: 500;
  color: #a0a0a0;
  padding-bottom: 28px;
  width: 70px;
  a:hover {
    color: #a0a0a0;
  }
`;

const DetailTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #8e8e8e;
  /* padding-top: 23px; */
  padding-bottom: 10px;
`;

const DetailDate = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
  font-size: 12px;
  color: #8e8e8e;
  margin-left: 15px;
`;

const DetailSentence = styled.div`
  font-size: 13px;
  line-height: 1.7;
  margin: 10px 0px 20px 0px;
  width: 250px;
  height: 41px;
  /* padding-bottom: 20px; */
`;
