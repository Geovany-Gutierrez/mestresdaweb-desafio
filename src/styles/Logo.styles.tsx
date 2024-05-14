import styled, { css } from 'styled-components';

const FonteDaMarvel = css`
    @font-face {
        font-family: 'Marvel';
        src: url('/fonts/MarvelRegular-Dj83.ttf') format('truetype');
        font-weight: 600;
    }
`;

export const StyledLogo = styled.h1`
    ${FonteDaMarvel}
    padding: 0.5rem 1rem;
    display: inline;
    font-size: 3rem;
    background-color: #FF0000;
    color: #FFFFFF;

    @media screen and (max-width: 1024px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
`;
