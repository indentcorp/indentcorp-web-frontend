import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: JSX.Element;
  top?: string | undefined;
  right?: string | undefined;
  bottom?: string | undefined;
  left?: string | undefined;
  margin?: string | undefined;
  marginTop?: string | undefined;
  marginLeft?: string | undefined;
  height?: string | undefined;
  position?: string | undefined;
  padding?: string | undefined;
  display?: string | undefined;
  float?: string | undefined;
  margin360?: string | undefined;
  height360?: string | undefined;
  top360?: string | undefined;
  margin335?: string | undefined;
  height335?: string | undefined;
  top335?: string | undefined;
}

const BorderStyle = styled.div<{
  marginTop: string | undefined;
  marginLeft: string | undefined;
  height: string | undefined;
  position?: string | undefined;
  padding?: string | undefined;
  margin?: string | undefined;
  top?: string | undefined;
  right?: string | undefined;
  bottom?: string | undefined;
  left?: string | undefined;
  display?: string | undefined;
  float?: string | undefined;
  margin360?: string | undefined;
  height360?: string | undefined;
  top360?: string | undefined;
  margin335?: string | undefined;
  height335?: string | undefined;
  top335?: string | undefined;
}>`
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  position: ${({ position }) => (position ? position : 'relative')};
  border-left: 1px solid #d8d8d8;
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  margin-left: ${({ marginLeft }) => marginLeft};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  z-index: 10;
  width: 1px;
  display: ${({ display }) => display};
  float: ${({ float }) => float};
  @media (max-width: 360px) {
    margin: ${({ margin360 }) => margin360};
    height: ${({ height360 }) => height360};
    top: ${({ top360 }) => top360};
  }
  @media (max-width: 335px) {
    margin: ${({ margin335 }) => margin335};
    height: ${({ height335 }) => height335};
    top: ${({ top335 }) => top335};
  }
`;

const Border = ({
  children,
  marginTop,
  marginLeft,
  height,
  position,
  padding,
  margin,
  top,
  right,
  bottom,
  left,
  display,
  float,
  margin360,
  height360,
  top360,
  margin335,
  height335,
  top335,
}: Props) => {
  return (
    <>
      {children}
      <BorderStyle
        marginTop={marginTop}
        marginLeft={marginLeft}
        height={height}
        position={position}
        padding={padding}
        margin={margin}
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        display={display}
        float={float}
        margin360={margin360}
        height360={height360}
        top360={top360}
        margin335={margin335}
        height335={height335}
        top335={top335}
      />
    </>
  );
};

export default Border;
