/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';

export interface ITemperatureProps {
  Temp: number;
}

export default class Temperature extends React.Component<ITemperatureProps> {
  public render() {
    const { Temp } = this.props;
    return (
      <div className="h-72 w-72 flex flex-col items-center rounded-md shadow-md p-2 dark:bg-gray-800">
        <div className="flex flex-row items-center h-full ">
          <div className="flex flex-col items-center">
            <div className=" font-bold text-xl">Temperature</div>
            <div className="text-blue-500 text-xl">{Temp.toFixed(1)}°C</div>
          </div>
        </div>
      </div>
    );
  }
}
