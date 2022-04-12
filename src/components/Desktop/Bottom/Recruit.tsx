import React from "react";
import styled from "styled-components";
import Highlighter from "../../Modules/Highlighter/Highlighter";
import Border from "../../Modules/Border/Border";

const notionLink = {
  frontendEngineer:
    "https://www.notion.so/indent/ffc3c0e523ff4c6894f5ceaaed53fdec",
  backendEnginner:
    "https://www.notion.so/indent/5903e879540f4f09a890b7532d48b802",
  productDesigner:
    "https://www.notion.so/indent/d85c6a060da248a8b1fd33467964862b",
  brandContentsDesigner:
    "https://www.notion.so/indent/f7b95ea90fb44f92995c1b6458ed42b1",
  salesOperationManager:
    "https://www.notion.so/indent/d77c166f8a16470b8c205a5f158c2812",
  B2BSalesManager:
    "https://www.notion.so/indent/B2B-c6236a9c357f4b49a1727033feab3a56",
  CSOperator:
    "https://www.notion.so/indent/CS-beb19bfb9fb4475882f95698152cb097",
  B2BMarketer:
    "https://www.notion.so/indent/B2B-d06c0c1b212d4153a0932bccd2b15c9c",
};

const Recruit = () => {
  return (
    <Container>
      <TitleBox>[+ recruit]</TitleBox>
      <TextBox className="recruit-links">
        <VerticalDiv>
          <Border
            margin={"0px 0px 0px 0px"}
            height={"175px"}
            padding={"0px 7px 0px 0px"}
          />
          <Highlighter
            highlightColor={"#FAF8F8"}
            highlightWidth={"15px"}
            highlightHeight={"175px"}
            margin={"0px 0px 0px 0px"}
            left={"7px"}
            zIndex={-1}
          />
          <LinkBox>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={notionLink.frontendEngineer}
              className="frontend-engineer"
            >
              Frontend Engineer →
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={notionLink.backendEnginner}
              className="backend-engineer"
            >
              Backend Engineer →
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={notionLink.productDesigner}
              className="ui-ux-designer"
            >
              Product Designer →
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={notionLink.brandContentsDesigner}
              className="data-engineer"
            >
              Brand/Contents Designer →
            </Link>
          </LinkBox>
        </VerticalDiv>
        <VerticalDiv>
          <Highlighter
            highlightColor={"#FAF8F8"}
            highlightWidth={"15px"}
            highlightHeight={"175px"}
            margin={"0px 0px 0px 0px"}
            left={"7px"}
            zIndex={-1}
          />
          <LinkBox>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={notionLink.salesOperationManager}
              className="data-scientist"
            >
              Sales Operation Manager →
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={notionLink.B2BSalesManager}
              className="brand-contents-designer"
            >
              B2B Sales Manager →
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={notionLink.CSOperator}
              className="brand-contents-designer"
            >
              CS Operator →
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={notionLink.B2BMarketer}
              className="brand-contents-designer"
            >
              B2B Marketer →
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
  font-family: "IBM Plex Mono", monospace;
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
  height: 180px;
  position: relative;
  margin-right: 85px;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -15px;
`;
