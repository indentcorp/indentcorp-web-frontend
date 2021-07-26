import React from "react";
import styled from "styled-components";
import Highlighter from "../../Modules/Highlighter/Highlighter";

const Conclusion = () => {
  return (
    <Container>
      <Indentation>
        <GlyphBox>¶</GlyphBox>
        <TextBox>
          <Highlighter
            highlightColor={"#FFFEAF"}
            highlightWidth={"15px"}
            highlightHeight={"56px"}
            margin={"0px -9px 0px 0px"}
            zIndex={-1}
          />
          우리는 한 문단에 함께 마침표를 찍고
          <br />
          언제든지 또 다른 문단의 시작을 함께할 사람들입니다.
        </TextBox>
        <GlyphBox style={{ marginLeft: "0px" }}>¶</GlyphBox>
      </Indentation>
    </Container>
  );
};

export default Conclusion;

const Container = styled.div`
  padding-bottom: 160px;
`;

const TextBox = styled.span`
  display: flex;
  flex-direction: row;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 17px;
  color: #8e8e8e;
  line-height: 28px;
  margin-top: 10px;
  margin-bottom: 30.5px;
`;

const GlyphBox = styled.p`
  font-family: "IBM Plex Mono", monospace;
  font-size: 18px;
  color: #8e8e8e;
  margin-bottom: 20px;
  margin-left: 10px;
`;

const Indentation = styled.div`
  margin-left: 15px;
`;
