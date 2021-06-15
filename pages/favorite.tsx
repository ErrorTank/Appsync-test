import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AxiosResponse, AxiosError } from 'axios';

import { TLaunchPast } from '../src/@types';
import Wrapper from '../src/components/Wrapper';
import { axios } from '../src/helpers';
import { BodyWrap, LoadingText } from '../src/components/common';
import Card from '../src/components/SpaceX/Card';
import ErrorFallback from '../src/components/ErrorFallback';

const Title = styled.h1`
    padding: 20px 40px;
    margin-bottom: 10px;
    border-bottom: 0.5px solid #ccc;
`;

const Favorite: FC = () => {
    const [launchPast, setLaunchPast] = useState<TLaunchPast[]>([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios({
                    method: 'GET',
                    url: 'api/favorite',
                });

                setLaunchPast((response as AxiosResponse).data.launchesPast);
            } catch (err) {
                setError((err as AxiosError).message);
            }
        })();
    }, []);

    return (
        <ErrorFallback error={error}>
            <Wrapper>
                <Title>Favorited</Title>
                <BodyWrap>
                    {launchPast?.length ? launchPast.map((launch, index) => (
                        <Card
                            key={`${launch.id}.${launch.launch_date_utc}.${index}`}
                            launch={launch}
                        />
                    )) : (
                        <LoadingText>Empty list favorite</LoadingText>
                    )}
                </BodyWrap>
            </Wrapper>
        </ErrorFallback>
    );
};

export default Favorite;
