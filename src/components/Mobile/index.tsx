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
  overflow-x: hidden;
`;

const TopColor = styled.div`
  background-color: #eae8e8;
`;

const BottomColor = styled.div`
  width: 100%;
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
          margin={'0px 0px -6217px 10px'}
          height={'6217px'}
          margin360={'0px 0px -6106px 10px'}
          height360={'6106px'}
          margin335={'0px 0px -5992px 10px'}
          height335={'5992px'}
        />
        <div ref={menuIndent} />
        <Intro />
        <BoldIndent />
        <Border
          position={'relative'}
          margin={'0px 0px -1277px 20px'}
          height={'1277px'}
          top={'80px'}
        />
        <Indentation>
          <IndentIs />
          <Border
            top={'68px'}
            position={'relative'}
            margin={'0px 0px -986px 20px'}
            height={'986px'}
          />
          <div ref={menuVreview} />
          <Indentation>
            <VreviewIs />
          </Indentation>

          <Border
            position={'relative'}
            margin={'0px 0px -408px 30px'}
            height={'408px'}
            top={'85px'}
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
