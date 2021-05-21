import axios from 'axios';
import { valuesEndpoint } from './API.Common';

export interface SimVarValue {
  Key: Key;
  Value: string;
}
export interface Key {
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
