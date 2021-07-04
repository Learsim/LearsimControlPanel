/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';

export interface IAttitudeProps {
  Pitch: number;
  Bank: number;
}

export default class Attitude extends React.Component<IAttitudeProps> {
  public render() {
    const { Pitch, Bank } = this.props;
    const PitchPercent = ((Pitch - -1.57) * (100 - 0)) / (1.57 - -1.57) + 0;
    const BankPercent = ((Bank - -1.57) * (100 - 0)) / (1.57 - -1.57);

    return (
      <div className="h-72 w-72 flex flex-col items-center rounded-md shadow-md p-2 bg-blue-400 relative">
        <div
          className="w-full absolute bottom-0 rounded-md bg-yellow-600 z-10 "
          style={{
            height: `${100}%`,
            clipPath: `polygon(100% ${BankPercent + (50 - PitchPercent)}%,0% ${
              100 - BankPercent + (50 - PitchPercent)
            }%, 0% 100%, 100% 100%)`,
          }}
        />

        <div className="flex flex-row items-center h-full z-20">
          <div className="flex flex-col items-center">
            <div className=" font-bold text-xl">Attitude</div>
            <div className="flex flex-row">
              <div>
                <span className="font-bold">Pitch: </span>
                <span>{-(Pitch * (180 / Math.PI)).toFixed(1)}° </span>
              </div>
              <div>
                <span className="font-bold">Bank: </span>
                <span>{(Bank * (180 / Math.PI)).toFixed(1)}° </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
