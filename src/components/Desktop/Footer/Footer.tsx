import React from 'react';
import styled from 'styled-components';


const Footer = () => (
  <Container>
    <Content>
      <FooterLogo src='https://d2uayvnwfh5fbf.cloudfront.net/images/78992be4eddf96f0cf806666017f4324.png' />
      <FooterText>
        (주)인덴트코퍼레이션 | 대표: 윤태석 | 연락처:{' '}
        <A href='mailto:contact@indentcorp.com'>contact@indentcorp.com</A> |
        사업자 등록번호: 677-87-01299
      </FooterText>
      <FooterText>
        주소: 서울특별시 성동구 성수동2가 269-63, 성수에이원센터 507호 | 전화번호: 02-536-3474
      </FooterText>
      <FooterText>© Indent corp.</FooterText>
    </Content>
  </Container>
);

export default Footer;

const Container = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: initial;
  padding: 40px;
  padding-left: 127px;
  position: relative;
  z-index: 11;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1191px;
`;

const FooterLogo = styled.img`
  width: 60px;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  font-size: 13px;
  line-height: 22px;
  color: #666666;
`;

const A = styled.a`
  font-size: 13px;
  line-height: 22px;
  color: #666666;
`;
