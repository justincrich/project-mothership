/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    #root {
        height: 100%;
        width: 100%;
        min-height: 500px;
        font-family: ${props => props.theme.fonts.family};
    }
    html, body, div, span, applet, object, iframe, table, caption, tbody, tfoot, thead, tr, th, td, 
    del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, 
    h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, 
    dl, dt, dd, ol, ul, li, fieldset, form, label, legend {
        vertical-align: baseline;
        font-family: inherit;
        font-weight: inherit;
        font-style: inherit;
        /* font-size: 100%; */
        outline: 0;
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }
    /* remember to define focus styles! */
    :focus {
        outline: 0;
    }
    body {
        background: white;
        line-height: 1;
        color: black;
    }
    ol, ul {
        list-style: none;
    }
    /* tables still need cellspacing="0" in the markup */
    table {
        border-collapse: separate;
        border-spacing: 0;
    }
    caption, th, td {
        font-weight: normal;
        text-align: left;
    }
    /* remove possible quote marks (") from <q> & <blockquote> */
    blockquote:before, blockquote:after, q:before, q:after {
        content: "";
    }
    blockquote, q {
        quotes: "" "";
    }
    html, body, #__next {
        width: 100%;
        height: 100%;
    }
    html {
        font-size: 62.5%;
    }
    a{
        text-decoration: none;
    }
`;

export default GlobalStyle;
