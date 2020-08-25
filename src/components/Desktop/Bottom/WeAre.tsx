import React from 'react';
import styled from 'styled-components';
import TeamData from '../../Modules/TeamData';

const Container = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  display: flex;
  flex-direction: column;
  padding-bottom: 109.5px;
  background-color: #faf8f8;
`;

const TitleBox = styled.div`
  line-height: 20px;
  font-size: 29px;
  font-weight: 500;
  color: #a0a0a0;
  margin: 90px auto 55px 77px;
`;

const FrameCont = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  column-gap: 48px;
  row-gap: 46px;
  max-width: 627px;
  margin-left: 83px;
`;
const FrameBox = styled.div<{ gridArea: string }>`
  width: 175px;
  grid-area: ${({ gridArea }) => gridArea};
`;

const MediaBox = styled.div`
  position: relative;
  width: 175px;
  height: 175px;
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
  margin: 10px 0px 0px 0px;
  color: #356efb;
  font-size: 17px;
  width: 39px;
  line-height: 17px;
  /* height: 22px; */
`;

const PositionBox = styled.div`
  font-size: 13px;
  font-weight: 300;
  color: #242424;
  margin: 6px 0px 5px 0px;
  line-height: 13px;
`;

const LinkBox = styled.a`
  font-size: 11px;
  font-weight: 500;
  color: #b7b7b7;
  text-decoration: underline;
  /* margin-top: 10px; */
`;

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
              poster={item.poster}
              onMouseOver={(event) => event.currentTarget.play()}
              onMouseOut={(event) => event.currentTarget.pause()}
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
