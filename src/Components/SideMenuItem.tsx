import * as React from 'react';
import ScreenNames from '../Helpers/enums';

export interface ISideMenuItemProps {
  CurrentScreen: ScreenNames;
  Target: ScreenNames;
  selectedColor: string;
  iconColor: string;
  NavigationManager: (target: ScreenNames) => void;
  icon: JSX.Element;
  name: string;
  IsExpanded: boolean;
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
      iconColor,
      Target,
      icon,
      name,
    } = this.props;
    return (
      <div>
        <div
          className={`h-16 ${
            IsExpanded ? 'w-48 shadow-sm' : 'w-16'
          }  hover:${selectedColor} cursor-pointer flex px-3 py-3 items-center transition-all duration-300 ${
            CurrentScreen === Target ? selectedColor : ''
          }`}
          onClick={() => this.navigateTo(Target)}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-10 w-10 ${iconColor}`}
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
