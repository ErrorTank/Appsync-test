/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig,AxiosResponse, AxiosError } from 'axios';

const customAxios = async ({
    method,
    url,
    headers,
    params,
    data,
}: AxiosRequestConfig): Promise<AxiosResponse<any> | AxiosError<any>> => {
    return new Promise((resolve, reject) => {
        return axios({
            method,
            url,
            headers: headers || {},
            params: params || {},
            data: data || {}
        })
            .then(resolve)
            .catch(reject);
    });
};

export default customAxios;
