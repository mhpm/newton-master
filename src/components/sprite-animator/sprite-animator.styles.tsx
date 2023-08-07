import styled, { css, keyframes } from "styled-components";

export interface ISpriteImage {
  url: string;
  width: number;
  height: number;
  speed: number;
}

export const getKeyframes = (w: number, s: number) => keyframes`
  100% { background-position: -${w * s}px}
`

export const SpriteImage = styled.div<ISpriteImage>`
  ${(props) => css`
    height: ${props.height}px;
    width:  ${props.width}px;
    background: url(${props.url}) 0px 0px;
    animation: ${getKeyframes(props.width, props.speed)} 0.8s steps(${props.speed}) infinite;
  `}
`