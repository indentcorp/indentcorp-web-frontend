import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
  line-height: 1.7;
  padding-top: 73.5px;
  padding-left: 20px;
  padding-bottom: calc(71px - 33px);

  font-family: 'IBM Plex Mono', monospace;
`;

const Title = styled.span`
  position: relative;
  font-weight: 400;
  font-size: 20px;
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
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #454545;
  padding-left: 20px;
  padding-top: 20px;
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
  padding-top: 30px;
  padding-bottom: 10px;
`;

const DetailDate = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
  font-size: 12px;
  color: #8e8e8e;
  margin-left: 5px;
`;

const DetailSentence = styled.div`
  font-size: 13px;
  padding-bottom: 30px;
`;

const PressBox = () => {
  return (
    <Container>
      <Title>(Press)</Title>
      <TextBox>
        <DetailTitle>
          벤처스퀘어 <DetailDate>2019. 12.</DetailDate>
        </DetailTitle>
        <br />
        <DetailSentence>
          인덴트코퍼레이션, 퓨처플레이 등으로부터
          <br /> 12억 규모 투자 유치
        </DetailSentence>
        <br />
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
