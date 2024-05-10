import styled from "styled-components";

export const FormFlex = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`;

export const RedSpan = styled.span`
    color: #FF0000;
`;

export const InputField = styled.input`
    width: 100%;
    border: none;
    border-radius: 100px;
    background-color: #FFFFFF;
    color: #D1D1D6;
    font-size: 1rem;
    padding: 1.5rem;
    margin-top: 1rem;
`;

export const SubmitButton = styled.input`
    width: 100%;
    border: none;
    border-radius: 100px;
    background-color: #FF0000;
    color: #FFFFFF;
    font-size: 1rem;
    padding: 1.5rem;
    cursor: pointer;
    margin: 1rem 0;
`;

export const Heading2 = styled.h2`
    color: #FF0000;
    font-size: 1.8rem;
    font-weight: 400;
    margin-top: 1rem;

    @media (max-width: 425px) {
        font-size: 1.4rem;
    }
`;

export const FormLabel = styled.label`
    color: #84848D;
    font-size: 1rem;
    font-weight: 400;
`;

export const Paragraph = styled.p<{ $textAlign?: string}>`
    color: #84848D;
    font-size: 1rem;
    font-weight: 400;
    text-align: ${(props) => props.$textAlign ? props.$textAlign : 'none'};

    @media (max-width: 425px) {
        font-size: 0.8rem;
    }
`;

export const Title = styled.h1`
    color: #FF0000;
    font-size: 1.8rem;
    font-weight: 400;
    margin-top: 1rem;

    @media (max-width: 425px) {
        font-size: 1.4rem;
    }
`;
