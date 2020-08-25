import React from 'react';
import styled from 'styled-components';
import Highlighter from '../../Modules/Highlighter';

const Container = styled.div`
  /* margin-top: 20px; */
  margin-bottom: 100px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  color: #8e8e8e;
  line-height: 21px;
  margin-bottom: 18px;
  margin-left: -10px;
`;

const GlyphBox = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  color: #8e8e8e;
  margin-bottom: 20px;
`;

const Indentation = styled.div`
  margin-left: 10px;
`;

const Conclusion = () => {
  return (
    <Container>
      <Indentation>
        <GlyphBox>¶</GlyphBox>
        <TextBox>
          <Highlighter
            highlightColor={'#FFFEAF'}
            highlightWidth={'10px'}
            highlightHeight={'62px'}
            margin={'0px -5.5px 0px 0px'}
            zIndex={-1}
          />
          우리는 한 문단에 함께 마침표를 찍고
          <br />
          언제든지 또 다른 문단의 시작을
          <br /> 함께할 사람들입니다.
        </TextBox>
      </Indentation>
      <GlyphBox>¶</GlyphBox>
    </Container>
  );
};

export default Conclusion;
