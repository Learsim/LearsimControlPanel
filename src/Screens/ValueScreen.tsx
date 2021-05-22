/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/jsx-key */
import * as React from 'react';
import { SimVarValue } from '../API/SimVarValues';

export interface IValueScreenProps {
  SimVars: SimVarValue[];
}

export interface IValueScreenState {}

export default class ValueScreen extends React.Component<
  IValueScreenProps,
  IValueScreenState
> {
  constructor(props: IValueScreenProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { SimVars } = this.props;
    return (
      <div className="w-screen grid  justify-items-center mt-4">
        <div className="w-1/3">
          {SimVars.map((SimVar) => (
            <div>
              <span>{SimVar.Key.Identfier} : </span>
              <span className="font-bold font-mono">{SimVar.Value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
