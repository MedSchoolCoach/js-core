import axios, { AxiosInstance } from 'axios';

import { Config } from '../types/config';

/**
 * Contains common services methods.
 */
export abstract class ServiceBase {
    protected readonly httpClient: AxiosInstance;

    protected constructor(config: Config) {
        this.httpClient = axios.create({
            baseURL: config.baseUrl,
            headers: {
                Authorization: config.authToken
            }
        });
    }
}
