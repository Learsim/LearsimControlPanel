import axios from 'axios';
import { valuesEndpoint } from './API.Common';

export interface Values {
  SimVars: SimVarValue[];
  LearVars: LearVar[];
}
export interface SimVarValue {
  Key: SimVar;
  Value: string;
}
export interface SimVar {
  Identfier: string;
  Index: number;
}
export interface LearVar {
  Identifier: string;
  Value: string;
}
export default function getSimVarValues(hostname: string): Promise<Values> {
  return axios.get<Values>(hostname.concat(valuesEndpoint)).then((res) => {
    return res.data;
  });
}
