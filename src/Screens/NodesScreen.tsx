/* eslint-disable react/jsx-key */
/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import { LigtningBolt } from '../Helpers/Icons';
import { Node, NodeStatus } from '../Helpers/Nodes';

export interface INodesScreenProps {
  Nodes: Node[];
}

export default class NodesScreen extends React.Component<INodesScreenProps> {
  public render() {
    const { Nodes } = this.props;
    return (
      <div className="flex flex-row p-4 gap-4 flex-wrap">
        {Nodes.map((node) => (
          <div className="h-72 w-72 flex flex-col items-center rounded-md shadow-md p-2 dark:bg-gray-800">
            <div className="flex flex-row items-center h-full ">
              <div className="flex flex-col items-center">
                <div className=" font-bold text-xl">{node.Name}</div>
                <div className="text-blue-500 text-xl">
                  {node.IP}:{node.Port}
                </div>
                <div className="mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-8 w-8 ${
                      node.Status === NodeStatus.Online
                        ? 'text-green-400'
                        : 'text-red-400'
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {LigtningBolt}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
