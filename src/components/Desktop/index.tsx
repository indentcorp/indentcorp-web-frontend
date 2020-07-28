import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import SideBar from '../../components/Modules/MenuBar/SideBar';
import Intro from '../../components/Desktop/Top/Intro';
import BoldIndent from '../../components/Desktop/Top/BoldIndent';
import IndentIs from '../../components/Desktop/Top/IndentIs';
import VreviewIs from '../../components/Desktop/Top/VreviewIs';
import PressBox from '../../components/Desktop/Top/PressBox';
import HistoryBox from '../../components/Desktop/Top/HistoryBox';
import Culture from '../../components/Desktop/Bottom/Culture';
import WhatPerson from '../../components/Desktop/Bottom/WhatPerson';
import WorkEnv from '../../components/Desktop/Bottom/WorkEnv';
import Recruit from '../../components/Desktop/Bottom/Recruit';
import WeAre from '../../components/Desktop/Bottom/WeAre';
import ContactUs from '../../components/Desktop/Bottom/ContactUs';
import Conclusion from '../../components/Desktop/Bottom/Conclusion';
import Border from '../../components/Modules/Border';
import Footer from '../Desktop/Footer';

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: left; */
  justify-content: center;
`;

const Container = styled.div`
  display: block;
  width: 100%;
  min-width: 1440px;
  @media (max-width: 1200px) {
    min-width: 1200px;
  }
`;

const TopColor = styled.div`
  background-color: #eae8e8;
  display: flex;
  padding-left: 481px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
const BottomColor = styled.div`
  width: 100%;
  padding-left: 481px;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Indentation = styled.div`
  margin-left: 15px;
`;

const Main = () => {
  const menuIndent = useRef<HTMLDivElement | null>(null);
  const menuVreview = useRef<HTMLDivElement | null>(null);
  const menuCulture = useRef<HTMLDivElement | null>(null);
  const menuRecruit = useRef<HTMLDivElement | null>(null);
  const menuWeAre = useRef<HTMLDivElement | null>(null);
  const menuContact = useRef<HTMLDivElement | null>(null);

  const [refVal, setRefVal] = useState<any>({});

  useEffect(() => {
    if (
      menuIndent.current &&
      menuVreview.current &&
      menuCulture.current &&
      menuRecruit.current &&
      menuWeAre.current &&
      menuContact.current
    ) {
      const value = {
        menuIndent: menuIndent.current.offsetTop,
        menuVreview: menuVreview.current.offsetTop,
        menuCulture: menuCulture.current.offsetTop,
        menuRecruit: menuRecruit.current.offsetTop,
        menuWeAre: menuWeAre.current.offsetTop,
        menuContact: menuContact.current.offsetTop,
      };
      setRefVal(value);
    }
  }, []);
  return (
    <Container>
      <SideBar selectedRef={refVal} />
      <MainSection>
        <TopColor>
          <Border
            position={'relative'}
            margin={'90px 0px -5974px 0px'}
            height={'5884px'}
            float={'left'}
          />
          <Section>
            <div ref={menuIndent} />
            <Intro />
            <BoldIndent />
            <Border
              position={'relative'}
              margin={'0px 0px -1532px 15px'}
              height={'1368px'}
              float={'left'}
            />

            <IndentIs />
            <div ref={menuVreview} />
            <Border
              position={'relative'}
              margin={'97px 0px -1171px 30px'}
              height={'1093px'}
              float={'left'}
            />
            <Indentation>
              <VreviewIs />
              <Border
                top={'143px'}
                position={'relative'}
                margin={'0px 0px 0px 30px'}
                height={'422px'}
                float={'left'}
              />
              <Indentation>
                <PressBox />
                <HistoryBox />
              </Indentation>
            </Indentation>
          </Section>
        </TopColor>
        <BottomColor>
          <div ref={menuCulture} />
          <Culture />
          <Indentation>
            <Border />
            <Indentation>
              <Border />
              <WhatPerson />
              <WorkEnv />
              <div ref={menuRecruit} />
              <Recruit />
              <div ref={menuWeAre} />
              <WeAre />
              <div ref={menuContact} />
              <ContactUs />
              <Conclusion />
            </Indentation>
          </Indentation>
        </BottomColor>
      </MainSection>
      <Footer />
    </Container>
  );
};

export default Main;
