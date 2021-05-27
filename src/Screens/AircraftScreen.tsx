import * as React from 'react';
import AirCraft from '../Components/Aircraft';

export interface IAircraftScreenProps {}

export default class AircraftScreen extends React.Component<
  IAircraftScreenProps
> {
  public render() {
    return (
      <div className="h-full overflow-hidden">
        <AirCraft
          RFuel={75}
          LFuel={60}
          TailLight={false}
          RightLight={false}
          RightProbeLight={false}
          LeftLight={false}
          LeftProbeLight={false}
          LeftWingLight={false}
          RightWingLight={false}
          LandingLight={false}
        />
      </div>
    );
  }
}
