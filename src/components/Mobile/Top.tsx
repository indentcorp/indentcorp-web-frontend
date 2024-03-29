import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Border from "../Modules/Border/Border";
import DropDown from "../Modules/MenuBar/DropDown/DropDown";
import Conclusion from "./Bottom/Conclusion";
import ContactUs from "./Bottom/ContactUs";
import Culture from "./Bottom/Culture";
import Recruit from "./Bottom/Recruit";
import WeAre from "./Bottom/WeAre";
import WhatPerson from "./Bottom/WhatPerson";
import WorkEnv from "./Bottom/WorkEnv";
import Footer from "./Footer/Footer";
import BoldIndent from "./Top/BoldIndent";
import HistoryBox from "./Top/HistoryBox";
import IndentIs from "./Top/IndentIs";
import Intro from "./Top/Intro";
import PressBox from "./Top/PressBox";
import VreviewIs from "./Top/VreviewIs";

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

const borderLength = '6173'

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
          position={"relative"}
          margin={`0px 0px -${borderLength}px 10px`}
          height={`${borderLength}px`}
          margin360={"0px 0px -6106px 10px"}
          height360={"6106px"}
          margin335={"0px 0px -5992px 10px"}
          height335={"5992px"}
        />
        <div ref={menuIndent} />
        <Intro />
        <BoldIndent />
        <Border
          position={"relative"}
          margin={"0px 0px -1219px 20px"}
          height={"1219px"}
          top={"80px"}
        />
        <Indentation>
          <IndentIs />
          <Border
            top={"68px"}
            position={"relative"}
            margin={"0px 0px -925px 20px"}
            height={"925px"}
          />
          <div ref={menuVreview} />
          <Indentation>
            <VreviewIs />
          </Indentation>

          <Border
            position={"relative"}
            margin={"0px 0px -408px 30px"}
            height={"408px"}
            top={"85px"}
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
            top={"25px"}
            position={"relative"}
            margin={"0px 0px -852px 20px"}
            height={"816px"}
          />
          <Indentation style={{ marginTop: "65px" }}>
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
