/* eslint-disable @typescript-eslint/no-empty-interface */

import * as React from 'react';
import Settings from '../Components/Settings';

export interface ISettingScreenProps {
  IsDarkMode: boolean;
}

export interface ISettingScreenState {}

class SettingScreen extends React.Component<
  ISettingScreenProps,
  ISettingScreenState
> {
  constructor(props: ISettingScreenProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { IsDarkMode } = this.props;
    return (
      <div className=" w-screen flex justify-evenly h-full">
        <div
          className={` w-1/5 py-24 transition-colors ${
            IsDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
          } h-full`}
        >
          <Settings IsDarkMode={IsDarkMode} />
        </div>
      </div>
    );
  }
}
export default SettingScreen;
