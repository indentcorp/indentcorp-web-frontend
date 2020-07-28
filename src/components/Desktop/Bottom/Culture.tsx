import React from 'react';
import styled from 'styled-components';
import Highlighter from '../../Modules/Highlighter';
import Border from '../../Modules/Border';

const Container = styled.div`
  line-height: 1.7;
  margin-top: 90px;
  @media (max-width: 1200px) {
  }
`;

const TitleBox = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 29px;
  font-weight: 500;
  color: #a0a0a0;
  position: relative;
  left: 10px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 300;
  margin-right: 48px;
  min-width: 300px;
`;

const DetailText = styled.p`
  font-size: 15px;
  line-height: 24px;
  margin-top: 9px;
  letter-spacing: 0.3px;
`;

const DetailTitle = styled.span`
  font-size: 21px;
  color: #454545;
  margin-bottom: 17px;
`;

const Text = styled.div`
  flex-direction: column;
  padding-left: 2px;
`;

const Culture = () => {
  return (
    <Container>
      <TitleBox>[◊ indenter’s culture]</TitleBox>
      <TextBox>
        <Border margin={'0px 0px -3381px 15px'} height={'3500px'} />
        <DetailBox>
          <Highlighter
            highlightColor={'#DEFFE6'}
            highlightWidth={'15px'}
            highlightHeight={'117px'}
            left={'10px'}
            zIndex={-1}
          />
          <Text>
            <DetailTitle>본질에 집중합니다.</DetailTitle>
            <DetailText>
              기존의 누군가를 따라하기보다는 <br />
              우리가 하는 일의 본질을 생각하며 <br />
              창의적으로 접근하고, 시도합니다.
            </DetailText>
          </Text>
        </DetailBox>
        <DetailBox>
          <Highlighter
            highlightColor={'#DEFFE6'}
            highlightWidth={'15px'}
            highlightHeight={'117px'}
            left={'10px'}
            zIndex={-1}
          />
          <Text>
            <DetailTitle>그리고 과감하게 도전합니다.</DetailTitle>
            <DetailText>
              논리와 감에 기반한 새로운 시도를 적극 지향
              <br />
              하며, 실패에 대해서는 책임을 묻지 않습니다.
              <br />
              오로지 시도하지 않음을 지양합니다.
            </DetailText>
          </Text>
        </DetailBox>
      </TextBox>
    </Container>
  );
};

export default Culture;
