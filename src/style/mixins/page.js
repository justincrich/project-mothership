import { css } from 'styled-components';
import { TEXT_BODY } from './text';

export const PAGE_BODY = css`
	${TEXT_BODY}
	background-color: ${props => props.theme.colors.background};
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
`;
