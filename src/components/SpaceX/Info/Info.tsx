import React, { FC } from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 40px;

    & > img {
        border-radius: 50%;
        margin-right: 40px;
        width: 150px;
        height: 150px;
    }

    margin-bottom: 10px;
    border-bottom: 0.5px solid #ccc;
`;

const Info: FC = () => {
    return (
        <InfoWrapper>
            <img src="/logo_spacex.jpeg" alt="logo" />
            <h2>Space X</h2>
        </InfoWrapper>
    );
};

export default Info;
