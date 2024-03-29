import React from "react";
import styled from "styled-components";
import Border from "../../Modules/Border/Border";
import Highlighter from "../../Modules/Highlighter/Highlighter";

const Recruit = () => {
  return (
    <Container>
      <TitleBox>[+ recruit]</TitleBox>
      <TextBox className='recruit-links'>
        <LinkSection>
          <Border
            top={"8px"}
            right={"10px"}
            height={"192px"}
            margin={"0px 0px -85px 0px"}
          />
          <Highlighter
            top={"8px"}
            highlightColor={"#FAF8F8"}
            highlightWidth={"10px"}
            highlightHeight={"79px"}
            margin={"0px 0px 0px 0px"}
            zIndex={-1}
          />
          <LinkBox>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.notion.so/indent/ffc3c0e523ff4c6894f5ceaaed53fdec"
              className='frontend-engineer'
            >
              Frontend Engineer →
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.notion.so/indent/5903e879540f4f09a890b7532d48b802"
              className='backend-engineer'
            >
              Backend Engineer →
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.notion.so/UI-UX-d85c6a060da248a8b1fd33467964862b"
              className='ui-ux-designer'
            >
              UI/UX Designer →
            </Link>
          </LinkBox>
        </LinkSection>
        <LinkSection>
          <Highlighter
            top={"8px"}
            highlightColor={"#FAF8F8"}
            highlightWidth={"10px"}
            highlightHeight={"79px"}
            margin={"0px 0px 0px 0px"}
            zIndex={-1}
          />
          {/* hightlighter for 2 lines */}
          {/* <Highlighter
            top={'7px'}
            highlightColor={'#FAF8F8'}
            highlightWidth={'10px'}
            highlightHeight={'49px'}
            margin={'0px 0px 0px 0px'}
            zIndex={-1}
          /> */}
          <LinkBox>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.notion.so/indent/0452e9f2428d43f798cd59e716e1898f"
              className='data-engineer'
            >
              Data Engineer →
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.notion.so/indent/5c171266cda6435f89992523c8839d2a"
              className='data-scientist'
            >
              Data Scientist →
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.notion.so/f7b95ea90fb44f92995c1b6458ed42b1"
              className='brand-contents-designer'
            >
              Brand/Contents Designer →
            </Link>
          </LinkBox>
        </LinkSection>
      </TextBox>
    </Container>
  );
};

export default Recruit;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: "IBM Plex Mono", monospace;
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
