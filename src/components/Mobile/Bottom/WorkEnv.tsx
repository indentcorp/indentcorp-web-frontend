import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';


const WhatPerson = () => {
  return (
    <Container>
      <TitleBox>
        온전히 일에 집중할 수 있도록
        <br />
        이러한 환경에서 일합니다.
      </TitleBox>
      <Carousel />
    </Container>
  );
};

export default WhatPerson;

// May modulize this below

//importing svg didn't work, i had to hard code the svg
const CarouselStyle = styled(Slider)`
  width: 100%;
  .slick-prev::before {
    font-family: 'IBM Plex Mono SemiBold', monospace;
    font-size: 100px;
    color: #afffd4;
  }
  .slick-next::before {
    font-size: 100px;
    color: #afffd4;
  }
  .slick-prev {
    z-index: 10;
    left: -28px;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='39' height='36.972' viewBox='0 0 39 36.972'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bisolation:isolate;%7D.b%7Bfill:%23afffd4;%7D%3C/style%3E%3C/defs%3E%3Cg class='a'%3E%3Cg class='a'%3E%3Cpath class='b' d='M142.28,252.531,125.9,238.748v-9.405l16.38-13.784,3.161,6.811-10.946,11.676,10.946,11.676Zm19.458,0-16.377-13.783v-9.405l16.377-13.784,3.162,6.811-10.945,11.676L164.9,245.721Z' transform='translate(-125.9 -215.559)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  .slick-next {
    z-index: 10;
    right: 25px;
  }
  .slick-list {
    height: 290px;
  }
`;

const ArrowSettings = {
  display: 'flex',
  width: '41px',
  height: '128px',
  top: '163px',
  right: '62px',
};

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...ArrowSettings,
        content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='39' height='36.972' viewBox='0 0 39 36.972'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bisolation:isolate;%7D.b%7Bfill:%23afffd4;%7D%3C/style%3E%3C/defs%3E%3Cg class='a' transform='translate(0 0)'%3E%3Cg class='a'%3E%3Cpath class='b' d='M382.221,245.721l10.945-11.676L382.221,222.37l3.162-6.811,16.377,13.784v9.405l-16.377,13.783Zm19.458,0,10.947-11.676L401.679,222.37l3.162-6.811,16.38,13.784v9.405l-16.38,13.783Z' transform='translate(-382.221 -215.559)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...ArrowSettings,
      }}
      onClick={onClick}
    />
  );
}

class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 800,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <CarouselCont>
        <CarouselStyle {...settings}>
          <FirstPane />
          <SecondPane />
          <ThirdPane />
        </CarouselStyle>
      </CarouselCont>
    );
  }
}

const FirstPane = () => {
  return (
    <PaneSection>
      <PageNum>1/3</PageNum>
      <PaneTitle>적극적인 보상 시스템.</PaneTitle>
      <TextBox>
        <DashBox>
          -<br />
          <br />-<br />
          <br />
          <br />-<br />
        </DashBox>
        <PaneContent>
          개인의 업무 성과가 있다면 그에
          <br />
          대해 합리적으로 보상합니다.
          <br />
          업무와 성취에 대해 매월 동료
          <br />
          피드백을 주고받고, 우수한
          <br />
          평가에 대해 포상합니다.
          <br />
          직무 관련 발명에 대해서는 발명자
          <br />
          등록과 상여금을 지원합니다.
        </PaneContent>
      </TextBox>
    </PaneSection>
  );
};

const SecondPane = () => {
  return (
    <PaneSection>
      <PageNum>2/3</PageNum>
      <PaneTitle>자유로운 근무 환경</PaneTitle>
      <TextBox>
        <DashBox>
          -<br />
          <br />-<br />
          <br />
          <br />-<br />
        </DashBox>
        <PaneContent>
          투명한 업무 공유를 기반으로 자율
          <br />
          출퇴근과 리모트 근무를 장려합니다.
          <br />
          슬랙, 아사나, 노션 등의 업무 도구를
          <br />
          사용해 자유로운 환경에서도 효율적
          <br />
          으로 협업합니다.
          <br />
          성과가 좋지 않을때에도 정직하게
          <br />
          공유하고 피드백을 주고받습니다.
        </PaneContent>
      </TextBox>
    </PaneSection>
  );
};

const ThirdPane = () => {
  return (
    <PaneSection>
      <PageNum>3/3</PageNum>
      <PaneTitle>생산성 향상을 위한 지원</PaneTitle>
      <TextBox>
        <DashBox>
          -<br />
          <br />-<br />
          <br />
          <br />-<br />-
        </DashBox>
        <PaneContent>
          맥북 프로, 아이맥, 다수의 서브
          <br />
          모니터 등 개인의 생산성을 위한
          <br />
          장비를 아낌없이 지원합니다.
          <br />
          업무 관련 자기계발을 위한 세미나,
          <br />
          강의, 도서 등을 지원합니다.
          <br />
          일하는 동안 식사와 커피, 간식을
          <br />
          부족함 없이 제공합니다.
          <br />
          대표와의 1:1 격월 미팅에서
          <br />
          무엇이든 논의하고 요청합니다.
        </PaneContent>
      </TextBox>
    </PaneSection>
  );
};

const Container = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  line-height: 22px;
`;

const TitleBox = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 25px;
  color: #8e8e8e;
  font-size: 17px;
  margin-bottom: 15px;
`;

const PaneSection = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  padding-left: 60px;
  padding-top: 35px;
  clear: both;
  @media (max-width: 335px) {
    padding-left: 37px;
  }
`;

const PageNum = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 700;
  font-size: 12px;
  color: #a0a0a0;
  position: relative;
  left: 2px;
`;

const PaneTitle = styled.p`
  position: relative;
  font-family: 'Noto Sans KR', sans-serif;
  color: #454545;
  font-weight: 300;
  font-size: 18px;
  top: 5px;
  margin-bottom: -10px;
`;

const PaneContent = styled.div`
  position: relative;
  font-size: 13px;
  color: #454545;
  line-height: 22px;
  padding-bottom: 40px;
`;

const TextBox = styled.div`
  display: flex;
  padding-top: 30px;
  position: relative;
  right: 9px;
`;

const DashBox = styled.div`
  width: 10px;
  height: 151px;
  position: relative;
  top: -0.6px;
  color: #454545;
`;

const CarouselCont = styled.div`
  width: 100vw;
  height: 330px;
  background-color: #deffe6;
`;
