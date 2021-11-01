import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import SideBar from '../Modules/MenuBar/SideBar/SideBar';
import Intro from './Top/Intro';
import BoldIndent from './Top/BoldIndent';
import IndentIs from './Top/IndentIs';
import VreviewIs from './Top/VreviewIs';
import PressBox from './Top/PressBox';
import HistoryBox from './Top/HistoryBox';
import Culture from './Bottom/Culture';
import WhatPerson from './Bottom/WhatPerson';
import WorkEnv from './Bottom/WorkEnv';
import Recruit from './Bottom/Recruit';
import WeAre from './Bottom/WeAre';
import ContactUs from './Bottom/ContactUs';
import Conclusion from './Bottom/Conclusion';
import Border from '../Modules/Border/Border';
import Footer from './Footer/Footer';

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  display: block;
  width: 100%;
  min-width: 1440px;
  /* @media (max-width: 1200px) {
    min-width: 1200px;
  } */
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

const outerBorder1 = `6465`

export const FrameHeighContext = React.createContext<number>(null)

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
            margin={`0px 0px -${outerBorder1}px 0px`}
            height={`${outerBorder1}px`}
            float={'left'}
            top={'90px'}
          />
          <Section>
            <div ref={menuIndent} />
            <Intro />
            <BoldIndent />
            <Border
              position={'relative'}
              margin={'0px 0px -1390px 15px'}
              height={'1390px'}
              float={'left'}
              top={'67px'}
            />

            <IndentIs />
            <div ref={menuVreview} />
            <Border
              position={'relative'}
              margin={'0px 0px -1102px 30px'}
              height={'1102px'}
              float={'left'}
              top={'153px'}
            />
            <Indentation>
              <VreviewIs />
              <Border
                top={'20px'}
                position={'relative'}
                margin={'0px 0px 0px 30px'}
                height={'402px'}
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
              <Border
                position={'relative'}
                margin={'0px 0px -733px 0px'}
                height={'733px'}
                float={'left'}
              />
              <Indentation>
                <WhatPerson />
                <WorkEnv />
              </Indentation>
              <div ref={menuRecruit} />
              <Recruit />
              <div ref={menuWeAre} />
              <WeAre />
              <div ref={menuContact} />
              <ContactUs />
            </Indentation>
            <Conclusion />
          </Indentation>
        </BottomColor>
      </MainSection>
      <Footer />
    </Container>
  );
};

export default Main;
