import React from 'react';
import styled from 'styled-components';
import Highlighter from '../../Modules/Highlighter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: 'IBM Plex Mono', monospace;
  width: 785px;
  height: 406px;
  @media (max-width: 1440px) {
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  font-size: 17px;
  justify-content: flex-start;
  border-left: 1px solid #d8d8d8;
  /* align-content: space-between; */
  width: 650px;
  height: 120px;
`;
const TitleBox = styled.p`
  color: #8e8e8e;
  font-weight: 500;
  font-size: 29px;
`;

const Link = styled.a`
  top: -11px;
  font-size: 17px;
  color: #356efb;
  padding: 15px 35px;
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
        {/* <Highlighter
          highlightColor={'#FAF8F8'}
          highlightWidth={'15px'}
          highlightHeight={'127px'}
          margin={'0px 0px 0px 0px'}
          zIndex={-1}
        /> */}
        <LinkBox>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='notion://www.notion.so/indent/ffc3c0e523ff4c6894f5ceaaed53fdec'
          >
            Frontend Engineer →
          </Link>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='notion://www.notion.so/indent/5903e879540f4f09a890b7532d48b802'
          >
            Backend Engineer →
          </Link>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='notion://www.notion.so/indent/Recruit-3ca9a9ddb2274acb8f119ad972d49cce'
          >
            Fullstack Engineer →
          </Link>
        </LinkBox>
        {/* <Highlighter
          highlightColor={'#FAF8F8'}
          highlightWidth={'15px'}
          highlightHeight={'127px'}
          margin={'0px 0px 0px 0px'}
          zIndex={-1}
        /> */}
        <LinkBox>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='notion://www.notion.so/indent/Recruit-3ca9a9ddb2274acb8f119ad972d49cce'
          >
            Brand Marketer →
          </Link>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='notion://www.notion.so/indent/Recruit-3ca9a9ddb2274acb8f119ad972d49cce'
          >
            Administrative Assistant →
          </Link>
        </LinkBox>
      </TextBox>
    </Container>
  );
};

export default Recruit;
