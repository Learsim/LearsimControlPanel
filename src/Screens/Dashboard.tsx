/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import { Client } from '../API/Clients';
import { SimVarValue } from '../API/SimVarValues';
import Map from '../Components/Map';
import ScreenNames from '../Helpers/enums';
import Clients from './Clients';

export interface IDashboardProps {
  NavigationManager: (target: ScreenNames) => void;
  SimVars: SimVarValue[];
  clients: Client[];
}

class Dashboard extends React.Component<IDashboardProps> {
  public render() {
    const { NavigationManager, clients, SimVars } = this.props;
    let lat = 0.0;
    let lon = 0.0;
    let dir = 0.0;

    if (SimVars.length > 0) {
      SimVars.forEach((SimVar) => {
        if (SimVar.Key.Identfier === 'GPS POSITION LON') {
          lon = Number(SimVar.Value.replace(',', '.'));
        } else if (SimVar.Key.Identfier === 'GPS POSITION LAT') {
          lat = Number(SimVar.Value.replace(',', '.'));
        } else if (SimVar.Key.Identfier === 'GPS GROUND TRUE HEADING') {
          dir = Number(SimVar.Value.replace(',', '.'));
        }
      });
    }
    return (
      <div className="h-full">
        <div className="grid grid-cols-2 h-full gap-4 ">
          <div className="h-full z-0 py-4 pl-4">
            <Map Lat={lat} Lon={lon} Direction={dir} />
          </div>

          <div className="h-full z-0 overflow-y-scroll">
            <Clients NavigationManager={NavigationManager} Clients={clients} />
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
