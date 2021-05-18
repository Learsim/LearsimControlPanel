/* eslint-disable @typescript-eslint/no-empty-interface */
import * as React from 'react';

export interface INewClientScreenProps {}

export interface INewClientScreenState {}

export default class NewClientScreen extends React.Component<
  INewClientScreenProps,
  INewClientScreenState
> {
  constructor(props: INewClientScreenProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div />;
  }
}
