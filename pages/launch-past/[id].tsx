import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { getDataFromTree } from '@apollo/react-ssr';

import { withApollo } from '../../src/libs';

import Wrapper from '../../src/components/Wrapper';
import Info from '../../src/components/SpaceX/Info';
import { ErrorText, LoadingText, ResultText } from '../../src/components/common';
import { TQueryDetailLaunchPast } from '../../src/@types';
import { LAUNCH_PAST_QUERY } from '../../src/graphql';

const ViewLaunchPast: FC =  () => {
    const router = useRouter();
    const { id } = router.query;

    const {
        loading, error, data,
    } = useQuery<TQueryDetailLaunchPast>(LAUNCH_PAST_QUERY, {
        variables: { id },
    });

    if (error) {
        return <ErrorText>Error</ErrorText>;
    }

    if (loading) {
        return <LoadingText>Loading</LoadingText>;
    }

    return (
        <Wrapper>
            <Info />

            {data.launchesPast.length ? (
                <div>Nahhh</div>
            ) : (
                <ResultText>Result not found</ResultText>
            )}
        </Wrapper>
    );
};

export default withApollo(ViewLaunchPast, { getDataFromTree });
