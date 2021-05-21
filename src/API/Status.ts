import axios from 'axios';
import { statusEndpoint } from './API.Common';

export interface Status {
  SimConnection: boolean;
}

export default function getStatus(hostname: string): Promise<Status> {
  return axios.get<Status>(hostname.concat(statusEndpoint)).then((res) => {
    return res.data;
  });
}
