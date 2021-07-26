import React from 'react';
import styled from 'styled-components';
import Highlighter from '../../Modules/Highlighter/Highlighter';


const Intro = () => {
  return (
    <Container>
      <Section>
        <Highlighter
          highlightColor='#FFFFA3'
          highlightWidth='10px'
          highlightHeight='307px'
          opacity='80%'
          zIndex={0}
          left='-7px'
        />
        <TextBox>
          <Content style={{ marginBottom: '1.9em' }}>
            다른 문장과 똑같은 출발점에서
            <br />
            나란히 시작하면 새로운 문단일
            <br />
            지라도 그 시작이 명확하지 않습
            <br />
            니다. 우리는 다르게 생각하고
            <br />
            다르게 시작하는 사람들입니다.
          </Content>
          <Content>
            {'  글자와 단어가 채워지고 문장이'}
            <br />
            문단의 모양새를 갖춰갈 때 들여
            <br />
            쓰기의 흔적은 비로소 그 존재를
            <br />
            드러냅니다. 우리는 시도하고 실행
            <br />
            하면서 문단을 함께 채워나가는
            <br />
            사람들입니다. 그리고 하나의 장을
            <br />
            되돌아봤을 때 가장 유의미한 들여
            <br />
            쓰기를 했던 사람들이고자 합니다.
          </Content>
        </TextBox>
      </Section>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  display: flex;
  line-height: 1.7;
  margin-left: 91px;
  font-size: 13px;
  height: 447px;
  background-color: #efeded;
  position: relative;
  right: 0px;
  padding-right: 30px;
  @media (max-width: 335px) {
    padding-right: 18px;
  }
`;

const Section = styled.div`
  position: relative;
  margin: 90px 0px 52px 77px;
  height: 265px;
  @media (max-width: 335px) {
    margin: 90px 0px 52px 53px;
  }
`;

const TextBox = styled.div`
  margin-top: -311px;
`;

const Content = styled.p`
  position: relative;
  letter-spacing: -0.26px;
  color: #454545;
  z-index: 2;
  white-space: pre;
`;
