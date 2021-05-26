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
  IsDarkMode: boolean;
  IsExpanded: boolean;
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
    const { CurrentScreen, IsDarkMode, IsExpanded } = this.props;
    const bgColor = IsDarkMode ? 'bg-gray-800' : 'bg-white';
    const borderColor = IsDarkMode ? 'border-gray-800' : 'border-gray-200';
    const selectedColor = IsDarkMode ? 'bg-gray-700' : 'bg-gray-200';
    const iconColor = IsDarkMode ? 'text-white' : 'text-gray-600';
    return (
      <div
        className={`${
          IsExpanded ? 'w-48' : 'w-16'
        } shadow-md border-r-2 ${bgColor} ${borderColor}  h-full transition-all duration-300  `}
      >
        <div className="h-full flex-col flex justify-between">
          <div className="flex flex-col">
            <SideMenuItem
              selectedColor={selectedColor}
              NavigationManager={this.navigateTo}
              IsExpanded={IsExpanded}
              CurrentScreen={CurrentScreen}
              Target={ScreenNames.dashboard}
              iconColor={iconColor}
              name="Dashboard"
              icon={DashboardIcon}
            />
            <SideMenuItem
              selectedColor={selectedColor}
              NavigationManager={this.navigateTo}
              IsExpanded={IsExpanded}
              CurrentScreen={CurrentScreen}
              Target={ScreenNames.clients}
              iconColor={iconColor}
              name="Clients"
              icon={ClientIcon}
            />
            <SideMenuItem
              selectedColor={selectedColor}
              NavigationManager={this.navigateTo}
              IsExpanded={IsExpanded}
              CurrentScreen={CurrentScreen}
              Target={ScreenNames.nodes}
              iconColor={iconColor}
              name="Nodes"
              icon={ServerIcon}
            />
            <hr className=" border-gray-500" />
            <SideMenuItem
              selectedColor={selectedColor}
              NavigationManager={this.navigateTo}
              IsExpanded={IsExpanded}
              CurrentScreen={CurrentScreen}
              Target={ScreenNames.values}
              iconColor={iconColor}
              name="Values"
              icon={ValuesIcon}
            />
            <SideMenuItem
              selectedColor={selectedColor}
              NavigationManager={this.navigateTo}
              IsExpanded={IsExpanded}
              CurrentScreen={CurrentScreen}
              Target={ScreenNames.weather}
              iconColor={iconColor}
              name="Conditions"
              icon={WeatherIcon}
            />
            <SideMenuItem
              selectedColor={selectedColor}
              NavigationManager={this.navigateTo}
              IsExpanded={IsExpanded}
              CurrentScreen={CurrentScreen}
              Target={ScreenNames.aircraftInfo}
              iconColor={iconColor}
              name="Aircraft"
              icon={PlaneIcon}
            />{' '}
            <SideMenuItem
              selectedColor={selectedColor}
              NavigationManager={this.navigateTo}
              IsExpanded={IsExpanded}
              CurrentScreen={CurrentScreen}
              Target={ScreenNames.map}
              iconColor={iconColor}
              name="Map"
              icon={MapIcon}
            />{' '}
          </div>
          <SideMenuItem
            selectedColor={selectedColor}
            NavigationManager={this.navigateTo}
            IsExpanded={IsExpanded}
            CurrentScreen={CurrentScreen}
            Target={ScreenNames.settings}
            iconColor={iconColor}
            name="Settings"
            icon={SettingsIcon}
          />
        </div>
      </div>
    );
  }
}
