import React from 'react';
import styled from 'styled-components';
import Highlighter from '../../Modules/Highlighter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* line-height: 1.7; */
  margin-top: 78px;
  background: #efeded;
  height: 408px;
  margin-left: 30px;
  font-family: 'IBM Plex Mono', monospace;
`;

const Numbering = styled.div`
  font-weight: 400;
  margin-right: 6px;
`;

const Title = styled.div`
  position: relative;
  width: 378px;
  height: 91px;
  font-weight: 300;
  font-size: 70px;
  color: #356efb;
  top: -45.5px;
  right: 16px;
  z-index: 2;
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
  margin-top: calc(50px - 45.5px);
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 17px;
  font-weight: 400;
  color: #356efb;
  /* padding-left: 90px; */
  /* top: -60px; */
`;
const Text = styled.div`
  position: relative;
  left: -6.5px;
  /* margin-left: 12px; */
  /* top: -50px; */
`;
const Links = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  margin-left: calc(15px + 83px);
  padding-bottom: calc(116px - 0.8em);
`;

const LinkText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  flex-direction: column;
`;

const LinkBox = styled.a<{ textColor: string }>`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 17px;
  font-weight: 500;
  color: ${({ textColor }) => textColor};
  text-decoration: underline;
  margin-right: 134px;
  /* line-height: 45px; */
  a:visited {
    color: ${({ textColor }) => textColor};
  }
`;

const LinkSentence = styled.p`
  padding-top: 10px;
  color: #8e8e8e;
  font-size: 13px;
  letter-spacing: -0.26px;
  text-decoration: none;
`;

const FirstSentence = styled.div`
  padding-bottom: 20px;
`;

const Sentence = styled.div`
  display: flex;
  padding-bottom: 20px;
  line-height: 30px;
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
              highlightHeight={'253px'}
              highlightWidth='15px'
              top={'0px'}
              // left={'18px'}
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
