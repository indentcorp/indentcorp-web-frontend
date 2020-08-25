import React from 'react';
import styled from 'styled-components';

const HighlighterStyle = styled.div<{
  position?: string;
  highlightColor: string;
  highlightWidth: string | undefined;
  highlightHeight: string | undefined;
  height1440: string | undefined;
  top: string | undefined;
  top1440?: string | undefined;
  left?: string | undefined;
  right?: string | undefined;
  left1440?: string | undefined;
  zIndex: number | undefined;
  opacity?: string | undefined;
  margin?: string | undefined;
}>`
  position: ${({ position }) => (position ? position : 'relative')};
  background-color: ${({ highlightColor }) => highlightColor};
  width: ${({ highlightWidth }) => (highlightWidth ? highlightWidth : '24px')};
  height: ${({ highlightHeight }) =>
    highlightHeight ? highlightHeight : '92%'};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  z-index: ${({ zIndex }) => (zIndex ? zIndex : 0)};
  opacity: ${({ opacity }) => (opacity ? opacity : '80%')};
  margin: ${({ margin }) => (margin ? margin : '0px')};
  @media (min-width: 1440px) {
    top: ${({ top1440 }) => top1440};
    left: ${({ left1440 }) => left1440};
    height: ${({ height1440 }) => height1440};
  }
`;

interface Props {
  position?: string;
  highlightColor: string;
  highlightWidth?: string | undefined;
  highlightHeight?: string | undefined;
  height1440?: string | undefined;
  top?: string | undefined;
  top1440?: string | undefined;
  left?: string | undefined;
  right?: string | undefined;
  left1440?: string | undefined;
  zIndex?: number | undefined;
  opacity?: string | undefined;
  margin?: string | undefined;
}

const Highlighter = ({
  position,
  highlightColor,
  highlightWidth,
  highlightHeight,
  height1440,
  top,
  left,
  right,
  left1440,
  top1440,
  zIndex,
  opacity,
  margin,
}: Props) => {
  return (
    <HighlighterStyle
      position={position}
      highlightColor={highlightColor}
      highlightWidth={highlightWidth}
      highlightHeight={highlightHeight}
      height1440={height1440}
      top={top}
      top1440={top1440}
      left={left}
      left1440={left1440}
      right={right}
      opacity={opacity}
      zIndex={zIndex}
      margin={margin}
    />
  );
};

export default Highlighter;
