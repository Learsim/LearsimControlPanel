/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/jsx-key */
import * as React from 'react';
import { LearVar, SimVarValue } from '../API/SimVarValues';

export interface IValueScreenProps {
  SimVars: SimVarValue[];
  LearVars: LearVar[];
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
    const { SimVars, LearVars } = this.props;
    return (
      <div className="w-full  justify-items-center mt-4 grid grid-cols-2 gap-2 px-2">
        <div className="w-full">
          <h1 className="text-3xl font-bold text-center mb-2">SimVars</h1>
          <div className="rounded-xl shadow-md dark:bg-gray-800 p-4 w-full">
            {SimVars.map((SimVar) => (
              <div>
                <span>
                  {SimVar.Key.Identfier}:{SimVar.Key.Index} :{' '}
                </span>
                <span className="font-bold font-mono">{SimVar.Value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-bold text-center mb-2">LearVars</h1>
          <div className="rounded-xl shadow-md dark:bg-gray-800 p-4 w-full">
            {LearVars.map((variable) => (
              <div>
                <span>{variable.Identifier} : </span>
                <span className="font-bold font-mono">{variable.Value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
