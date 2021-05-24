import * as React from 'react';
import ScreenNames from '../Helpers/enums';

export interface INewSideMenuProps {
  NavigationManager: (target: ScreenNames) => void;
  CurrentScreen: ScreenNames;
  IsDarkMode: boolean;
  IsExpanded: boolean;
}

export interface INewSideMenuState {}

export default class NewSideMenu extends React.Component<
  INewSideMenuProps,
  INewSideMenuState
> {
  constructor(props: INewSideMenuProps) {
    super(props);

    this.state = {};
    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo(target: ScreenNames) {
    const { NavigationManager } = this.props;
    NavigationManager(target);
  }

  public render() {
    const { CurrentScreen, IsDarkMode, IsExpanded } = this.props;
    return (
      <div
        className={`${
          IsExpanded ? 'w-48' : 'w-16'
        } shadow-md border-r-2 bg-gray-800 border-gray-800 h-full transition-all duration-50  `}
      >
        <div className="h-full flex-col flex justify-between">
          <div className="flex flex-col">
            <div
              className={`h-16 ${
                IsExpanded ? 'w-48  px-3 shadow-lg' : 'w-16 justify-center'
              }  hover:bg-gray-700 cursor-pointer flex items-center transition-all duration-50 ${
                CurrentScreen === ScreenNames.dashboard
                  ? 'bg-gray-700 border-l-4 border-gray-500'
                  : ''
              }`}
              onClick={() => this.navigateTo(ScreenNames.dashboard)}
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 transition-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
              {IsExpanded ? <div className="mx-2 overflow-hidden ">Dashboard</div> : <></>}
            </div>
            <div
              className={`h-16 ${
                IsExpanded ? 'w-48  px-3 shadow-lg' : 'w-16 justify-center'
              } hover:bg-gray-700 cursor-pointer flex items-center transition-all duration-50  ${
                CurrentScreen === ScreenNames.clients
                  ? 'bg-gray-700 border-l-4 border-gray-500'
                  : ''
              } `}
              onClick={() => this.navigateTo(ScreenNames.clients)}
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 transition-none "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
              {IsExpanded ? <div className="mx-2 overflow-hidden">Clients</div> : <></>}
            </div>

            <div
              className={`h-16 ${
                IsExpanded ? 'w-48  px-3 shadow-lg' : 'w-16 justify-center'
              } hover:bg-gray-700 cursor-pointer flex items-center  transition-all duration-50 ${
                CurrentScreen === ScreenNames.values
                  ? 'bg-gray-700 border-l-4 border-gray-500'
                  : ''
              }`}
              onClick={() => this.navigateTo(ScreenNames.values)}
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 transition-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"
                />
              </svg>
              {IsExpanded ? <div className="mx-2 overflow-hidden">Values</div> : <></>}
            </div>
          </div>
          <div
            className={`h-16 ${
              IsExpanded ? 'w-48 px-3 ' : 'w-16 justify-center'
            } hover:bg-gray-700 cursor-pointer flex items-center  transition-all duration-50  ${
              CurrentScreen === ScreenNames.settings ? 'bg-gray-700 ' : ''
            }`}
            onClick={() => this.navigateTo(ScreenNames.settings)}
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 transition-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {IsExpanded ? <div className="mx-2 overflow-hidden">Settings</div> : <></>}
          </div>
        </div>
      </div>
    );
  }
}
