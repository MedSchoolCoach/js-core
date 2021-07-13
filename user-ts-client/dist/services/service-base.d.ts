import { AxiosInstance } from 'axios';
import { Config } from '../types/config';
/**
 * Contains common services methods.
 */
export declare abstract class ServiceBase {
    protected readonly httpClient: AxiosInstance;
    protected constructor(config: Config);
}
