/* eslint-disable @typescript-eslint/no-empty-interface */
import * as React from 'react';
import NeoPixelStripComponent from '../Components/NeoPixelStripComponent';
import NeoPixel from '../Arduino/Output/NeoPixel';
import NeoPixelStrip from '../Arduino/Output/NeoPixelStrip';

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
    const Strip: NeoPixelStrip = new NeoPixelStrip([
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        0
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        1
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        2
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        3
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        4
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        5
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        6
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        7
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        8
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        9
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        10
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        11
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        12
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        13
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        14
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        15
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        16
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        17
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        18
      ),
      new NeoPixel(
        [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ],
        19
      ),
    ]);
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
          <NeoPixelStripComponent Strip={Strip} />
        </div>
      </div>
    );
  }
}
