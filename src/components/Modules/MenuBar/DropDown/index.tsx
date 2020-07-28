import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import MenuOption from '../MenuOption';
import { Titles, MenuList } from '../index';
import useDetectOut from './DetectOut';
import { ReactComponent as CursorUp } from '../../../../assets/cursor_up.svg';
import { ReactComponent as CursorDown } from '../../../../assets/cursor_down.svg';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

const Container = styled.div`
  position: fixed;
  /* margin-left: 127px; */
  background-color: transparent !important;
  /* margin-top: 93px; */
  font-family: 'IBM Plex Mono', monospace;
  white-space: pre;
  z-index: 60;
`;
const MenuBar = styled.div<{
  isActive: boolean;
}>`
  background-color: ${({ isActive }) => (isActive ? '#efeded' : 'transparent')};
  display: ${({ isActive }) => (isActive ? 'none' : 'flex')};
  flex-direction: row;
  height: ${({ isActive }) => (isActive ? '53px' : '0px')};
  width: 100vw;
  color: #454545;
  opacity: 100%;
`;

const MenuButton = styled.p`
  height: 57px;
  border: none;
  padding: 17px 30px;
  margin-right: 155.45px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent !important;
  font-family: 'IBM Plex Mono', monospace;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  /* background-color: #efeded; */
  opacity: 85%;
`;

// const Cursor = styled.img`
//   src: url(https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/images/group_60.svg);
// `;

const FirstOption = styled.div`
  display: flex;
  width: 100%;
`;

const Svg = styled.span``;

const NavWrapper = styled.nav``;

const MenuWrapper = styled.ul`
  width: 100vw;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 60;
  /* padding: 0px 0px 17px 30px; */
  background-color: #efeded;
  white-space: pre;
  opacity: 85%;
`;

export interface Props {
  onClick?: Function;
  tabIndex?: Number;
  isActive?: Boolean;
  iconClassName: String;
  linkClassName: String;
}

const IndentCorp = MenuList.IndentCorp;
const Vreview = MenuList.Vreview;
const Culture = MenuList.Culture;
const Recruit = MenuList.Recruit;
const WeAre = MenuList.WeAre;
const ContactUs = MenuList.ContactUs;

const DropDown = ({ selectedRef }: any) => {
  const dropdownRef = useRef(null);
  const [isSelected, setIsSelected] = useState<Titles>(IndentCorp);
  const [isActive, setIsActive] = useDetectOut(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const switchMenuHandler = (title: Titles) => {
    setIsSelected(title);
  };
  // const ScrollHandler = () => {
  // const navRef = useRef();
  // navRef.current = isSelected
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
  // };
  console.log(selectedRef, 'selectedRef');
  return (
    <Container>
      <MenuBar isActive={isActive}>
        <MenuButton onClick={onClick}>{isSelected}</MenuButton>
        <CursorDown
          onClick={onClick}
          style={{ margin: '22px 0px 0px 0px', float: 'right' }}
        />
      </MenuBar>
      {isActive ? (
        <NavWrapper
          ref={dropdownRef}
          className={`menu ${isActive ? 'active' : 'inactive'}`}
        >
          <MenuWrapper>
            <FirstOption>
              <MenuOption
                fontSize={'14px'}
                isSelected={isSelected === IndentCorp}
                switchMenuHandler={switchMenuHandler}
                title={IndentCorp}
                offsetTop={selectedRef.menuIndent}
              />
              <CursorUp
                onClick={onClick}
                style={{ margin: '22px 0px 0px 155.54px', float: 'right' }}
              />
            </FirstOption>
            <MenuOption
              fontSize={'14px'}
              isSelected={isSelected === Vreview}
              switchMenuHandler={switchMenuHandler}
              title={Vreview}
              offsetTop={selectedRef.menuVreview}
            />
            <MenuOption
              fontSize={'14px'}
              isSelected={isSelected === Culture}
              switchMenuHandler={switchMenuHandler}
              title={Culture}
              offsetTop={selectedRef.menuCulture}
            />
            <MenuOption
              fontSize={'14px'}
              isSelected={isSelected === Recruit}
              switchMenuHandler={switchMenuHandler}
              title={Recruit}
              offsetTop={selectedRef.menuRecruit}
            />
            <MenuOption
              fontSize={'14px'}
              isSelected={isSelected === WeAre}
              switchMenuHandler={switchMenuHandler}
              title={WeAre}
              offsetTop={selectedRef.menuWeAre}
            />
            <MenuOption
              fontSize={'14px'}
              isSelected={isSelected === ContactUs}
              switchMenuHandler={switchMenuHandler}
              title={ContactUs}
              offsetTop={selectedRef.menuContact}
            />
          </MenuWrapper>
        </NavWrapper>
      ) : null}
    </Container>
    // <Container>
    //   <Border />
    //   <MenuWrapper>
    //     <MenuOption
    //       isSelected={isSelected === IndentCorp}
    //       switchMenuHandler={switchMenuHandler}
    //       title={IndentCorp}
    //       offsetTop={selectedRef.menuIndent}
    //     />
    //     <MenuOption
    //       isSelected={isSelected === Vreview}
    //       switchMenuHandler={switchMenuHandler}
    //       title={Vreview}
    //       offsetTop={selectedRef.menuVreview}
    //     />
    //     <MenuOption
    //       isSelected={isSelected === Culture}
    //       switchMenuHandler={switchMenuHandler}
    //       title={Culture}
    //       offsetTop={selectedRef.menuCulture}
    //     />
    //     <MenuOption
    //       isSelected={isSelected === Recruit}
    //       switchMenuHandler={switchMenuHandler}
    //       title={Recruit}
    //       offsetTop={selectedRef.menuRecruit}
    //     />
    //     <MenuOption
    //       isSelected={isSelected === WeAre}
    //       switchMenuHandler={switchMenuHandler}
    //       title={WeAre}
    //       offsetTop={selectedRef.menuWeAre}
    //     />
    //     <MenuOption
    //       isSelected={isSelected === ContactUs}
    //       switchMenuHandler={switchMenuHandler}
    //       title={ContactUs}
    //       offsetTop={selectedRef.menuContact}
    //     />
    //   </MenuWrapper>
    // </Container>
  );
};

export default DropDown;
