import * as React from 'react';

export interface ISettingsProps {}

export interface ISettingsState {
	host: string;
	port: string;
	hostError: boolean;
	portError: boolean;
	savedSettings: boolean;
}
export default class Settings extends React.Component<ISettingsProps, ISettingsState> {
	constructor(props: ISettingsProps) {
		super(props);

		this.state = {
			host: localStorage.getItem('host') || '127.0.0.1',
			port: localStorage.getItem('port') || '8958',
			hostError: false,
			portError: false,
			savedSettings: false
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
		}
	}
	saveSettings() {
		if (this.state.hostError || this.state.portError) return;
		this.setState({ savedSettings: true });
		setTimeout(this.closeInfoPane, 3000);
		localStorage.setItem('host', this.state.host);
		localStorage.setItem('port', this.state.port);
	}
	closeInfoPane() {
		this.setState({ savedSettings: false });
	}
	cancelSettings() {
    this.setState({
      host: localStorage.getItem('host') ||'127.0.0.1',
      port: localStorage.getItem('port') ||'8958',
      hostError:false,
      portError:false
    })
  }

	public render() {
		return (
			<div>
				<div
					className={
						'fixed bottom-14 right-14 h-24 w-64 bg-white rounded-lg transition-all duration-700 shadow-2xl border-2 border-gray-50 flex flex-col items-center justify-around ' +
						(this.state.savedSettings ? 'opacity-100' : 'opacity-0')
					}
				>
					<div className="text-green-500 text-xl">Saved Settings!</div>
				</div>
				<div className="flex flex-col justify-between h-full">
					<div>
						<div className="m-2">
							<p className="text-sm text-gray-800">Hostname</p>

							<input
								className={
									'px-4 py-2 bg-gray-100 border-gray-300 border-2 rounded-md ' +
									(this.state.hostError ? 'border-red-500' : '')
								}
								value={this.state.host}
								onChange={this.handleChange}
								id="host"
							/>
						</div>

						<div className="m-2">
							<p className="text-sm text-gray-800">Port</p>
							<input
								className={
									'px-4 py-2 bg-gray-100 border-gray-300 border-2 rounded-md ' +
									(this.state.portError ? 'border-red-500' : '')
								}
								value={this.state.port}
								onChange={this.handleChange}
								id="port"
							/>
						</div>
					</div>
					<div>
						<div className="flex flex-row justify-end ">
							<div className="mx-2 px-4 py-2 rounded-md shadow-md cursor-pointer text-white bg-red-500 select-none"
              onClick={this.cancelSettings}>
								Cancel
							</div>
							<div
								className="mx-2 px-4 py-2 rounded-md shadow-md cursor-pointer text-white bg-blue-500 select-none"
								onClick={this.saveSettings}
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
function isValidIP(ip: string) {
	let splitIP = ip.split('.');
	let Value = true;
	splitIP.forEach((element) => {

		if (256 <= parseInt(element) || parseInt(element) < 0 || isNaN(Number(element))) {
			Value = false;
		}
	});
	return Value;
}

function isValidPort(port: string) {
	return !(parseInt(port) < 0 || parseInt(port) > 65353 || isNaN(Number(port)));
}