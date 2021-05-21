/* eslint-disable @typescript-eslint/no-empty-interface */
import * as React from 'react';

export interface IClientProps {
  Name: string;
  Adress: string;
  Description: string;
  Online: boolean;
}

export interface IClientState {}

export default class ClientComponent extends React.Component<
  IClientProps,
  IClientState
> {
  constructor(props: IClientProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { Name, Adress, Online, Description } = this.props;
    return (
      <div className="bg-white rounded-md shadow-md w-72 h-52 m-2 border-gray-200 border-2 cursor-pointer flex flex-col  py-4 px-5 justify-between ">
        <div>
          <div className="flex flex-row  justify-between">
            <div className="text-2xl">{Name}</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 ${
                  Online ? 'text-green-400' : 'text-red-400'
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="text-gray-500">{Adress}</div>
        </div>
        <div>{Description}</div>
        <div className="text-gray-500">Last online…</div>
      </div>
    );
  }
}
