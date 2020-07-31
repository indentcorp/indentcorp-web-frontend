import React from 'react';
import styled from 'styled-components';
import Highlighter from '../../Modules/Highlighter';
import Border from '../../Modules/Border';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  line-height: 21px;
  margin-top: 80px;
`;

const TitleBox = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 20px;
  font-weight: 500;
  color: #a0a0a0;
  margin-left: 10px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36.14px;
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 300;
  margin-right: 48px;
  margin-left: 12px;
  min-width: 300px;
`;

const DetailText = styled.p`
  font-size: 13px;
  margin-top: 9.61px;
`;

const DetailTitle = styled.span`
  font-size: 18px;
  color: #454545;
`;

const Text = styled.div`
  flex-direction: column;
  padding-bottom: 52.14px;
`;

const Culture = () => {
  return (
    <Container>
      <TitleBox>[◊ indenter’s culture]</TitleBox>
      <TextBox>
        <Border margin={'0px 0px -3381px 10px'} height={'3381px'} />
        {/* <Text> */}
        <DetailBox>
          <Highlighter
            highlightColor={'#DEFFE6'}
            highlightWidth={'14px'}
            highlightHeight={'105px'}
            left={'8px'}
            top={'-5px'}
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
            highlightWidth={'14px'}
            highlightHeight={'105px'}
            left={'8px'}
            top={'-5px'}
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
        {/* </Text> */}
      </TextBox>
    </Container>
  );
};

export default Culture;
