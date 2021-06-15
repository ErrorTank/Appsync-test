import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import withApollo from 'next-with-apollo';

export default withApollo(
    ({ initialState }) => new ApolloClient({
        uri: 'https://api.spacex.land/graphql',
        cache: new InMemoryCache().restore(initialState || {}),
    }), {
        render: ({ Page, props: { apollo, ...restProps } }) => (
            <ApolloProvider client={apollo}>
                <Page {...restProps} />
            </ApolloProvider>
        ),
    },
);
