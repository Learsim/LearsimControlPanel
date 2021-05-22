import axios from 'axios';
import { enumEndpoint } from './API.Common';

export default function getSimVars(hostname: string): Promise<string[]> {
  return axios.get<string[]>(hostname.concat(enumEndpoint)).then((res) => {
    return res.data;
  });
}
