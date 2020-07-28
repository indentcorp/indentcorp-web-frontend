import React from 'react';
import styled from 'styled-components';
import Border from '../../Modules/Border';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: 'IBM Plex Mono', monospace;
  padding-top: 60.5px;
  height: 358px;
  /* width: 785px;
  
  @media (max-width: 1440px) {
  } */
`;

const TextBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  font-size: 13px;
  justify-content: flex-start;
  align-content: space-between;
  /* width: 650px; */
  /* height: 120px; */
  border-left: 1px solid #d8d8d8;
`;
const TitleBox = styled.p`
  color: #8e8e8e;
  font-weight: 500;
  font-size: 20px;
`;

const LinkBox = styled.a`
  display: relative;
  top: -5px;
  font-size: 13px;
  font-weight: 300;
  color: #356efb;
  padding: 10px 35px;
`;

const Recruit = () => {
  return (
    <Container>
      <TitleBox>[+ recruit]</TitleBox>
      <TextBox>
        <LinkBox
          target='_blank'
          rel='noopener noreferrer'
          href='notion://www.notion.so/indent/ffc3c0e523ff4c6894f5ceaaed53fdec'
        >
          Frontend Engineer →
        </LinkBox>
        <LinkBox
          target='_blank'
          rel='noopener noreferrer'
          href='notion://www.notion.so/indent/5903e879540f4f09a890b7532d48b802'
        >
          Backend Engineer →
        </LinkBox>
        <LinkBox
          target='_blank'
          rel='noopener noreferrer'
          href='notion://www.notion.so/indent/Recruit-3ca9a9ddb2274acb8f119ad972d49cce'
          style={{ paddingBottom: '45px' }}
        >
          Fullstack Engineer →
        </LinkBox>
        <LinkBox
          target='_blank'
          rel='noopener noreferrer'
          href='notion://www.notion.so/indent/Recruit-3ca9a9ddb2274acb8f119ad972d49cce'
        >
          Brand Marketer →
        </LinkBox>
        <LinkBox
          target='_blank'
          rel='noopener noreferrer'
          href='notion://www.notion.so/indent/Recruit-3ca9a9ddb2274acb8f119ad972d49cce'
        >
          Administrative Assistant →
        </LinkBox>
      </TextBox>
    </Container>
  );
};

export default Recruit;
