import React, { MouseEvent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  display: flex;
  flex-direction: column;
  padding-bottom: 90px;
  background-color: #faf8f8;
  @media (max-width: 1200px) {
  }
`;

const TitleBox = styled.div`
  font-size: 29px;
  font-weight: 500;
  color: #a0a0a0;
  margin: 90px auto 55px 77px;
`;

const FrameCont = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  column-gap: 41px;
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
  margin: 6px 0px 8px;
  color: #356efb;
  font-size: 17px;
`;

const PositionBox = styled.div`
  font-size: 13px;
  font-weight: 300;
  color: #242424;
  margin: 6px 0px;
`;

const LinkBox = styled.a`
  font-size: 11px;
  font-weight: 500;
  color: #b7b7b7;
  text-decoration: underline;
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

const Frame = () => {
  return (
    <>
      {TeamData.data.map((item: Items) => (
        <FrameBox gridArea={item.gridArea}>
          <MediaBox>
            <video
              class='videoInsert'
              control
              loops
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
        <Frame />
      </FrameCont>
    </Container>
  );
};

export default WeAre;

const TeamData = {
  data: [
    {
      id: '1',
      position: 'S/W Engineer',
      blogLink: null,
      ghLink: null,
      gridArea: 'auto',
      poster:
        'https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/images/w_still.jpg',
      videoSrc:
        'https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/videos/180/w_mov_200k.mp4',
    },
    {
      id: 'Alan',
      position: 'S/W Engineer',
      blogLink: 'https://www.44bits.io/ko',
      ghLink: 'https://github.com/raccoonyy/',
      gridArea: 'auto',
      poster: null,
      videoSrc:
        'https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/videos/180/ksh_mov_200k.mp4',
    },
    {
      id: 'Blackbull',
      position: 'S/W Engineer',
      blogLink: 'https://developer-park.tistory.com/',
      ghLink: 'https://github.com/devsehyeon',
      gridArea: 'auto',
      poster: null,
      videoSrc:
        'https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/videos/180/sh2_mod_200k.mp4',
    },
    {
      id: 'Clara',
      position: 'Dog',
      blogLink: null,
      ghLink: null,
      gridArea: 'auto',
      poster:
        'https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/images/clara_still.jpg',
      videoSrc:
        'https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/videos/180/clara_mov_200k.mp4',
    },
    {
      id: 'Daegeun',
      position: 'S/W Engineer',
      blogLink: null,
      ghLink: 'https://github.com/gnkr8',
      gridArea: 'auto',
      poster: null,
      videoSrc:
        'https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/videos/180/kdg_200k.mp4',
    },
    {
      id: 'Gyunho',
      position: 'Operator',
      blogLink: null,
      ghLink: null,
      gridArea: 'auto',
      poster: null,
      videoSrc:
        'https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/videos/180/gh_mov_200k.mp4',
    },
    {
      id: 'Hyeonho',
      position: 'Project Manager',
      blogLink: null,
      ghLink: null,
      gridArea: 'auto',
      poster: null,
      videoSrc:
        'https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/videos/180/khh_200k.mp4',
    },
    {
      id: 'Jack',
      position: 'Come Back !',
      blogLink: null,
      ghLink: null,
      gridArea: 'auto',
      poster:
        'https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/images/jack_still.jpg',
      videoSrc:
        'https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/videos/180/jack_mov_200k.mp4',
    },
    {
      id: 'Jen',
      position: 'CX Designer',
      blogLink: null,
      ghLink: null,
      gridArea: 'auto',
      poster: null,
      videoSrc:
        'https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/videos/180/jy_mov_200k.mp4',
    },
    {
      id: 'MC',
      position: 'Sales Manager',
      blogLink: null,
      ghLink: null,
      gridArea: 'auto',
      poster: null,
      videoSrc:
        'https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/videos/180/ljh_200k.mp4',
    },
    {
      id: 'Morgan',
      position: 'CEO',
      blogLink: null,
      ghLink: null,
      gridArea: 'auto',
      poster:
        'https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/images/ts_still.jpg',
      videoSrc:
        'https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/videos/180/ts_mov_200k.mp4',
    },
    {
      id: 'Wonhee',
      position: 'Operator',
      blogLink: null,
      ghLink: null,
      gridArea: 'auto',
      poster:
        'https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/images/wh_mov_200k.jpg',
      videoSrc:
        'https://d2avi8not6hrpt.cloudfront.net/indentcorp.com/videos/180/wh_mov_200k.mp4',
    },
  ],
};
