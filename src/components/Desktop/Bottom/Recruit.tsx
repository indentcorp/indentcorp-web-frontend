import React from 'react';
import styled from 'styled-components';
import Highlighter from '../../Modules/Highlighter';
import Border from '../../Modules/Border';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  font-family: 'IBM Plex Mono', monospace;
  width: 919px;
  height: 406px;
  /* margin-bottom: -10px; */
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  font-size: 17px;
  justify-content: flex-start;
  /* border-left: 1px solid #d8d8d8; */
  /* align-content: space-between; */
  /* width: 650px; */
  /* height: 120px; */
`;
const TitleBox = styled.div`
  color: #8e8e8e;
  font-weight: 500;
  font-size: 29px;
  padding: 90.5px 693.5px 60px 0px;
  white-space: pre;
`;

const Link = styled.a`
  top: -11px;
  font-size: 17px;
  color: #356efb;
  padding: 17px 0px 17px 0px;
`;

const VerticalDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 124px;
  position: relative;
  margin-right: 85px;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -15px;
`;

const Recruit = () => {
  return (
    <Container>
      <TitleBox>[+ recruit]</TitleBox>
      <TextBox>
        <VerticalDiv>
          <Border
            margin={'0px 0px 0px 0px'}
            height={'127px'}
            padding={'0px 7px 0px 0px'}
          />
          <Highlighter
            highlightColor={'#FAF8F8'}
            highlightWidth={'15px'}
            highlightHeight={'127px'}
            margin={'0px 0px 0px 0px'}
            left={'7px'}
            zIndex={-1}
          />
          <LinkBox>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.notion.so/indent/18bdf53323db4a78b5817815f1ecba41'
            >
              Frontend Engineer →
            </Link>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.notion.so/indent/18bdf53323db4a78b5817815f1ecba41'
            >
              Backend Engineer →
            </Link>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.notion.so/indent/18bdf53323db4a78b5817815f1ecba41'
            >
              Fullstack Engineer →
            </Link>
          </LinkBox>
        </VerticalDiv>
        <VerticalDiv>
          <Highlighter
            highlightColor={'#FAF8F8'}
            highlightWidth={'15px'}
            highlightHeight={'76px'}
            margin={'0px 0px 0px 0px'}
            // left={'7px'}
            zIndex={-1}
          />
          <LinkBox style={{ width: '320px', left: '-7px' }}>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.notion.so/indent/18bdf53323db4a78b5817815f1ecba41'
            >
              Brand Marketer →
            </Link>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.notion.so/indent/18bdf53323db4a78b5817815f1ecba41'
            >
              Administrative Assistant →
            </Link>
          </LinkBox>
        </VerticalDiv>
      </TextBox>
    </Container>
  );
};

export default Recruit;
