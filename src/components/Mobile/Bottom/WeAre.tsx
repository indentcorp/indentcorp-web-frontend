import React from 'react';
import styled from 'styled-components';
import TeamData from '../../Modules/TeamData';

interface Items {
  id: string;
  position: string;
  poster?: any;
  blogLink?: string | null;
  ghLink?: string | null;
  gridArea: string;
  videoSrc?: string | undefined;
}

declare module 'react' {
  interface HTMLAttributes<T> {
    id?: string;
    class?: string;
    poster?: string;
    type?: string;
    control?: any;
    loops?: any;
    preload?: any;
  }
}

const Frame = ({ TeamData }) => {
  return (
    <>
      {TeamData.data.map((item: Items) => (
        <FrameBox gridArea={item.gridArea}>
          <MediaBox>
            <video
              className='videoInsert'
              muted
              control
              preload='metadata'
              playsInline
              poster={item.poster}
              onClick={(event: any) => event.currentTarget.play()}
              src={item.videoSrc}
              type='video/mp4'
            ></video>
          </MediaBox>
          <NameBox>{item.id}</NameBox>
          <PositionBox>{item.position}</PositionBox>
          {item.blogLink ? (
            <LinkBox
              target='_blank'
              rel='noopener noreferrer'
              href={item.blogLink}
              style={{ paddingRight: '10px' }}
            >
              Blog
            </LinkBox>
          ) : (
              <LinkBox />
            )}
          {item.ghLink ? (
            <LinkBox
              target='_blank'
              rel='noopener noreferrer'
              href={item.ghLink}
            >
              Github
            </LinkBox>
          ) : (
              <LinkBox />
            )}
        </FrameBox>
      ))}
    </>
  );
};
const WeAre = () => {
  return (
    <Container>
      <TitleBox>[↳ We are indenters]</TitleBox>
      <FrameCont>
        <Frame TeamData={TeamData} />
      </FrameCont>
    </Container>
  );
};

export default WeAre;

const Container = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  display: flex;
  flex-direction: column;
  padding-bottom: px;
  background-color: #faf8f8;
  margin-left: 10px;
`;

const TitleBox = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #a0a0a0;
  margin: 80px auto 40px 20px;
`;

const FrameCont = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(104px, 1fr));
  column-gap: 21px;
  row-gap: 35px;
  max-width: 300px;
  padding-bottom: calc(80px + 17px);
  margin-left: 20px;
  @media (max-width: 360px) {
    column-gap: 0px;
    width: 295px;
  }
  @media (max-width: 335px) {
    width: 265px;
  }
`;
const FrameBox = styled.div<{ gridArea: string }>`
  grid-area: ${({ gridArea }) => gridArea};
`;

const MediaBox = styled.div`
  position: relative;
  width: 132px;
  height: 132px;
  @media (max-width: 360px) {
    width: 118px;
    height: 118px;
  }
  @media (max-width: 335px) {
    width: 104px;
    height: 104px;
  }
  cursor: pointer;
  text-align: center;
  video {
    object-fit: contain;
  }
  .videoInsert {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    overflow: hidden;
  }
  video::-webkit-media-controls {
    display: none !important;
  }
`;

const NameBox = styled.div`
  margin: 6px 0px 8px;
  color: #356efb;
  font-size: 14px;
`;

const PositionBox = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: #242424;
  margin: 0px 0px 2px 0px;
`;

const LinkBox = styled.a`
  font-size: 11px;
  font-weight: 500;
  color: #b7b7b7;
  text-decoration: underline;
`;
