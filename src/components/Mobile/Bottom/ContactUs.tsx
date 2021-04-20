import React from 'react';
import styled from 'styled-components';
import Border from '../../Modules/Border/Border';
import Highlighter from '../../Modules/Highlighter/Highlighter';
import MapAPI from './MapAPI';
import WeWork from './WeWork';


const ContactUs = () => {
  return (
    <Container>
      <TitleBox>[@ contact us]</TitleBox>
      <Border height={'427px'} margin={'40px 0px -427px 10px'} top={'-2px'} />
      <Indentation>
        <Indentation>
          <TextBox>
            <Highlighter
              top={'-2px'}
              highlightColor={'#E6E6E6'}
              highlightWidth={'10px'}
              highlightHeight={'19px'}
              margin={'0px -5px 0px 0px'}
              zIndex={-1}
            />
            contact@indentcorp.com
          </TextBox>
          <TextBox>
            <Highlighter
              top={'-2px'}
              highlightColor={'#E6E6E6'}
              highlightWidth={'10px'}
              highlightHeight={'19px'}
              margin={'0px -5px 0px 0px'}
              zIndex={-1}
            />
            +82-2-536-3474
          </TextBox>
          <WeWork />
        </Indentation>
        <Border top={'-20px'} height={'304px'} margin={'0px 0px -298px 10px'} />
        <Indentation style={{ position: 'relative', top: '-25px' }}>
          <Indentation>
            <MainOffice>Main Office</MainOffice>
            <AddressBox>
              서울특별시 성동구 성수동2가 269-63,<br />
              성수에이원센터 507호
            </AddressBox>
            <MapAPI />
          </Indentation>
        </Indentation>
      </Indentation>
    </Container>
  );
};

export default ContactUs;

const Container = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  padding-top: 80px;
  color: #8e8e8e;
`;

const TitleBox = styled.span`
  font-weight: 500;
  font-size: 20px;
  margin-left: 10px;
`;

const TextBox = styled.div`
  font-size: 13px;
  font-weight: 300;
  color: #454545;
  display: flex;
  margin-bottom: 15px;
  position: relative;
`;

const MainOffice = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #8e8e8e;
`;

const AddressBox = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-weight: 300;
  color: #585858;
  line-height: 21px;
  margin: 10px 0px 15px 0px;
`;
const Indentation = styled.div`
  margin-left: 10px;
`;
