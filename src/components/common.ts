import styled from 'styled-components';

export const LoadingText = styled.div`
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: #837157;
    padding: 20px;
`;

export const ErrorText = styled.div`
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: red;
    padding: 20px;
`;

export const ResultText = styled.div`
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: red;
    padding: 20px;
`;

export const BodyWrap = styled.div`
    display: flex;
    flex-wrap: wrap
`;

export const Item = styled.div`
    display: block;
    text-align: center;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;

    &:hover {
        opacity: 0.5;
        transition: opacity .15s ease-in-out;
        cursor: pointer
    }
`;

export const RocketImg = styled.img`
    width: 256px;
    height: 256px;
`;
