import React from "react";
import styled from "styled-components";
import { Press } from "../../../components/Contents/PressHistory";

const PressBox = () => {
  return (
    <Container className='press'>
      <Title>(Press)</Title>
      <TextBox>
        <DetailTitle>
          {Press.title} <DetailDate>{Press.date}</DetailDate>
        </DetailTitle>
        <DetailSentence>{Press.text}</DetailSentence>
        <LinkBox
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.notion.so/indent/Press-cae202ba33a346d092fb15c58408d03c"
        >
          더보기 →
        </LinkBox>
      </TextBox>
    </Container>
  );
};

export default PressBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 20px;
  /* padding-top: 95px; */
  padding-left: 15px;
  font-family: "IBM Plex Mono", monospace;
`;

const Title = styled.span`
  position: relative;
  font-weight: 400;
  font-size: 29px;
  color: #356efb;
  top: 10px;
  z-index: 2;
`;

const TextBox = styled.div`
  z-index: 1;
  display: block;
  background: #efeded;
  height: 165px;
  width: 618px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #454545;
  padding-left: 40px;
  /* padding-top: 20px; */
`;

const LinkBox = styled.a`
  color: #454545;
  font-size: 15px;
  text-decoration: underline;
  font-weight: 400;
  a:hover {
    color: #454545;
  }
`;

const DetailTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #8e8e8e;
  padding-top: 49px;
  padding-bottom: 10px;
`;

const DetailDate = styled.span`
  font-family: "IBM Plex Mono", monospace;
  font-weight: 400;
  font-size: 13px;
  color: #8e8e8e;
  margin-left: 15px;
`;

const DetailSentence = styled.div`
  font-size: 15px;
  padding-bottom: 15px;
`;
