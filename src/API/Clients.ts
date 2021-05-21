import axios from 'axios';
import { clientsEndpoint } from './API.Common';

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
