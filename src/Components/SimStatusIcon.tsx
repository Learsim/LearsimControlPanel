import * as React from 'react';
import ScreenNames from '../Helpers/enums';

export interface ISimStatusIconProps {
  status: boolean;
  NavigationManager: (target: ScreenNames) => void;
}

export interface ISimStatusIconState {
  tooltipvisible: boolean;
}

class SimStatusIcon extends React.Component<
  ISimStatusIconProps,
  ISimStatusIconState
> {
  constructor(props: ISimStatusIconProps) {
    super(props);
    this.state = {
      tooltipvisible: false,
    };
  }

  public render() {
    const { tooltipvisible } = this.state;
    const { status, NavigationManager } = this.props;
    return (
      <div
        className="items-center flex flex-row"
        onMouseEnter={() => this.setState({ tooltipvisible: true })}
        onMouseLeave={() => this.setState({ tooltipvisible: false })}
      >
        <div>
          <div
            id="tooltip"
            className={`bg-gray-500 text-white absolute  shadow-lg rounded-md right-16 top-2  px-4 py-4 transition-all duration-1000${
              tooltipvisible
                ? 'visible opacity-100'
                : 'hidden opacity-0 pointer-events-none'
            }`}
          >
            {' '}
            Status is {status ? 'Online' : 'Offline'}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-10 w-10 cursor-pointer ${
              status ? 'text-green-500' : 'text-red-500'
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => NavigationManager(ScreenNames.dashboard)}
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </div>
      </div>
    );
  }
}

export default SimStatusIcon;
