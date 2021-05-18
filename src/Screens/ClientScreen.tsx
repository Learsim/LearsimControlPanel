/* eslint-disable @typescript-eslint/no-empty-interface */

import * as React from 'react';

export interface IClientScreenProps {}

export interface IClientScreenState {}

export default class ClientScreen extends React.Component<
  IClientScreenProps,
  IClientScreenState
> {
  constructor(props: IClientScreenProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div className="p-4">Jarl</div>;
  }
}
