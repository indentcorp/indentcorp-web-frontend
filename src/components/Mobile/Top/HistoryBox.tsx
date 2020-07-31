import React from 'react';
import styled from 'styled-components';

const DetailText = styled.span`
  position: relative;
  top: -2px;
  font-size: 13px;
  color: #454545;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 1.5%;
`;

const Container = styled.div`
  line-height: 1.7;
  padding-left: 20px;
  padding-bottom: 82.5px;
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
  padding-top: 56px;
`;

const LinkBox = styled.a`
  font-size: 12px;
  text-decoration: underline;
  font-weight: 500;
  color: #a0a0a0;
  padding-top: 22px;
  padding-bottom: 25px;
  width: 70px;
  a:hover {
    color: #a0a0a0;
  }
`;

const DetailTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #8e8e8e;
  padding-top: 23px;
  padding-bottom: 10px;
`;

const DetailDate = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
  font-size: 12px;
  color: #8e8e8e;
  padding-right: 20px;
`;

const DetailSentence = styled.div`
  font-size: 13px;
  padding-bottom: 30px;
`;

const HistoryBox = () => {
  return (
    <Container>
      <Title>(History)</Title>
      <TextBox>
        <DetailContainer>
          <DetailDate>2020.02</DetailDate>
          <DetailText>TIPS 창업성장기술개발사업 선정</DetailText>
        </DetailContainer>
        <DetailContainer>
          <DetailDate>2019.12</DetailDate>
          <DetailText>12억 시드 투자 유치</DetailText>
        </DetailContainer>
        <LinkBox
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.notion.so/indent/History-866409d11b194eaba4ae872235339b9c'
        >
          더보기 →
        </LinkBox>
      </TextBox>
    </Container>
  );
};

export default HistoryBox;
