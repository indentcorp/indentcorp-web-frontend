import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import MenuOption from '../Components/MenuOption';
import { Titles, MenuList } from '../index';
import useDetectOut from './DetectOut';
import { ReactComponent as CursorUp } from '../../../../assets/cursor_up.svg';
import { ReactComponent as CursorDown } from '../../../../assets/cursor_down.svg';

const Container = styled.div`
  position: fixed;
  background-color: transparent !important;
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
  padding: 16px 30px;
  margin-right: 155.45px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent !important;
  font-family: 'IBM Plex Mono', monospace;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  opacity: 85%;
`;

const FirstOption = styled.div`
  display: flex;
  width: 100%;
`;

const NavWrapper = styled.nav``;
const CursorBox = styled.div``;

const MenuWrapper = styled.ul`
  width: 100vw;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 60;
  padding: 0px 0px 8px 0px;
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
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < selectedRef.menuVreview) {
        setIsSelected(IndentCorp);
      }
      if (
        currentScrollY >= selectedRef.menuVreview &&
        currentScrollY < selectedRef.menuCulture
      ) {
        setIsSelected(Vreview);
      }
      if (
        currentScrollY >= selectedRef.menuCulture &&
        currentScrollY < selectedRef.menuRecruit
      ) {
        setIsSelected(Culture);
      }
      if (
        currentScrollY >= selectedRef.menuRecruit &&
        currentScrollY < selectedRef.menuWeAre
      ) {
        setIsSelected(Recruit);
      }
      if (
        currentScrollY >= selectedRef.menuWeAre &&
        currentScrollY < selectedRef.menuContact
      ) {
        setIsSelected(WeAre);
      }
      if (currentScrollY >= selectedRef.menuContact) {
        setIsSelected(ContactUs);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [selectedRef]);
  return (
    <Container>
      <MenuBar isActive={isActive}>
        <MenuButton onClick={onClick}>{isSelected}</MenuButton>
        <CursorBox
          onClick={onClick}
          style={{
            padding: '24.54px 30px 24.54px 30px',
            position: 'absolute',
            right: '10px',
          }}
        >
          <CursorDown
            style={{
              position: 'absolute',
            }}
          />
        </CursorBox>
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
              <CursorBox
                onClick={onClick}
                style={{
                  padding: '24.54px 30px 24.54px 30px',
                  position: 'absolute',
                  right: '10px',
                }}
              >
                <CursorUp
                  style={{
                    position: 'absolute',
                  }}
                />
              </CursorBox>
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
  );
};

export default DropDown;
