import React from 'react';
import styled from 'styled-components';


const HistoryBox = () => {
  return (
    <Container>
      <Title>(History)</Title>
      <TextBox>
        <DetailContainer>
          <DetailDate>2020.05 2020.04</DetailDate>
          <DetailText>
            Facebook Accelerator 선정 <br />
            브이리뷰 위젯 MAU 3,000만 돌파
          </DetailText>
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

const Container = styled.div`
  padding-top: 42px;
  padding-left: 15px;
  margin-left: 15px;
  margin-bottom: 90px;
  font-family: 'IBM Plex Mono', monospace;
`;

const Title = styled.span`
  position: relative;
  font-weight: 400;
  font-size: 29px;
  color: #356efb;
  top: 16px;
  z-index: 2;
  line-height: 29px;
`;

const TextBox = styled.div`
  z-index: 1;
  background: #efeded;
  height: 165px;
  width: 618px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  padding-left: 40px;
`;

const LinkBox = styled.a`
  color: #454545;
  font-size: 15px;
  font-weight: 400;
  text-decoration: underline;
  a:hover {
    color: #454545;
  }
`;

const DetailText = styled.div`
  height: 63px;
  width: 431px;
  position: relative;
  top: -3px;
  font-size: 15px;
  color: #454545;
  line-height: 30px;
`;

const DetailDate = styled.div`
  display: flex;
  font-family: 'IBM Plex Mono', monospace;
  flex-direction: column;
  height: 58px;
  width: 100px;
  font-size: 13px;
  padding-right: 38px;
  margin-bottom: 15px;
  color: #808080;
  position: relative;
  top: -3px;
  line-height: 30px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 34px;
  padding-top: 46.5px;
`;

export default HistoryBox;
