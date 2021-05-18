/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import Map from '../Components/Map';
import ScreenNames from '../Helpers/enums';
import Clients from './Clients';

export interface IDashboardProps {
  NavigationManager: (target: ScreenNames) => void;
}

class Dashboard extends React.Component<IDashboardProps> {
  public render() {
    const { NavigationManager } = this.props;
    return (
      <div className="h-full">
        <div className="grid grid-cols-2 h-full gap-4 ">
          <div className="h-full z-0 py-4 pl-4">
            <Map />
          </div>

          <div className="h-full z-0 overflow-y-scroll">
            <Clients NavigationManager={NavigationManager} />
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
