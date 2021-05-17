import React from 'react';
import SideMenu from '../Components/SideMenu';
import SimStatusIcon from '../Components/SimStatusIcon';
import { ScreenNames } from '../Helpers/enums';
import Clients from './Clients';
import ClientScreen from './ClientScreen';
import Dashboard from './Dashboard';
import SettingScreen from './SettingsScreen';

class MainContent extends React.Component<{}, { CurrentScreen: ScreenNames }> {
	constructor(props: any) {
		super(props);
		this.state = {
			CurrentScreen: ScreenNames.dashboard
		};
		this.NavigationManager = this.NavigationManager.bind(this);
	}
	NavigationManager(target: ScreenNames) {
		this.setState({ CurrentScreen: target });
	}
	render() {
		let Content: JSX.Element = <></>;
		switch (this.state.CurrentScreen) {
			case 0:
				Content = <Dashboard NavigationManager={this.NavigationManager}/>;
				break;
			case 1:
				Content = <Clients NavigationManager={this.NavigationManager}/>;
				break;
			case 2:
				Content = <SettingScreen />;
				break;
      case 3:
				Content = <ClientScreen />;
				break;
		}
		return (
			<div>
        <div className="pt-20 h-screen">
					<div id="content" className="overflow-y-auto overflow-x-hidden h-full w-screen">
						{' '}
						{Content}
					</div>
				</div>
				<div
					id="topBar"
					className="w-screen h-20 shadow-lg fixed bg-white top-0 flex flex-row  justify-between px-4"
				>
					<SideMenu NavigationManager={this.NavigationManager} CurrentScreen={this.state.CurrentScreen} />
					<div className="items-center flex-row flex">
						<div className="text-2xl font-bold text-center">
							{ScreenNames[this.state.CurrentScreen].charAt(0).toUpperCase() +
								ScreenNames[this.state.CurrentScreen].slice(1)}
						</div>
					</div>
					<SimStatusIcon status={true} NavigationManager={this.NavigationManager}  />
				</div>

			</div>
		);
	}
}
export default MainContent;
