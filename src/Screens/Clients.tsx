/* eslint-disable @typescript-eslint/no-empty-interface */

import * as React from 'react';
import Client from '../Components/Client';
import FAB from '../Components/fab';
import ScreenNames from '../Helpers/enums';

export interface IClientsProps {
  NavigationManager: (target: ScreenNames) => void;
}

export interface IClientsState {}

export default class Clients extends React.Component<
  IClientsProps,
  IClientsState
> {
  constructor(props: IClientsProps) {
    super(props);

    this.state = {};
    this.NavigateToClient = this.NavigateToClient.bind(this);
  }

  NavigateToClient(screen: ScreenNames) {
    const { NavigationManager } = this.props;
    NavigationManager(screen);
  }

  public render() {
    const fabIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    );
    const ClientsElement: JSX.Element[] = [];
    for (let i = 0; i < Math.floor(Math.random() * 1000); i += 1) {
      ClientsElement.push(
        <div
          onClick={() => this.NavigateToClient(ScreenNames.client)}
          aria-hidden="true"
        >
          <Client />
        </div>
      );
    }
    return (
      <div>
        <div
          onClick={() => this.NavigateToClient(ScreenNames.newClient)}
          aria-hidden="true"
        >
          <FAB
            className="w-12 h-12 fixed bottom-10 right-10 bg-green-400 text-white z-10 shadow rounded-full flex flex-row justify-center items-center cursor-pointer hover:bg-green-500 hover:shadow-xl transition-all duration-200"
            Icon={fabIcon}
          />
        </div>
        <div className=" w-full p-8 flex-row flex flex-wrap justify-evenly ">
          {ClientsElement}
        </div>
      </div>
    );
  }
}
