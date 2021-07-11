import axios from "axios";
import { nodesEndpoint } from "./API.Common";
import { Node } from "../Helpers/Nodes";

export default function getNodes(hostname: string): Promise<Node[]> {
  return axios.get<Node[]>(hostname.concat(nodesEndpoint)).then((res) => {
    return res.data;
  });
}
