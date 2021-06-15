import React, { FC, useCallback, useState } from 'react';
import { useQuery } from '@apollo/client';
import { getDataFromTree } from '@apollo/react-ssr';

import { TQueryLaunchesPast } from '../src/@types';
import { LAUNCHES_PAST_QUERY } from '../src/graphql';
import { useOnScroll } from '../src/hooks';

import Wrapper from '../src/components/Wrapper';
import Card from '../src/components/SpaceX/Card';
import { BodyWrap, LoadingText } from '../src/components/common';
import { withApollo } from '../src/libs';
import Info from '../src/components/SpaceX/Info';
import ErrorFallback from '../src/components/ErrorFallback';

const [LIMIT, OFFSET] = [12, 0];

const Home: FC = () => {
    const {
        loading,
        error,
        data,
        fetchMore,
    } = useQuery<TQueryLaunchesPast>(LAUNCHES_PAST_QUERY, {
        variables: {
            limit: LIMIT,
            offset: 0,
        },
    });

    const [hasMore, setHasMore] = useState(true);
    const fetchMoreData = useCallback((skip = OFFSET) => {
        fetchMore({
            variables: {
                limit: LIMIT,
                offset: skip * LIMIT,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                setHasMore(!!fetchMoreResult.launchesPast.length);
                return {
                    ...prev,
                    launchesPast: [...prev.launchesPast, ...fetchMoreResult.launchesPast],
                };
            },
        });
    }, []);

    const setElement = useOnScroll(fetchMoreData, OFFSET);

    return (
        <ErrorFallback loading={loading} error={error?.message}>
            <Wrapper>
                <Info />

                <BodyWrap>
                    {data?.launchesPast.length && data.launchesPast.map((launch, index) => (
                        <Card
                            key={`${launch.id}.${launch.launch_date_utc}.${index}`}
                            launch={launch}
                        />
                    ))}

                    {hasMore && <LoadingText ref={setElement}>Loading...</LoadingText>}
                </BodyWrap>
            </Wrapper>
        </ErrorFallback>
    );
};

export default withApollo(Home, { getDataFromTree });
