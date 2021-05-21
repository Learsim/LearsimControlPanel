import { AxiosRequestConfig } from 'axios';

export const statusEndpoint = 'api/status';
export const connectEndpoint = 'api/simconnect/connect';
export const clientsEndpoint = 'api/clients';
export const valuesEndpoint = 'api/getValues';
export const AxiosAPIConfig: AxiosRequestConfig = { timeout: 2 };
