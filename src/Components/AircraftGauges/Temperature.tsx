/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';

export interface IFuelLevelProps {
  Level: number;
  Title: string;
}

export default class FuelLevel extends React.Component<IFuelLevelProps> {
  public render() {
    const { Level, Title } = this.props;
    return (
      <div className="h-72 w-72 flex flex-col items-center rounded-md shadow-md p-2 dark:bg-gray-800 relative">
        <div
          className=" w-full absolute bottom-0 rounded-md bg-gray-100 dark:bg-gray-700 z-10"
          style={{ height: `${Level}%` }}
        />

        <div className="flex flex-row items-center h-full  z-20">
          <div className="flex flex-col items-center">
            <div className=" font-bold text-xl">FuelLevel - {Title}</div>
            <div className="text-blue-500 text-xl">{Level.toFixed(1)}%</div>
          </div>
        </div>
      </div>
    );
  }
}
