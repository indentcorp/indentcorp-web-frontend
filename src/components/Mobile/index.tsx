import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import DropDown from '../../components/Modules/MenuBar/DropDown';
import Intro from '../../components/Mobile/Top/Intro';
import BoldIndent from '../../components/Mobile/Top/BoldIndent';
import IndentIs from '../../components/Mobile/Top/IndentIs';
import VreviewIs from '../../components/Mobile/Top/VreviewIs';
import PressBox from '../../components/Mobile/Top/PressBox';
import HistoryBox from '../../components/Mobile/Top/HistoryBox';
import Culture from '../../components/Mobile/Bottom/Culture';
import WhatPerson from '../../components/Mobile/Bottom/WhatPerson';
import WorkEnv from '../../components/Mobile/Bottom/WorkEnv';
import Recruit from '../../components/Mobile/Bottom/Recruit';
import WeAre from '../../components/Mobile/Bottom/WeAre';
import ContactUs from '../../components/Mobile/Bottom/ContactUs';
import Conclusion from '../../components/Mobile/Bottom/Conclusion';
import Border from '../../components/Modules/Border';
import Footer from './Footer';

const Container = styled.div`
  /* display: block; */
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TopColor = styled.div`
  background-color: #eae8e8;
`;
const BottomColor = styled.div`
  width: 100%;
  /* padding-left: 481px; */
`;

const MainSection = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const Indentation = styled.div`
  margin-left: 10px;
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
      <DropDown selectedRef={refVal} />
      <TopColor>
        <Border
          position={'relative'}
          margin={'0px 0px -5582px 10px'}
          height={'5580px'}
        />
        <div ref={menuIndent} />
        <Intro />
        <BoldIndent />
        <Border
          position={'relative'}
          margin={'0px 0px -1353px 20px'}
          height={'1278px'}
        />
        <Indentation>
          <IndentIs />
          <Border
            top={'68px'}
            position={'relative'}
            margin={'0px 0px -980px 20px'}
            height={'980px'}
          />
          <div ref={menuVreview} />
          <Indentation>
            <VreviewIs />
          </Indentation>

          <Border
            position={'relative'}
            margin={'67px 0px -527px 30px'}
            height={'420px'}
          />
          <Indentation>
            <Indentation>
              <PressBox />
              <HistoryBox />
            </Indentation>
          </Indentation>
        </Indentation>
      </TopColor>
      <div ref={menuCulture} />
      <BottomColor>
        <Indentation>
          <Culture />
        </Indentation>
        <Indentation>
          <Border
            top={'25px'}
            position={'relative'}
            margin={'0px 0px -852px 20px'}
            height={'816px'}
          />
          <Indentation style={{ marginTop: '65px' }}>
            <Indentation>
              <Indentation>
                <WhatPerson />
                <WorkEnv />
                <div ref={menuRecruit} />
                <Recruit />
              </Indentation>
            </Indentation>
            <div ref={menuWeAre} />
            <WeAre />
            <div ref={menuContact} />
            <ContactUs />
            <Conclusion />
          </Indentation>
        </Indentation>
      </BottomColor>
      <Footer />
    </Container>
  );
};

export default Main;
