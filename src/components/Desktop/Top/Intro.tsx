import React from 'react';
import styled from 'styled-components';
import Highlighter from '../../Modules/Highlighter';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  line-height: 30px;
  margin-left: 335px;
  font-size: 17px;
  width: 473px;
  height: 423px;
  background-color: #efeded;
`;

const Section = styled.div`
  position: relative;
  margin: 90px 45px 68px 53px;
  width: 375px;
  height: 265px;
  /* //   padding: 52 50 50 0 px; */
`;

const TextBox = styled.div`
  margin-top: -270px;
`;
const Content = styled.p`
  position: relative;
  letter-spacing: -0.3px;
  color: #454545;
  z-index: 2;
`;

const Intro = () => {
  return (
    <Container>
      <Section>
        <Highlighter
          highlightColor='#FFFFA3'
          highlightWidth='15px'
          highlightHeight='268px'
          opacity='80%'
          zIndex={0}
          left='-7px'
        />
        <TextBox>
          <Content style={{ marginBottom: '27px' }}>
            {'다른 문장과 똑같은 출발점에서 나란히 시작하면'}
            <br />
            {'새로운 문단일지라도 그 시작이 명확하지 않습니다.'}
            <br />
            {'우리는 다르게 생각하고 다르게 시작하는 사람들입니다.'}
          </Content>
          <Content>
            {'글자와 단어가 채워지고 문장이 문단의 모양새를 갖춰'}
            <br />
            {'갈 때 들여쓰기의 흔적은 비로소 그 존재를 드러냅니다.'} <br />
            {'우리는 시도하고 실행하면서 문단을 함께 채워나가는'}
            <br />
            {'사람들입니다. 그리고 하나의 장을 뒤돌아봤을 때 가장'} <br />
            {'유의미한 들여쓰기를 했던 사람들이고자 합니다.'}
          </Content>
        </TextBox>
      </Section>
    </Container>
  );
};

export default Intro;
