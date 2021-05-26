import axios from 'axios';
import Arduino from '../Arduino/Arduino.Common';
import { clientEndpoint, clientsEndpoint } from './API.Common';

export interface Client {
  IsOpen: boolean;
  Config: Config;
}
export interface Config {
  ConnectionType: ConnectionType;
  guid: string;
  Name: string;
  Adress: string;
  StaticPort: boolean;
  Baud: number;
  Description: string;
  Port: number;
  bindings: Binding[];
}
export interface Binding {
  ValueName: string;
  Type: number;
  Input: boolean;
  SimVar: SimVar;
  UpdateRate: number;
}
export interface SimVar {
  Identfier: string;
  Index: number;
}

export default function getClients(hostname: string): Promise<Client[]> {
  return axios.get<Client[]>(hostname.concat(clientsEndpoint)).then((res) => {
    return res.data;
  });
}
export function AddClient(hostname: string, arduino: Arduino) {
  console.log(JSON.stringify(arduino));
  return axios
    .post(hostname.concat(clientEndpoint), JSON.stringify(arduino))
    .then((res) => {
      return res.data;
    });
}
export enum ConnectionType {
  SERIAL,
  TCP,
  UDP,
}
export enum ConnectionState {
  Disconnected,
  Connected,
  ConnectionError,
}
