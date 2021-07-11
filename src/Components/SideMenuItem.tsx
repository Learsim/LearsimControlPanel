import * as React from 'react';
import ScreenNames from '../Helpers/enums';

export interface ISideMenuItemProps {
  CurrentScreen: ScreenNames;
  Target: ScreenNames;
  selectedColor: string;
  NavigationManager: (target: ScreenNames) => void;
  icon: JSX.Element;
  name: string;
  IsExpanded: boolean;
  IsDisabled: boolean;
}

export default class SideMenuItem extends React.Component<ISideMenuItemProps> {
  navigateTo(Target: ScreenNames) {
    const { NavigationManager } = this.props;
    NavigationManager(Target);
  }

  public render() {
    const {
      IsExpanded,
      selectedColor,
      CurrentScreen,
      Target,
      icon,
      name,
      IsDisabled,
    } = this.props;
    return (
      <div>
        <div
          className={`h-16 ${
            IsExpanded ? 'w-48 shadow-sm' : 'w-16'
          }   flex px-3 py-3 items-center transition-all duration-300 ${
            CurrentScreen === Target ? selectedColor : ''
          } ${
            IsDisabled
              ? 'dark:bg-gray-800 dark:text-gray-600 text-gray-300  cursor-default'
              : 'dark:hover:bg-gray-700 hover:bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-white cursor-pointer '
          }`}
          onClick={() => this.navigateTo(Target)}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-10 w-10  ${
              IsDisabled
                ? 'dark:text-gray-600 text-gray-300'
                : 'dark:text-white text-gray-600'
            }`}
            style={{ minHeight: '2.5rem', minWidth: '2.5rem' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {icon}
          </svg>

          {IsExpanded ? (
            <div className="mx-2 overflow-hidden">{name}</div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}
