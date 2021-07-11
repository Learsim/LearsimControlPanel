import axios, { AxiosRequestConfig } from 'axios';

export const statusEndpoint = 'api/status';
export const connectEndpoint = 'api/simconnect/connect';
export const clientsEndpoint = 'api/clients';
export const startSimEndpoint = 'api/startSim';
export const clientEndpoint = 'api/client';
export const valuesEndpoint = 'api/getValues';
export const enumEndpoint = 'api/getEnums';
export const nodesEndpoint = 'api/nodes';
export const AxiosAPIConfig: AxiosRequestConfig = { timeout: 2 };
export default function startSimulator(hostname: string) {
  return axios.get(hostname.concat(startSimEndpoint)).then((res) => {
    return res.data;
  });
}
