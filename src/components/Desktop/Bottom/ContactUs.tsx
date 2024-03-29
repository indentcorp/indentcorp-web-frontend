import React from "react";
import styled from "styled-components";
import Border from "../../Modules/Border/Border";
import Highlighter from "../../Modules/Highlighter/Highlighter";
import MapAPI from "../../Modules/Map/MapAPI";
import WeWork from "./WeWork";

const ContactUs = () => {
  return (
    <Container>
      <TitleBox>[@ contact us]</TitleBox>
      <WeWork />
      <Border
        height={"538px"}
        margin={"60px 0px -538px 0px"}
        padding={"0px 15px 0px 0px"}
      />
      <BorderMargin>
        <TextBox>
          <Highlighter
            highlightColor={"#E6E6E6"}
            highlightWidth={"15px"}
            highlightHeight={"25px"}
            margin={"0px -8px 0px 0px"}
            zIndex={-1}
            top={"-2.5px"}
          />
          contact@indentcorp.com
        </TextBox>
        <TextBox>
          <Highlighter
            highlightColor={"#E6E6E6"}
            highlightWidth={"15px"}
            highlightHeight={"25px"}
            margin={"0px -8px 0px 0px"}
            zIndex={-1}
            top={"-2.5px"}
          />
          +82-2-536-3474
        </TextBox>
        <Border
          height={"404px"}
          margin={"60px 0px -404px 0px"}
          padding={"0px 15px 0px 0px"}
        />
        <BorderMargin>
          <MainOffice>Main Office</MainOffice>
          <AddressBox>
            서울특별시 성동구 성수동2가 269-63,
            <br />
            성수에이원센터 507호
          </AddressBox>
          <MapAPI width={"309px"} height={"309px"} />
        </BorderMargin>
      </BorderMargin>
    </Container>
  );
};

export default ContactUs;

const Container = styled.div`
  font-family: "IBM Plex Mono", monospace;
  width: 785px;
  height: 768px;
  padding-top: 89.5px;
  color: #8e8e8e;
`;

const TitleBox = styled.span`
  font-weight: 500;
  font-size: 29px;
`;

const TextBox = styled.div`
  font-weight: 300;
  font-size: 17px;
  color: #454545;
  display: flex;
  margin-bottom: 23px;
`;

const MainOffice = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #8e8e8e;
`;

const AddressBox = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  font-weight: 300;
  color: #585858;
  margin-top: 15px;
  margin-bottom: 20px;
  line-height: 22px;
`;
const BorderMargin = styled.div`
  margin-left: 15px;
`;
