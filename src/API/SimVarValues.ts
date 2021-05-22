import axios from 'axios';
import { valuesEndpoint } from './API.Common';

export interface SimVarValue {
  Key: SimVar;
  Value: string;
}
export interface SimVar {
  Identfier: string;
  Index: number;
}
export default function getSimVarValues(
  hostname: string
): Promise<SimVarValue[]> {
  return axios
    .get<SimVarValue[]>(hostname.concat(valuesEndpoint))
    .then((res) => {
      return res.data;
    });
}
