import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  flex-direction: column;
  line-height: 22px;
`;

const TitleBox = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  color: #8e8e8e;
  font-size: 18px;
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
`;

const PaneContent = styled.p`
  position: relative;
  font-size: 13px;
  top: 30px;
  color: #454545;
  line-height: 22px;
`;

const CarouselCont = styled.div`
  width: 100vw;
  height: 330px;
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
  'z-index': '10px',
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
        하는 일의 목적과 맥락을 이해하고
        <br />
        움직입니다. ‘열심히’하기보다는
        <br /> ‘잘’ 하는 것이 더 중요합니다.
        <br />
        일에 소모한 시간보다는 성취와
        <br />
        성과에 더 집중합니다.
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
        <br /> 자신의 업무는 자신이 선택하고,
        <br />
        책임집니다.
        <br />
        물론 팀원들은 이 과정에서 합리
        <br />
        적으로 소통하고 협의합니다.
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
        자율성이 보장되기 위해서는 팀원 <br />
        개개인의 능력 뿐 아니라 투명하고
        <br /> 활발한 업무 공유가 필수적입니다.
        <br /> 인덴트에서는 TMI 를 장려합니다.
        <br /> 좋지 않은 성과나 실수에 대해서도
        <br /> 거리낌없이 공유하고, 도움이
        <br />
        필요한 경우에는 함께 해결책을
        <br />
        모색합니다.
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
        더 나은 결과를 위한 변동이나
        <br /> 예측하지 못한 변수에 유동적으로
        <br /> 대처해야합니다. 새로운
        <br /> 것에 대한 수용, 새로운
        <br />
        것으로의 도전 모두에 열려있는
        <br /> 사람이길 바랍니다.
      </PaneContent>
    </PaneSection>
  );
};
