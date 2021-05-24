/* eslint-disable @typescript-eslint/no-empty-interface */
import * as React from 'react';

function isValidIP(ip: string) {
  const splitIP = ip.split('.');
  let Value = true;
  if (splitIP.length !== 4) {
    return false;
  }
  splitIP.forEach((element) => {
    if (
      parseInt(element, 10) >= 256 ||
      parseInt(element, 10) < 0 ||
      Number.isNaN(Number(element))
    ) {
      Value = false;
    }
  });
  return Value;
}

function isValidPort(port: string) {
  return !(
    parseInt(port, 10) < 0 ||
    parseInt(port, 10) > 65353 ||
    Number.isNaN(Number(port))
  );
}

export interface ISettingsProps {
  IsDarkMode: boolean;
}

export interface ISettingsState {
  host: string;
  port: string;
  hostError: boolean;
  portError: boolean;
  savedSettings: boolean;
}
export default class Settings extends React.Component<
  ISettingsProps,
  ISettingsState
> {
  constructor(props: ISettingsProps) {
    super(props);

    this.state = {
      host: localStorage.getItem('host') || '127.0.0.1',
      port: localStorage.getItem('port') || '8958',
      hostError: false,
      portError: false,
      savedSettings: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
    this.cancelSettings = this.cancelSettings.bind(this);
    this.closeInfoPane = this.closeInfoPane.bind(this);
  }

  handleChange(e: any) {
    switch (e.target.id) {
      case 'host':
        this.setState({ host: e.target.value });

        if (!isValidIP(e.target.value)) {
          this.setState({ hostError: true });
          return;
        }

        this.setState({ hostError: false });

        break;
      case 'port':
        this.setState({ port: e.target.value });
        if (!isValidPort(e.target.value)) {
          this.setState({ portError: true });
          return;
        }
        this.setState({ portError: false });

        break;
      default:
        break;
    }
  }

  saveSettings() {
    const { hostError, portError, host, port } = this.state;
    if (hostError || portError) return;
    this.setState({ savedSettings: true });
    setTimeout(this.closeInfoPane, 3000);
    localStorage.setItem('host', host);
    localStorage.setItem('port', port);
  }

  closeInfoPane() {
    this.setState({ savedSettings: false });
  }

  cancelSettings() {
    this.setState({
      host: localStorage.getItem('host') || '127.0.0.1',
      port: localStorage.getItem('port') || '8958',
      hostError: false,
      portError: false,
    });
  }

  public render() {
    const { hostError, portError, host, port, savedSettings } = this.state;
    const { IsDarkMode } = this.props;
    return (
      <div>
        <div
          className={`fixed bottom-14 right-14 h-24 w-64 ${
            IsDarkMode
              ? 'bg-gray-700 text-white border-gray-800'
              : 'bg-white text-black border-gray-50'
          } rounded-lg transition-all duration-700 shadow-2xl border-2 flex flex-col items-center justify-around  ${
            savedSettings ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-green-500 text-xl ">Saved Settings!</div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="m-2">
              <p
                className={`text-sm ${
                  IsDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}
              >
                Host IP
              </p>

              <input
                className={`px-4 py-2 ${
                  IsDarkMode
                    ? 'bg-gray-700 text-white border-gray-800'
                    : 'bg-white text-black border-gray-200'
                } border-2 rounded-md   ${hostError ? 'border-red-500' : ''}`}
                value={host}
                onChange={this.handleChange}
                id="host"
              />
            </div>

            <div className="m-2">
              <p
                className={`text-sm ${
                  IsDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}
              >
                Port
              </p>
              <input
                className={`px-4 py-2 ${
                  IsDarkMode
                    ? 'bg-gray-700 text-white border-gray-800'
                    : 'bg-white text-black border-gray-200'
                } border-2 rounded-md ${portError ? 'border-red-500' : ''}`}
                value={port}
                onChange={this.handleChange}
                id="port"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-end ">
              <div
                className="mx-2 px-4 py-2 rounded-md  shadow-md cursor-pointer text-white bg-red-500 select-none"
                onClick={this.cancelSettings}
                aria-hidden="true"
              >
                Cancel
              </div>
              <div
                className="mx-2 px-4 py-2 rounded-md shadow-md cursor-pointer text-white bg-blue-500 select-none"
                onClick={this.saveSettings}
                aria-hidden="true"
              >
                Save
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
