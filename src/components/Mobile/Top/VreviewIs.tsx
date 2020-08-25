import React from 'react';
import styled from 'styled-components';
import Highlighter from '../../Modules/Highlighter';

const Container = styled.div`
  line-height: 1.3;
  margin-top: 67px;
  background: #efeded;
  /* height: 500px; */
  /* width: 335px; */
  margin-left: 20px;
  font-family: 'IBM Plex Mono', monospace;
  height: 372px;
`;

const Numbering = styled.div`
  font-weight: 400;
  width: 15px;
`;

const Title = styled.span`
  position: relative;
  font-weight: 300;
  font-size: 37px;
  color: #356efb;
  bottom: 24px;
  margin-bottom: -61px;
  z-index: 2;
`;
const TextWrapper = styled.div`
  /* padding-bottom: 23px; */
  padding-left: 20px;
  height: 372px;
`;
const TextBox = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: left;
  /* margin-top: 6px; */
  margin-bottom: 15px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #356efb;
`;
const Text = styled.div`
  position: relative;
`;
const Links = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-left: 27px;
  padding-left: 28px;
  /* margin-top: 30px; */
`;

const LinkBox = styled.a<{ textColor: string }>`
  color: ${({ textColor }) => textColor};
  margin-top: 25px;
  margin-bottom: 5px;
  text-decoration: underline;
  a:visited {
    color: ${({ textColor }) => textColor};
  }
`;

const LinkText = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 11px;
  color: #8e8e8e;
  padding-top: 6px;
`;

const FirstSentence = styled.div`
  padding-bottom: 15px;
  /* font-weight: 300; */
`;

const Sentence = styled.div`
  display: flex;
  padding-bottom: 15px;
  line-height: 22px;
`;

const VreviewIs = () => {
  return (
    <>
      <Container>
        <TextWrapper>
          <Title>[vreview]</Title>
          <TextBox>
            <Highlighter
              highlightColor={'#FFFEAF'}
              highlightHeight={'285px'}
              highlightWidth='10px'
              top={'0px'}
              left={'5px'}
              zIndex={-1}
            />
            <Text>
              <FirstSentence>인덴트코퍼레이션은</FirstSentence>
              <Sentence>
                <Numbering>1.</Numbering> 동영상리뷰가 가진 가능성과
                <br />
                전망을 예측했습니다.
              </Sentence>
              <Sentence>
                <Numbering>2.</Numbering>
                그럼에도 현재 동영상리뷰가
                <br />
                커머스와 소비자 모두에게
                <br />
                어려운 이유와 그 본질에 대해
                <br />
                고민했습니다. 그리고 심플하지만
                <br />
                임팩트있게 문제를 해결했습니다.
              </Sentence>
              <Sentence>
                <Numbering>3.</Numbering> 브이리뷰는 챗봇을 통해 사람들이
                <br />
                후기를 남기고 공유하는 리뷰
                <br />
                문화를 새롭게 써나가고 있습니다.
              </Sentence>
            </Text>
          </TextBox>
        </TextWrapper>
      </Container>
      <Links>
        <LinkBox
          textColor='#FF9A71'
          target='_blank'
          rel='noopener noreferrer'
          href='https://vreview.tv'
        >
          vreview ↗
        </LinkBox>
        <LinkText>동영상리뷰 플랫폼 서비스</LinkText>
        <LinkBox
          textColor='#4D5A7D'
          target='_blank'
          rel='noopener noreferrer'
          href='https://business.vreview.tv/ko/enterprise'
        >
          vreview-x ↗
        </LinkBox>
        <LinkText>통합 리뷰 플랫폼 서비스</LinkText>
      </Links>
    </>
  );
};

export default VreviewIs;
