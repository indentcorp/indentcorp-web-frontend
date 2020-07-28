import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  line-height: 1.7;
  @media (max-width: 1200px) {
  }
`;

const TitleBox = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  color: #8e8e8e;
  font-size: 21px;
  margin-bottom: 25px;
`;

const PaneSection = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  padding-left: 151px;
  padding-top: 40px;
  padding-bottom: 80px;
  clear: both;
`;

const PageNum = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 700;
  color: #a0a0a0;
`;

const PaneTitle = styled.p`
  position: relative;
  font-family: 'Noto Sans KR', sans-serif;
  color: #454545;
  font-weight: 300;
  font-size: 21px;
  top: 5px;
`;

const PaneContent = styled.p`
  position: relative;
  font-size: 15px;
  /* width: 399px; */
  top: 30px;
  color: #454545;
  line-height: 24px;
  letter-spacing: -0.3px;
`;

const CarouselCont = styled.div`
  /* in case of 1200px */
  width: 874px;
  height: 290px;
  background-color: #deffe6;
`;

const WhatPerson = () => {
  return (
    <Container>
      <TitleBox>
        온전히 일에 집중할 수 있도록 이러한 환경에서 일합니다.
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
    z-index: 2;
    left: 50px;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='51' height='48.348' viewBox='0 0 51 48.348'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bisolation:isolate;%7D.b%7Bfill:%23afffd4;%7D%3C/style%3E%3C/defs%3E%3Cg class='a' transform='translate(0)'%3E%3Cg class='a'%3E%3Cpath class='b' d='M255,260.192l-21.418-18.025v-12.3L255,211.844l4.135,8.905-14.314,15.269,14.314,15.267Zm25.447,0-21.418-18.025v-12.3l21.418-18.025,4.135,8.905-14.314,15.269,14.314,15.267Z' transform='translate(-233.582 -211.844)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  .slick-next {
    z-index: 2;
    right: 25px;
  }
  .slick-list {
    height: 290px;
  }
`;

const ArrowSettings = {
  display: 'flex',
  width: '60px',
  height: '128px',
  top: '143px',
  right: '273px',
};

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...ArrowSettings,
        content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='51' height='48.349' viewBox='0 0 51 48.349'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bisolation:isolate;%7D.b%7Bfill:%23afffd4;%7D%3C/style%3E%3C/defs%3E%3Cg class='a'%3E%3Cg class='a'%3E%3Cpath class='b' d='M290.167,228.442l14.314-15.268-14.314-15.268L294.3,189l21.418,18.025v12.3L294.3,237.349Zm25.447,0,14.314-15.268-14.314-15.268L319.75,189l21.417,18.025v12.3L319.75,237.349Z' transform='translate(-290.167 -189)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
      <PageNum>1/4</PageNum>
      <PaneTitle>적극적인 보상 시스템.</PaneTitle>
      <PaneContent>
        개인의 업무 성과가 있다면 그에 대해 합리적으로 보상합니다.
        <br /> 업무와 성취에 대해 매월 동료 피드백을 주고받고, 우수한 <br />{' '}
        평가에 대해 포상합니다. <br /> 직무 관련 발명에 대해서는 발명자 등록과
        상여금을 지원합니다.
      </PaneContent>
    </PaneSection>
  );
};

const SecondPane = () => {
  return (
    <PaneSection>
      <PageNum>2/4</PageNum>
      <PaneTitle>자유로운 근무 환경</PaneTitle>
      <PaneContent>
        투명한 업무 공유를 기반으로 자율 출퇴근과 리모트 근무를 장려합니다.
        <br /> 슬랙, 아사나, 노션 등의 업무 도구를 사용해 자유로운 환경에서도{' '}
        <br /> 효율적으로 협업합니다. <br /> 성과가 좋지 않을때에도 정직하게
        공유하고 피드백을 주고받습니다.
      </PaneContent>
    </PaneSection>
  );
};

const ThirdPane = () => {
  return (
    <PaneSection>
      <PageNum>3/4</PageNum>
      <PaneTitle>생산성 향상을 위한 지원</PaneTitle>
      <PaneContent>
        맥북 프로, 아이맥, 다수의 서브 모니터 등 개인의 생산성을 위한
        <br /> 장비를 아낌없이 지원합니다. <br />
        업무 관련 자기계발을 위한 세미나, 강의, 도서 등을 지원합니다. <br />
        일하는 동안 식사와 커피, 간식을 부족함 없이 제공합니다.
        <br /> 대표와의 1:1 격월 미팅에서 무엇이든 논의하고 요청합니다.
      </PaneContent>
    </PaneSection>
  );
};
