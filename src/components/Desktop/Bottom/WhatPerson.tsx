import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  margin-top: 71px;
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
  /* in the case of 1200px */
  width: 874px;
  height: 290px;
  background-color: #deffe6;
`;

const WhatPerson = () => {
  return (
    <Container>
      <TitleBox>인덴터는 이런 분이길 바랍니다.</TitleBox>
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
          <FourthPane />
        </CarouselStyle>
      </CarouselCont>
    );
  }
}

const FirstPane = () => {
  return (
    <PaneSection>
      <PageNum>1/4</PageNum>
      <PaneTitle>유능해야합니다.</PaneTitle>
      <PaneContent>
        하는 일의 목적과 맥락을 이해하고 움직입니다.
        <br />
        ‘열심히’하기보다는 ‘잘’ 하는 것이 더 중요합니다.
        <br /> 일에 소모한 시간보다는 성취와 성과에 더 집중합니다.
      </PaneContent>
    </PaneSection>
  );
};

const SecondPane = () => {
  return (
    <PaneSection>
      <PageNum>2/4</PageNum>
      <PaneTitle>책임감 있어야합니다.</PaneTitle>
      <PaneContent>
        누군가 시켜서 일하지 않습니다.
        <br /> 자신의 업무는 자신이 선택하고, 책임집니다. <br />
        물론 팀원들은 이 과정에서 합리적으로 소통하고 협의합니다.
      </PaneContent>
    </PaneSection>
  );
};

const ThirdPane = () => {
  return (
    <PaneSection>
      <PageNum>3/4</PageNum>
      <PaneTitle>투명하게 소통합니다.</PaneTitle>
      <PaneContent>
        자율성이 보장되기 위해서는 팀원 개개인의 능력 뿐 아니라
        <br />
        투명하고 활발한 업무 공유가 필수적입니다. 인덴트에서는 TMI 를
        <br />
        장려합니다. 좋지 않은 성과나 실수에 대해서도 거리낌없이 공유하고,
        <br />
        도움이 필요한 경우에는 함께 해결책을 모색합니다.
      </PaneContent>
    </PaneSection>
  );
};

const FourthPane = () => {
  return (
    <PaneSection>
      <PageNum>4/4</PageNum>
      <PaneTitle>열려있어야합니다.</PaneTitle>
      <PaneContent>
        더 나은 결과를 위한 변동이나 예측하지 못한 변수에 유동적으로
        <br /> 대처해야합니다. 새로운 것에 대한 수용, 새로운 것으로의 도전{' '}
        <br />
        모두에 열려있는 사람이길 바랍니다.
      </PaneContent>
    </PaneSection>
  );
};
