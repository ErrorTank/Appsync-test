import { AxiosError } from 'axios';
import React, { FC } from 'react';

import { ErrorText, LoadingText } from '../common';

interface IErrorFallback {
    error?: string
    loading?: boolean
}

const ErrorFallback: FC<IErrorFallback> = ({ children, error, loading }) => {
    if (error) {
        return <ErrorText>Error: {error}</ErrorText>;
    }

    if (loading) {
        return <LoadingText>Loading</LoadingText>;
    }

    return (
        <>{children}</>
    );
};

export default ErrorFallback;
