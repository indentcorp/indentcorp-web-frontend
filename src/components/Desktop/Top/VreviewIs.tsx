import React from 'react';
import styled from 'styled-components';
import Highlighter from '../../Modules/Highlighter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.7;
  margin-top: 78px;
  background: #efeded;
  height: 408px;
  margin-left: 30px;
  font-family: 'IBM Plex Mono', monospace;
  @media (max-width: 1200px) {
  }
`;

const Numbering = styled.span`
  font-weight: 400;
`;

const Title = styled.span`
  position: relative;
  font-weight: 300;
  font-size: 70px;
  color: #356efb;
  top: -61px;
  z-index: 2;
  @media (max-width: 1440px) {
  }
`;
const TextWrapper = styled.div`
  margin-left: 45px;
`;
const TextBox = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: left;

  /* height: 60.2vh; */
  /* width: 100%; */
  margin-top: -45px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 17px;
  font-weight: 400;
  color: #356efb;
  /* padding-left: 90px; */
  /* top: -60px; */
`;
const Text = styled.div`
  position: relative;
  margin-left: 12px;
  /* top: -50px; */
`;
const Links = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  margin-left: 113px;
`;

const LinkText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  flex-direction: column;
`;

const LinkBox = styled.a<{ textColor: string }>`
  color: ${({ textColor }) => textColor};
  text-decoration: underline;
  margin-right: 134px;
  a:visited {
    color: ${({ textColor }) => textColor};
  }
`;

const LinkSentence = styled.p`
  padding-top: 10px;
  color: #8e8e8e;
  font-size: 13px;
  text-decoration: none;
`;

const FirstSentence = styled.div`
  padding-bottom: 20px;
`;

const Sentence = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

const VreviewIs = () => {
  return (
    <>
      <Container>
        <TextWrapper>
          <Title>[vreview]</Title>
          {/* <Title>{'[indent corp.]'}</Title> */}
          <TextBox>
            <Highlighter
              highlightColor={'#FFFEAF'}
              highlightHeight={'253px'}
              highlightWidth='15px'
              top={'0px'}
              top1440={'50px'}
              left={'18px'}
              left1440={'15'}
              zIndex={-1}
            />
            <Text>
              <FirstSentence>인덴트코퍼레이션은</FirstSentence>
              <Sentence>
                <Numbering>1.</Numbering> 동영상리뷰가 가진 가능성과 전망을
                예측했습니다.
              </Sentence>
              <Sentence>
                <Numbering>2.</Numbering>
                그럼에도 현재 동영상리뷰가 커머스와 소비자
                <br />
                모두에게 어려운 이유와 그 본질에 대해 고민했습니다. <br />
                그리고 심플하지만 임팩트있게 문제를 해결했습니다.
              </Sentence>
              <Sentence>
                <Numbering>3.</Numbering> 브이리뷰는 챗봇을 통해 사람들이 후기를
                남기고
                <br /> 공유하는 리뷰 문화를 새롭게 써나가고 있습니다.
              </Sentence>
            </Text>
          </TextBox>
        </TextWrapper>
      </Container>
      <Links>
        <LinkText>
          <LinkBox
            textColor='#FF9A71'
            target='_blank'
            rel='noopener noreferrer'
            href='https://vreview.tv'
          >
            vreview ↗
          </LinkBox>
          <LinkSentence>동영상리뷰 플랫폼 서비스</LinkSentence>
        </LinkText>
        <LinkText>
          <LinkBox
            textColor='#4D5A7D'
            target='_blank'
            rel='noopener noreferrer'
            href='https://business.vreview.tv/ko/enterprise'
          >
            vreview-x ↗
          </LinkBox>
          <LinkSentence>통합 리뷰 플랫폼 서비스</LinkSentence>
        </LinkText>
      </Links>
    </>
  );
};

export default VreviewIs;
