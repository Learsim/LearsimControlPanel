/* eslint-disable @typescript-eslint/no-empty-interface */
import * as React from 'react';

export interface IFABProps {
  Icon: JSX.Element;
  className: string;
}

export interface IFABState {}

export default class FAB extends React.Component<IFABProps, IFABState> {
  constructor(props: IFABProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { className, Icon } = this.props;
    return <div className={className}>{Icon}</div>;
  }
}
