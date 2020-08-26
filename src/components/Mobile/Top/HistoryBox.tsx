import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0px 0px 80px 20px;
  font-family: 'IBM Plex Mono', monospace;
`;

const DetailText = styled.span`
  position: relative;
  top: -1px;
  font-size: 13px;
  color: #454545;
  line-height: 30px;
  letter-spacing: -0.26px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 30px;
  @media (max-width: 335px) {
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 55px;
  margin-bottom: 23px;
  position: relative;
  top: -5px;
`;

const Title = styled.span`
  position: relative;
  font-weight: 400;
  font-size: 20px;
  color: #356efb;
  top: 10px;
  z-index: 2;
`;

const TextBox = styled.div`
  height: 180px;
  z-index: 1;
  display: block;
  background: #efeded;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #454545;
  padding: 55px 0px 25px 20px;
`;

const LinkBox = styled.a`
  font-size: 12px;
  text-decoration: underline;
  font-weight: 500;
  color: #a0a0a0;
  width: 70px;
  a:hover {
    color: #a0a0a0;
  }
`;

const DetailDate = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
  font-size: 12px;
  color: #8e8e8e;
  width: 48px;
  height: 45px;
  line-height: 30px;
  letter-spacing: -0.36px;
  margin-right: 20px;
`;

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

export default HistoryBox;
