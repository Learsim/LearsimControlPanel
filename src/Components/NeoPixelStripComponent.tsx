/* eslint-disable react/jsx-key */
import * as React from 'react';
import NeoPixelStrip from '../Arduino/Output/NeoPixelStrip';

export interface INeoPixelStripProps {
  Strip: NeoPixelStrip;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface INeoPixelStripState {}

export default class NeoPixelStripComponent extends React.Component<
  INeoPixelStripProps,
  INeoPixelStripState
> {
  constructor(props: INeoPixelStripProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { Strip } = this.props;
    return (
      <div className="flex flex-row flex-wrap">
        {Strip.NeoPixels.map((pixel) => (
          <div
            className="w-10 h-10 rounded-lg text-lg text-center text-bold content-center border-4 m-1 cursor-pointer select-none"
            style={{
              borderColor: `rgb(${pixel.Color[0]},${pixel.Color[1]},${pixel.Color[2]})`,
            }}
          >
            {pixel.Pos}
          </div>
        ))}
      </div>
    );
  }
}
