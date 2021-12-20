import React from 'react';
import styled from 'styled-components';
import Highlighter from '../../Modules/Highlighter/Highlighter';
import Border from '../../Modules/Border/Border';


const Recruit = () => {
  return (
    <Container>
      <TitleBox>[+ recruit]</TitleBox>
      <TextBox className='recruit-links'>
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
              href='https://www.notion.so/indent/ffc3c0e523ff4c6894f5ceaaed53fdec'
              className='frontend-engineer'
            >
              Frontend Engineer →
            </Link>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.notion.so/indent/5903e879540f4f09a890b7532d48b802'
              className='backend-engineer'
            >
              Backend Engineer →
            </Link>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.notion.so/UI-UX-d85c6a060da248a8b1fd33467964862b'
              className='ui-ux-designer'
            >
              UI/UX Designer →
            </Link>
          </LinkBox>
        </VerticalDiv>
        <VerticalDiv>
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
              href='https://www.notion.so/indent/0452e9f2428d43f798cd59e716e1898f'
              className='data-engineer'
            >
              Data Engineer →
            </Link>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.notion.so/indent/5c171266cda6435f89992523c8839d2a'
              className='data-scientist'
            >
              Data Scientist →
            </Link>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.notion.so/f7b95ea90fb44f92995c1b6458ed42b1'
              className='brand-contents-designer'
            >
              Brand/Contents Designer →
            </Link>
          </LinkBox>
        </VerticalDiv>
      </TextBox>
    </Container>
  );
};

export default Recruit;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'IBM Plex Mono', monospace;
  width: 919px;
  height: 406px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 17px;
  justify-content: flex-start;
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
