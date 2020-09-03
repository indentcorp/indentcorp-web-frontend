import React from 'react';
import styled from 'styled-components';
import Highlighter from '../../Modules/Highlighter';
import Border from '../../Modules/Border';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: 'IBM Plex Mono', monospace;
  margin-top: 58.5px;
  height: 358px;
`;

const TextBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  font-size: 13px;
  justify-content: flex-start;
  align-content: space-between;
  margin-bottom: calc(82px - 9px);
`;
const TitleBox = styled.div`
  color: #8e8e8e;
  font-weight: 500;
  font-size: 20px;
  padding-bottom: 10px;
`;

const Link = styled.a`
  display: relative;
  top: -5px;
  font-size: 13px;
  font-weight: 400;
  color: #356efb;
  padding: 9px 0px;
  margin-left: -5px;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const Recruit = () => {
  return (
    <Container>
      <TitleBox>[+ recruit]</TitleBox>
      <TextBox>
        <LinkSection>
          <Border
            top={'8px'}
            right={'10px'}
            height={'178px'}
            margin={'0px 0px -62px 0px'}
          />
          <Highlighter
            top={'8px'}
            highlightColor={'#FAF8F8'}
            highlightWidth={'10px'}
            highlightHeight={'79px'}
            margin={'0px 0px 0px 0px'}
            zIndex={-1}
          />
          <LinkBox>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.notion.so/indent/Recruit-3ca9a9ddb2274acb8f119ad972d49cce'
            >
              Frontend Engineer →
            </Link>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.notion.so/indent/Recruit-3ca9a9ddb2274acb8f119ad972d49cce'
            >
              Backend Engineer →
            </Link>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.notion.so/indent/Recruit-3ca9a9ddb2274acb8f119ad972d49cce'
              style={{ paddingBottom: '45px' }}
            >
              Fullstack Engineer →
            </Link>
          </LinkBox>
        </LinkSection>
        <LinkSection>
          <Highlighter
            top={'7px'}
            highlightColor={'#FAF8F8'}
            highlightWidth={'10px'}
            highlightHeight={'49px'}
            margin={'0px 0px 0px 0px'}
            zIndex={-1}
          />
          <LinkBox>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.notion.so/indent/Recruit-3ca9a9ddb2274acb8f119ad972d49cce'
            >
              Brand Marketer →
            </Link>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.notion.so/indent/Recruit-3ca9a9ddb2274acb8f119ad972d49cce'
            >
              Administrative Assistant →
            </Link>
          </LinkBox>
        </LinkSection>
      </TextBox>
    </Container>
  );
};

export default Recruit;
