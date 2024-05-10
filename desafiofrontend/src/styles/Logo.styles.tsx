import styled, { css } from 'styled-components';

const fonteDaMarvel = css`
    @font-face {
        font-family: 'Marvel';
        src: url('/fonts/MarvelRegular-Dj83.ttf') format('truetype');
        font-weight: 600;
    }
`;

export const StyledLogo = styled.h1`
    ${fonteDaMarvel}
    padding: 0.5rem 1rem;
    display: inline;
    font-size: 3rem;
    background-color: #FF0000;
    color: #FFFFFF;
`;
