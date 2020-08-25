import React from 'react';
import styled from 'styled-components';

const DetailText = styled.span`
  position: relative;
  top: -1px;
  font-size: 13px;
  color: #454545;
  height: 49px;
  line-height: 30px;
  letter-spacing: -0.26px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-top: 10px; */
  /* padding-bottom: 1.5%; */
`;

const Container = styled.div`
  /* line-height: 1.7; */
  /* padding-left: 20px;
  padding-bottom: 80px; */
  padding: 0px 0px 80px 20px;
  font-family: 'IBM Plex Mono', monospace;
  /* width: 325px; */
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #efeded;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #454545;
  /* padding-left: 20px;
  padding-top: 25px; */
  padding: 25px 0px 25px 20px;
`;

const LinkBox = styled.a`
  font-size: 12px;
  text-decoration: underline;
  font-weight: 500;
  color: #a0a0a0;
  padding-top: 38px;
  /* padding-bottom: 25px; */
  width: 70px;
  a:hover {
    color: #a0a0a0;
  }
`;

// const DetailTitle = styled.span`
//   font-size: 12px;
//   font-weight: 500;
//   color: #8e8e8e;
//   padding-top: 23px;
//   padding-bottom: 10px;
// `;

const DetailDate = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
  font-size: 12px;
  color: #8e8e8e;
  /* padding-right: 20px; */
  width: 48px;
  height: 45px;
  line-height: 30px;
  letter-spacing: -0.36px;
  margin-right: 32px;
`;

// const DetailSentence = styled.div`
//   font-size: 13px;
//   padding-bottom: 30px;
// `;

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
