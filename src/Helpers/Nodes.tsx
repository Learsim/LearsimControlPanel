export enum NodeStatus {
  Online,
  Offline,
}
export interface Node {
  Name: string;
  IP: string;
  Port: number;
  Status: NodeStatus;
}
