/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import { SimVarValue } from '../API/SimVarValues';
import Temperature from '../Components/Weather/Temperature';
import Wind from '../Components/Weather/Wind';

export interface IWeatherValues {
  WindSpeed: number;
  WindDirection: number;
  Temperature: number;
}
export interface IWeatherScreenProps {
  SimVars: SimVarValue[];
}

export default class WeatherScreen extends React.Component<
  IWeatherScreenProps
> {
  public render() {
    const { SimVars } = this.props;
    const WeatherValues: IWeatherValues = {
      WindSpeed: 0,
      WindDirection: 0,
      Temperature: 0,
    };

    SimVars.forEach((element) => {
      if (element.Key.Identfier === 'AMBIENT WIND DIRECTION') {
        WeatherValues.WindDirection = Number(element.Value.replace(',', '.'));
      } else if (element.Key.Identfier === 'AMBIENT WIND VELOCITY') {
        WeatherValues.WindSpeed = Number(element.Value.replace(',', '.'));
      } else if (element.Key.Identfier === 'AMBIENT TEMPERATURE') {
        WeatherValues.Temperature = Number(element.Value.replace(',', '.'));
      }
    });
    return (
      <div className="flex flex-row p-4 gap-4 flex-wrap">
        <Wind
          Direction={WeatherValues.WindDirection}
          Speed={WeatherValues.WindSpeed}
        />
        <Temperature Temp={WeatherValues.Temperature} />
      </div>
    );
  }
}
