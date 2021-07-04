import React from 'react';
import ScreenNames from '../Helpers/enums';

class SideMenu extends React.Component<
  {
    NavigationManager: (target: ScreenNames) => void;
    CurrentScreen: ScreenNames;
  },
  { isOpen: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo(target: ScreenNames) {
    this.setState({ isOpen: false });
    const { NavigationManager } = this.props;
    NavigationManager(target);
  }

  render() {
    const { isOpen } = this.state;
    const { CurrentScreen } = this.props;
    const SelectedColor = 'dark:bg-gray-500 bg-gray-100';
    return (
      <>
        <div
          className={`dark:bg-gray-800 dark:text-white bg-white text-black h-screen fixed z-10 transition-all duration-300 py-4 -left-4 ${
            isOpen ? 'w-1/4 ' : 'w-0'
          }`}
        >
          <div
            className={` w-full h-full transition-all flex flex-col justify-between  ${
              isOpen
                ? 'delay-300 duration-150 opacity-100'
                : 'delay-0 duration-0  opacity-0 pointer-events-none'
            }`}
          >
            <div>
              <div className="text-center text-2xl font-bold">Learsim</div>
              <div
                className={`w-full h-12 text-lg dark:hover:bg-gray-600 hover:bg-gray-200  flex items-center cursor-pointer px-8 my-2 ${
                  CurrentScreen === ScreenNames.dashboard ? SelectedColor : ''
                }`}
                onClick={() => this.navigateTo(ScreenNames.dashboard)}
                aria-hidden="true"
              >
                Dashboard
              </div>
              <div
                className={`w-full h-12 text-lg dark:hover:bg-gray-600 hover:bg-gray-200 flex items-center cursor-pointer px-8 my-2 ${
                  CurrentScreen === ScreenNames.clients ? SelectedColor : ''
                }`}
                onClick={() => this.navigateTo(ScreenNames.clients)}
                aria-hidden="true"
              >
                Clients
              </div>
              <div
                className={`w-full h-12 text-lg dark:hover:bg-gray-600 hover:bg-gray-200 flex items-center cursor-pointer px-8 my-2 ${
                  CurrentScreen === ScreenNames.settings ? SelectedColor : ''
                }`}
                onClick={() => this.navigateTo(ScreenNames.settings)}
                aria-hidden="true"
              >
                Settings
              </div>
              <div
                className={`w-full h-12 text-lg dark:hover:bg-gray-600 hover:bg-gray-200 flex items-center cursor-pointer px-8 my-2 ${
                  CurrentScreen === ScreenNames.values ? SelectedColor : ''
                }`}
                onClick={() => this.navigateTo(ScreenNames.values)}
                aria-hidden="true"
              >
                Values
              </div>
            </div>
            <div
              className={` transition-all flex flex-col items-end px-2 ${
                isOpen
                  ? 'delay-300 duration-150 opacity-100'
                  : 'delay-0 duration-0  opacity-0 pointer-events-none'
              }`}
            >
              <div
                onClick={() => this.setState({ isOpen: false })}
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gray-500 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`h-screen w-screen bg-black z-100 top-0 cursor-pointer fixed z-0 transition-opacity duration-200 ${
            isOpen
              ? 'opacity-50 cursor-pointer'
              : 'opacity-0 cursor-default pointer-events-none'
          }`}
          onClick={() => this.setState({ isOpen: false })}
          aria-hidden="true"
        />

        <div className="h-full flex items-center ">
          <div
            className="cursor-pointer"
            onClick={() => this.setState({ isOpen: true })}
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-600"
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
      </>
    );
  }
}
export default SideMenu;
