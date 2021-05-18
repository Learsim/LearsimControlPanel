/* eslint-disable @typescript-eslint/no-empty-interface */
import * as React from 'react';

export interface INewClientScreenProps {}

export interface INewClientScreenState {}

function saveFile(): void {
  throw new Error('Function not implemented.');
}
export default class NewClientScreen extends React.Component<
  INewClientScreenProps,
  INewClientScreenState
> {
  constructor(props: INewClientScreenProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className="p-4">
        <div>
          <div
            className="rounded bg-red-500 px-4 py-2 w-24 text-center items-center content-center text-white cursor-pointer"
            onClick={() => saveFile()}
            aria-hidden="true"
          >
            Spara
          </div>
        </div>
      </div>
    );
  }
}
