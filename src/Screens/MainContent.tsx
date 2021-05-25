/* eslint-disable @typescript-eslint/no-empty-interface */

import React from 'react';
import getClients, { Client } from '../API/Clients';
import getSimVarValues, { SimVarValue } from '../API/SimVarValues';
import getStatus from '../API/Status';
import NewSideMenu from '../Components/NewSideMenu';
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
  SideMenuExtended: boolean;
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
      SideMenuExtended: false,
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

    const {
      CurrentScreen,
      SimStatus,
      Clients,
      SimVars,
      SideMenuExtended,
    } = this.state;
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
        Content = (
          <NewClientScreen
            IsDarkMode={IsDarkMode}
            IsExtended={SideMenuExtended}
          />
        );
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
            <div className="flex flex-row h-full w-screen">
              <NewSideMenu
                IsDarkMode={IsDarkMode}
                IsExpanded={SideMenuExtended}
                NavigationManager={this.NavigationManager}
                CurrentScreen={CurrentScreen}
              />
              <div className="flex-grow">{Content}</div>
            </div>
          </div>
        </div>
        <div
          id="topBar"
          className={`w-screen h-20 shadow-lg fixed  transition-colors duration-300  ${
            IsDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
          }  top-0 flex flex-row  justify-between px-3`}
        >
          {/* <SideMenu
            NavigationManager={this.NavigationManager}
            CurrentScreen={CurrentScreen}
            IsDarkMode={IsDarkMode}
          /> */}
          <div className="h-full flex items-center ">
            <div
              className="cursor-pointer"
              onClick={() =>
                this.setState({
                  SideMenuExtended: !SideMenuExtended,
                })
              }
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
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
