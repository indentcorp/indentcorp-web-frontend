import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

const Content = styled.div`
  width: 100%;
  max-width: 311px;
`;

const FooterLogo = styled.img`
  width: 60px;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  font-size: 11px;
  line-height: 17px;
  color: #666666;
`;

const Footer = () => (
  <Container>
    <Content>
      <FooterLogo src='https://d2uayvnwfh5fbf.cloudfront.net/images/78992be4eddf96f0cf806666017f4324.png' />
      <FooterText>(주)인덴트코퍼레이션 | 대표: 윤태석</FooterText>
      <FooterText>연락처: contact@indentcorp.com</FooterText>
      <FooterText>사업자 등록번호: 677-87-01299</FooterText>
      <FooterText>주소: 서울특별시 성동구 왕십리로10길 6 805호</FooterText>
      <FooterText>전화번호: 02-536-3474</FooterText>
      <FooterText>© Indent corp.</FooterText>
    </Content>
  </Container>
);

export default Footer;
