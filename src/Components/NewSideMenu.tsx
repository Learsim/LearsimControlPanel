import * as React from 'react';
import ScreenNames from '../Helpers/enums';
import {
  ClientIcon,
  DashboardIcon,
  MapIcon,
  PlaneIcon,
  ServerIcon,
  SettingsIcon,
  ValuesIcon,
  WeatherIcon,
} from '../Helpers/Icons';
import SideMenuItem from './SideMenuItem';

export interface INewSideMenuProps {
  NavigationManager: (target: ScreenNames) => void;
  CurrentScreen: ScreenNames;
  IsExpanded: boolean;
  IsConnected: boolean;
}

export default class NewSideMenu extends React.Component<INewSideMenuProps> {
  constructor(props: INewSideMenuProps) {
    super(props);

    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo(target: ScreenNames) {
    const { NavigationManager } = this.props;
    NavigationManager(target);
  }

  public render() {
    const { CurrentScreen, IsExpanded, IsConnected } = this.props;
    if (!IsConnected && CurrentScreen !== ScreenNames.settings)
      this.navigateTo(ScreenNames.settings);

    const selectedColor = 'dark:bg-gray-700 bg-gray-200';
    return (
      <div
        className={`${
          IsExpanded ? 'w-48' : 'w-16'
        } shadow-md border-r-2 dark:bg-gray-800 bg-white dark:border-gray-800 border-gray-200  h-full transition-all duration-300  `}
      >
        <div className="h-full flex-col flex justify-between">
          <div className="flex flex-col overflow-y-auto overflow-x-hidden smallScroll">
            <SideMenuItem
              selectedColor={selectedColor}
              NavigationManager={this.navigateTo}
              IsExpanded={IsExpanded}
              CurrentScreen={CurrentScreen}
              Target={ScreenNames.dashboard}
              name="Dashboard"
              icon={DashboardIcon}
              IsDisabled={!IsConnected}
            />
            <SideMenuItem
              selectedColor={selectedColor}
              NavigationManager={this.navigateTo}
              IsExpanded={IsExpanded}
              CurrentScreen={CurrentScreen}
              Target={ScreenNames.clients}
              name="Clients"
              icon={ClientIcon}
              IsDisabled={!IsConnected}
            />
            <SideMenuItem
              selectedColor={selectedColor}
              NavigationManager={this.navigateTo}
              IsExpanded={IsExpanded}
              CurrentScreen={CurrentScreen}
              Target={ScreenNames.nodes}
              name="Nodes"
              icon={ServerIcon}
              IsDisabled={!IsConnected}
            />
            <hr className=" border-gray-500" />
            <SideMenuItem
              selectedColor={selectedColor}
              NavigationManager={this.navigateTo}
              IsExpanded={IsExpanded}
              CurrentScreen={CurrentScreen}
              Target={ScreenNames.values}
              name="Values"
              icon={ValuesIcon}
              IsDisabled={!IsConnected}
            />
            <SideMenuItem
              selectedColor={selectedColor}
              NavigationManager={this.navigateTo}
              IsExpanded={IsExpanded}
              CurrentScreen={CurrentScreen}
              Target={ScreenNames.weather}
              name="Conditions"
              icon={WeatherIcon}
              IsDisabled={!IsConnected}
            />
            <SideMenuItem
              selectedColor={selectedColor}
              NavigationManager={this.navigateTo}
              IsExpanded={IsExpanded}
              CurrentScreen={CurrentScreen}
              Target={ScreenNames.aircraftInfo}
              name="Aircraft"
              icon={PlaneIcon}
              IsDisabled={!IsConnected}
            />{' '}
            <SideMenuItem
              selectedColor={selectedColor}
              NavigationManager={this.navigateTo}
              IsExpanded={IsExpanded}
              CurrentScreen={CurrentScreen}
              Target={ScreenNames.map}
              name="Map"
              icon={MapIcon}
              IsDisabled={!IsConnected}
            />{' '}
          </div>
          <SideMenuItem
            selectedColor={selectedColor}
            NavigationManager={this.navigateTo}
            IsExpanded={IsExpanded}
            CurrentScreen={CurrentScreen}
            Target={ScreenNames.settings}
            name="Settings"
            icon={SettingsIcon}
          />
        </div>
      </div>
    );
  }
}
