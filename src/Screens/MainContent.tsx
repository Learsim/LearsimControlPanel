/* eslint-disable @typescript-eslint/no-empty-interface */

import React from 'react';
import getClients, { Client } from '../API/Clients';
import getSimVarValues, { SimVarValue } from '../API/SimVarValues';
import getStatus from '../API/Status';
import SideMenu from '../Components/SideMenu';
import SimStatusIcon from '../Components/SimStatusIcon';
import ScreenNames from '../Helpers/enums';
import ClientsScreen from './Clients';
import ClientScreen from './ClientScreen';
import Dashboard from './Dashboard';
import NewClientScreen from './NewClientScreen';
import SettingScreen from './SettingsScreen';
import ValueScreen from './ValueScreen';

export interface IMainContentProps {
  IsDarkMode: boolean;
}
export interface IMainContentStates {
  CurrentScreen: ScreenNames;
  SimStatus: boolean;
  Clients: Client[];
  SimVars: SimVarValue[];
}
class MainContent extends React.Component<
  IMainContentProps,
  IMainContentStates
> {
  interval: any;

  constructor(props: IMainContentProps) {
    super(props);
    this.state = {
      CurrentScreen: ScreenNames.dashboard,
      SimStatus: false,
      Clients: [],
      SimVars: [],
    };
    this.NavigationManager = this.NavigationManager.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.UpdateData(), 2500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async UpdateData() {
    const URL = `http://${localStorage.getItem('host') || '127.0.0.1'}:${
      localStorage.getItem('port') || '8958'
    }/`;
    getStatus(URL)
      .then((res) => this.setState({ SimStatus: res.SimConnection }))
      .catch((res) => {
        console.log('Could not reach API');
        this.setState({ SimStatus: false });
      });
    // await new Promise((resolve) => setTimeout(resolve, 200));
    getClients(URL)
      .then((res) => this.setState({ Clients: res }))
      .catch((res) => console.log('Could not reach API'));
    // await new Promise((resolve) => setTimeout(resolve, 200));
    getSimVarValues(URL)
      .then((res) => this.setState({ SimVars: res }))
      .catch((res) => console.log('Could not reach API'));
  }

  NavigationManager(target: ScreenNames) {
    this.setState({ CurrentScreen: target });
  }

  render() {
    const { IsDarkMode } = this.props;

    const { CurrentScreen, SimStatus, Clients, SimVars } = this.state;
    let Content: JSX.Element = <></>;
    switch (CurrentScreen) {
      case 0:
        Content = (
          <Dashboard
            NavigationManager={this.NavigationManager}
            SimVars={SimVars}
            clients={Clients}
            IsDarkMode={IsDarkMode}
          />
        );
        break;
      case 1:
        Content = (
          <ClientsScreen
            NavigationManager={this.NavigationManager}
            Clients={Clients}
            IsDarkMode={IsDarkMode}
          />
        );
        break;
      case 2:
        Content = <SettingScreen IsDarkMode={IsDarkMode} />;
        break;
      case 3:
        Content = <ClientScreen IsDarkMode={IsDarkMode} />;
        break;
      case 4:
        Content = <NewClientScreen IsDarkMode={IsDarkMode} />;
        break;
      case 5:
        Content = <ValueScreen SimVars={SimVars} />;
        break;
      default:
        Content = (
          <Dashboard
            NavigationManager={this.NavigationManager}
            SimVars={SimVars}
            clients={Clients}
            IsDarkMode={IsDarkMode}
          />
        );
    }
    return (
      <div>
        <div className="pt-20 h-screen">
          <div
            id="content"
            className={`overflow-y-auto overflow-x-hidden  transition-colors  h-full w-screen ${
              IsDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
            }`}
          >
            {' '}
            {Content}
          </div>
        </div>
        <div
          id="topBar"
          className={`w-screen h-20 shadow-lg fixed  transition-colors duration-300  ${
            IsDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
          }  top-0 flex flex-row  justify-between px-4`}
        >
          <SideMenu
            NavigationManager={this.NavigationManager}
            CurrentScreen={CurrentScreen}
            IsDarkMode={IsDarkMode}
          />
          <div className="items-center flex-row flex">
            <div className="text-2xl font-bold text-center">
              {ScreenNames[CurrentScreen].charAt(0).toUpperCase() +
                ScreenNames[CurrentScreen].slice(1)}
            </div>
          </div>
          <SimStatusIcon
            status={SimStatus}
            NavigationManager={this.NavigationManager}
          />
        </div>
      </div>
    );
  }
}
export default MainContent;
