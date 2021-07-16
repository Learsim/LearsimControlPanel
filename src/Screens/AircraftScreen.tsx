/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import { SimVarValue } from '../API/SimVarValues';
import AirCraft from '../Components/Aircraft';
import Attitude from '../Components/AircraftGauges/Attitude';
import FuelLevel from '../Components/AircraftGauges/Temperature';

export interface IAircraftValues {
  FuelRCap: number;
  FuelLCap: number;
  FuelRLevel: number;
  FuelLLevel: number;
  ATTITUDEBank: number;
  ATTITUDEPitch: number;
}

export interface IAircraftScreenProps {
  SimVars: SimVarValue[];
}
export default class AircraftScreen extends React.Component<
  IAircraftScreenProps
> {
  public render() {
    const { SimVars } = this.props;
    const AircraftValues: IAircraftValues = {
      FuelRCap: 0,
      FuelLCap: 0,
      FuelRLevel: 0,
      FuelLLevel: 0,
      ATTITUDEBank: 0,
      ATTITUDEPitch: 0,
    };

    SimVars.forEach((element) => {
      if (element.Key.Identfier === 'FUEL TANK LEFT MAIN CAPACITY') {
        AircraftValues.FuelLCap = Number(element.Value.replace(',', '.'));
      } else if (element.Key.Identfier === 'FUEL TANK LEFT MAIN QUANTITY') {
        AircraftValues.FuelLLevel = Number(element.Value.replace(',', '.'));
      } else if (element.Key.Identfier === 'FUEL TANK RIGHT MAIN CAPACITY') {
        AircraftValues.FuelRCap = Number(element.Value.replace(',', '.'));
      } else if (element.Key.Identfier === 'FUEL TANK RIGHT MAIN QUANTITY') {
        AircraftValues.FuelRLevel = Number(element.Value.replace(',', '.'));
      } else if (element.Key.Identfier === 'ATTITUDE INDICATOR BANK DEGREES') {
        AircraftValues.ATTITUDEBank = Number(element.Value.replace(',', '.'));
      } else if (element.Key.Identfier === 'ATTITUDE INDICATOR PITCH DEGREES') {
        AircraftValues.ATTITUDEPitch = Number(element.Value.replace(',', '.'));
      }
    });
    return (
      <div className="flex flex-row p-4 gap-4 flex-wrap">
        <FuelLevel
          Level={(AircraftValues.FuelRLevel / AircraftValues.FuelRCap) * 100}
          Title="Right Tank"
        />
        <FuelLevel
          Level={(AircraftValues.FuelLLevel / AircraftValues.FuelLCap) * 100}
          Title="Left Tank"
        />
        <Attitude
          Pitch={AircraftValues.ATTITUDEPitch}
          Bank={AircraftValues.ATTITUDEBank}
        />

        {/* <AirCraft
          RFuel={100}
          LFuel={100}
          TailLight={false}
          RightLight={false}
          RightProbeLight={false}
          LeftLight={false}
          LeftProbeLight={false}
          LeftWingLight={false}
          RightWingLight={false}
          LandingLight={false}
        /> */}
      </div>
    );
  }
}
