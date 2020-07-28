import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import MenuOption from '../MenuOption';
import { Titles, MenuList } from '../index';

const Container = styled.div`
  position: fixed;
  margin-left: 127px;
  background-color: transparent;
  margin-top: 93px;
  font-family: 'IBM Plex Mono', monospace;
  white-space: pre;
`;

const Border = styled.span`
  position: absolute;
  border-left: 1px solid #d8d8d8;
  margin-left: -15px;
  height: 100%;
  z-index: 10;
`;

const MenuWrapper = styled.div`
  width: 195px;
  height: 239px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IndentCorp = MenuList.IndentCorp;
const Vreview = MenuList.Vreview;
const Culture = MenuList.Culture;
const Recruit = MenuList.Recruit;
const WeAre = MenuList.WeAre;
const ContactUs = MenuList.ContactUs;

const SideBar = ({ selectedRef }: any) => {
  const [isSelected, setIsSelected] = useState<Titles>(IndentCorp);
  const switchMenuHandler = (title: Titles) => {
    setIsSelected(title);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 799) {
        setIsSelected(IndentCorp);
      }
      if (currentScrollY >= 799 && currentScrollY < 1950) {
        setIsSelected(Vreview);
      }
      if (currentScrollY >= 1950 && currentScrollY < 3189) {
        setIsSelected(Culture);
      }
      if (currentScrollY >= 3189 && currentScrollY < 3547) {
        setIsSelected(Recruit);
      }
      if (currentScrollY >= 3547 && currentScrollY < 4831) {
        setIsSelected(WeAre);
      }
      if (currentScrollY >= 4831) {
        setIsSelected(ContactUs);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <Border />
      <MenuWrapper>
        <MenuOption
          isSelected={isSelected === IndentCorp}
          switchMenuHandler={switchMenuHandler}
          title={IndentCorp}
          offsetTop={selectedRef.menuIndent}
        />
        <MenuOption
          isSelected={isSelected === Vreview}
          switchMenuHandler={switchMenuHandler}
          title={Vreview}
          offsetTop={selectedRef.menuVreview}
        />
        <MenuOption
          isSelected={isSelected === Culture}
          switchMenuHandler={switchMenuHandler}
          title={Culture}
          offsetTop={selectedRef.menuCulture}
        />
        <MenuOption
          isSelected={isSelected === Recruit}
          switchMenuHandler={switchMenuHandler}
          title={Recruit}
          offsetTop={selectedRef.menuRecruit}
        />
        <MenuOption
          isSelected={isSelected === WeAre}
          switchMenuHandler={switchMenuHandler}
          title={WeAre}
          offsetTop={selectedRef.menuWeAre}
        />
        <MenuOption
          isSelected={isSelected === ContactUs}
          switchMenuHandler={switchMenuHandler}
          title={ContactUs}
          offsetTop={selectedRef.menuContact}
        />
      </MenuWrapper>
    </Container>
  );
};

export default SideBar;
