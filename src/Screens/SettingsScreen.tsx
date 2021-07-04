/* eslint-disable @typescript-eslint/no-empty-interface */

import * as React from 'react';
import Settings from '../Components/Settings';

export interface ISettingScreenProps {}

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
    return (
      <div className=" w-screen flex justify-evenly h-full">
        <div className="w-1/3 py-24 transition-colors dark:bg-gray-900 dark:text-white bg-white text-black h-full">
          <Settings />
        </div>
      </div>
    );
  }
}
export default SettingScreen;
