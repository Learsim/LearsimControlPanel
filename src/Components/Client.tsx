import * as React from 'react';

export interface IClientProps {

}

export interface IClientState {}

export default class Client extends React.Component<IClientProps, IClientState> {
	constructor(props: IClientProps) {
		super(props);

		this.state = {};
	}



	public render() {
		return (
			<div
				className="bg-white rounded-md shadow-md w-72 h-52 m-2 border-gray-200 border-2 cursor-pointer flex flex-col  py-4 px-5 justify-between "

			>
        <div>


				<div className="flex flex-row  justify-between">
					<div className="text-2xl">Arduino {Math.floor(Math.random()*20)}</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className={"h-8 w-8 " + (Math.random() < 0.5 ? "text-red-400" : "text-green-400")}
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
        <div className="text-gray-500">127.0.0.1</div >
        </div>
				<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi officia.</div >
				<div className="text-gray-500">Last online…</div>
			</div>
		);
	}
}
