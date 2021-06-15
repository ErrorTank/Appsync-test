import React, { FC } from 'react';
import styled from 'styled-components';

import NavBar from '../NavBar';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const CustomContainer = styled.div`
    width: 1200px;
`;

const Wrapper: FC = ({ children }) => {
    return (
        <Container>
            <CustomContainer>
                <NavBar/>
                {children}
            </CustomContainer>
        </Container>
    );
};

export default Wrapper;
