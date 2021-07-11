/* eslint-disable react/self-closing-comp */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-empty-interface */

import mDNS from 'multicast-dns';
import React from 'react';
import getClients, { Client } from '../API/Clients';
import getNodes from '../API/Nodes';
import getSimVarValues, { LearVar, SimVarValue } from '../API/SimVarValues';
import getStatus from '../API/Status';
import Map from '../Components/Map';
import NewSideMenu from '../Components/NewSideMenu';
import SideMenu from '../Components/SideMenu';
import SimStatusIcon from '../Components/SimStatusIcon';
import ScreenNames from '../Helpers/enums';
import { WarningTriangle } from '../Helpers/Icons';
import { NodeStatus, Node } from '../Helpers/Nodes';
import AircraftScreen from './AircraftScreen';
import ClientsScreen from './Clients';
import ClientScreen from './ClientScreen';
import Dashboard from './Dashboard';
import NewClientScreen from './NewClientScreen';
import NodesScreen from './NodesScreen';
import SettingScreen from './SettingsScreen';
import ValueScreen from './ValueScreen';
import WeatherScreen from './WeatherScreen';

export interface IMainContentProps {}
export interface IMainContentStates {
  CurrentScreen: ScreenNames;
  SimStatus: boolean;
  ServerStatus: boolean;
  Clients: Client[];
  SimVars: SimVarValue[];
  LearVars: LearVar[];
  SideMenuExtended: boolean;
  Nodes: Node[];
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
      ServerStatus: false,
      Clients: [],
      SimVars: [],
      Nodes: [],
      LearVars: [],
      SideMenuExtended: false,
    };
    this.NavigationManager = this.NavigationManager.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.UpdateData(), 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async UpdateData() {
    const URL = `http://${localStorage.getItem('host') || '127.0.0.1'}:${
      localStorage.getItem('port') || '8958'
    }/`;
    getStatus(URL)
      .then((res) =>
        this.setState({ SimStatus: res.SimConnection, ServerStatus: true })
      )
      .catch((res) => {
        console.log('Could not reach API');
        this.setState({ SimStatus: false, ServerStatus: false });
      });
    // await new Promise((resolve) => setTimeout(resolve, 200));
    getClients(URL)
      .then((res) => this.setState({ Clients: res }))
      .catch((res) => null);

    // await new Promise((resolve) => setTimeout(resolve, 200));
    getSimVarValues(URL)
      .then((res) =>
        this.setState({ SimVars: res.SimVars, LearVars: res.LearVars })
      )
      .catch((res) => null);
    getNodes(URL)
      .then((res) => this.setState({ Nodes: res }))
      .catch((res) => null);
  }

  NavigationManager(target: ScreenNames) {
    this.setState({ CurrentScreen: target });
  }

  render() {
    const {
      CurrentScreen,
      SimStatus,
      Clients,
      SimVars,
      SideMenuExtended,
      ServerStatus,
      LearVars,
      Nodes,
    } = this.state;
    let Content: JSX.Element = <></>;
    switch (CurrentScreen) {
      case 0:
        Content = (
          <Dashboard
            NavigationManager={this.NavigationManager}
            SimVars={SimVars}
            clients={Clients}
          />
        );
        break;
      case 1:
        Content = (
          <ClientsScreen
            NavigationManager={this.NavigationManager}
            Clients={Clients}
          />
        );
        break;
      case 2:
        Content = <SettingScreen />;
        break;
      case 3:
        Content = <ClientScreen />;
        break;
      case 4:
        Content = <NewClientScreen IsExtended={SideMenuExtended} />;
        break;
      case 5:
        Content = <ValueScreen SimVars={SimVars} LearVars={LearVars} />;
        break;
      case 6:
        Content = <WeatherScreen SimVars={SimVars} />;

        break;
      case 7:
        Content = <AircraftScreen SimVars={SimVars} />;

        break;
      case 8:
        Content = <NodesScreen Nodes={Nodes} />;
        break;
      case 9:
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
        Content = (
          <div className="p-1 h-full w-full">
            {' '}
            <Map Lat={lat} Lon={lon} Direction={dir} />
          </div>
        );
        break;

      default:
        Content = (
          <Dashboard
            NavigationManager={this.NavigationManager}
            SimVars={SimVars}
            clients={Clients}
          />
        );
    }
    return (
      <div>
        {ServerStatus ? (
          ''
        ) : (
          <div
            className="h-16 w-80 p-4 rounded-xl fixed z-50 bottom-5 right-5 bg-white drop-shadow-lg text-red-500 flex items-center shadow-lg"
            style={{
              animation:
                '4s ease-in-out 0s infinite normal none running alertAnimation',
            }}
          >
            <div className="flex flex-row content-evenly w-full place-content-around ">
              <div className="font-bold self-center	">
                <p>Could not connect to server</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-red-500"
                  style={{ minHeight: '2.5rem', minWidth: '2.5rem' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {WarningTriangle}
                </svg>
              </div>
            </div>
          </div>
        )}
        <div className="pt-20 h-screen">
          <div
            id="content"
            className="overflow-y-auto overflow-x-hidden  transition-colors  h-full w-screen dark:bg-gray-900 dark:text-white bg-white text-black"
          >
            {' '}
            <div className="flex flex-row h-full w-screen">
              <NewSideMenu
                IsExpanded={SideMenuExtended}
                NavigationManager={this.NavigationManager}
                CurrentScreen={CurrentScreen}
                IsConnected={ServerStatus}
              />
              <div className="flex-grow overflow-x-hidden overflow-y-auto">
                {ServerStatus || CurrentScreen === ScreenNames.settings ? (
                  ' '
                ) : (
                  <div className="fixed bg-gray-500 h-full w-full opacity-50 z-20 overflow-hidden" />
                )}
                {Content}
              </div>
            </div>
          </div>
        </div>
        <div
          id="topBar"
          className="w-screen h-20 shadow-lg fixed  transition-colors duration-300 dark:bg-gray-800 dark:text-white bg-white text-black  top-0 flex flex-row  justify-between px-3"
        >
          {/* <SideMenu
            NavigationManager={this.NavigationManager}
            CurrentScreen={CurrentScreen}
            
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
                className={`h-10 w-10 text-gray-600 transform transition-all	 duration-300 ${
                  SideMenuExtended ? ' rotate-180 ' : ' rotate-0	'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  className="transition-all duration-500"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    SideMenuExtended
                      ? `M9 5l7 7-7 7`
                      : `M4 6h16M4 12h16M4 18h16`
                  }
                />
              </svg>
            </div>
          </div>
          <div className="items-center flex-row flex">
            <div className="text-2xl font-bold text-center">
              {ScreenNames[CurrentScreen].charAt(0).toUpperCase() +
                ScreenNames[CurrentScreen].slice(1)
                  .replace(/([A-Z])/g, ' $1')
                  .trim()}
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
