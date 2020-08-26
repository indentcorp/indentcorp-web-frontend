import React from 'react';
import styled from 'styled-components';
import Highlighter from '../../Modules/Highlighter';
import Border from '../../Modules/Border';

const Container = styled.div`
  line-height: 1.7;
  margin-top: 90px;
`;

const TitleBox = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 29px;
  font-weight: 500;
  color: #a0a0a0;
  position: relative;
  left: 10px;
  padding-bottom: 60px;
  letter-spacing: -0.87px;
  white-space: pre;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 300;
  margin-right: calc(100px - 15px);
`;

const DetailText = styled.p`
  font-size: 15px;
  line-height: 24px;
  margin-top: 9px;
  letter-spacing: -0.3px;
`;

const DetailTitle = styled.span`
  font-size: 21px;
  color: #454545;
  margin-bottom: 17px;
  letter-spacing: -0.42px;
`;

const Text = styled.div`
  flex-direction: column;
  padding-left: 2px;
  width: 300px;
  height: calc(70px + 15px + 31px);
`;

const Culture = () => {
  return (
    <Container>
      <TitleBox>[◊ indenter’s culture]</TitleBox>
      <TextBox>
        <Border margin={'0px 0px -3787px 15px'} height={'3787px'} />
        <DetailBox>
          <Highlighter
            highlightColor={'#DEFFE6'}
            highlightWidth={'15px'}
            highlightHeight={'117px'}
            left={'15px'}
            zIndex={-1}
            margin={'0px 5px 0px 0px'}
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
            zIndex={-1}
            margin={'0px -10px 0px 0px'}
          />
          <Text>
            <DetailTitle>그리고 과감하게 도전합니다.</DetailTitle>
            <DetailText>
              논리와 감에 기반한 새로운 시도를 적극 지향 하며,
              <br />
              실패에 대해서는 책임을 묻지 않습니다. 오로지
              <br /> 시도하지 않음을 지양합니다.
            </DetailText>
          </Text>
        </DetailBox>
      </TextBox>
    </Container>
  );
};

export default Culture;
