import { keyframes, css } from 'styled-components';
import fadeIn from 'react-animations/lib/fade-in';
import fadeOut from 'react-animations/lib/fade-out';
import { DURATION_MEDIUM } from 'style/constants';

export const FADE_IN_KEYFRAME = keyframes`${fadeIn}`;
export const FADE_OUT_KEYFRAME = keyframes`${fadeOut}`;

export const FADE_IN = css`animation: ${DURATION_MEDIUM} ${FADE_IN_KEYFRAME};`;
export const FADE_OUT = css`animation: ${DURATION_MEDIUM} ${FADE_OUT_KEYFRAME}`;
