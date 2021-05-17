import * as React from 'react';
import Client from '../Components/Client';
import { ScreenNames } from '../Helpers/enums';

export interface IClientsProps {
  NavigationManager: (target: ScreenNames) => void ;

}

export interface IClientsState {}

export default class Clients extends React.Component<IClientsProps, IClientsState> {
	constructor(props: IClientsProps) {
		super(props);

		this.state = {};
    this.NavigateToClient = this.NavigateToClient.bind(this)

	}

  NavigateToClient(screen:ScreenNames){
    this.props.NavigationManager(screen)
  }

	public render() {
		return <div  className=" w-full p-8 flex-row flex flex-wrap justify-evenly ">
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>
      <div onClick={()=> this.NavigateToClient(ScreenNames.client)}>
      <Client/>
      </div>

    </div>;
	}
}
