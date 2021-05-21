/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-interface */
import * as React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

export interface ViewPort {
  longitude: number;
  latitude: number;
  zoom: number;
}
export interface IMapProps {
  Lat: number;
  Lon: number;
  Direction: number;
}
export interface IMapState {
  lat: number;
  lon: number;
  connected: boolean;
  lockedon: boolean;
  viewport: ViewPort;
}
class Map extends React.Component<IMapProps, IMapState> {
  interval: any;

  constructor(props: IMapProps) {
    super(props);
    this.state = {
      lat: 60,
      lon: 14,
      connected: false,
      viewport: {
        longitude: 14,
        latitude: 60,
        zoom: 4,
      },
      lockedon: false,
    };
    this.updateViewPort = this.updateViewPort.bind(this);
    this.HandleCheckBox = this.HandleCheckBox.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  HandleCheckBox(event: any) {
    this.setState({ lockedon: event.target.checked });
  }

  updateViewPort(event: any) {
    this.setState({
      viewport: {
        longitude: event.longitude,
        latitude: event.latitude,
        zoom: event.zoom,
      },
    });
  }

  render() {
    const { viewport, lockedon, lat, lon, connected } = this.state;
    const { Lat, Lon, Direction } = this.props;
    return (
      <>
        <ReactMapGL
          className=" rounded-xl z-0"
          width="100%"
          height="100%"
          zoom={viewport.zoom}
          latitude={lockedon ? lat : viewport.latitude}
          longitude={lockedon ? lon : viewport.longitude}
          onViewportChange={this.updateViewPort}
          mapboxApiAccessToken="pk.eyJ1IjoiYXhkcmEiLCJhIjoiY2tuMml3YXhzMGxoMzJub3U3M2E5ZWNiMiJ9.q2lb2ipatPphwA8piWyC1w"
        >
          <Marker latitude={Lat} longitude={Lon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              height="24"
              width="24"
              transform={`rotate(${Direction * (180 / Math.PI)} 0 0 )`}
            >
              <path
                className={
                  connected
                    ? 'text-green-500 fill-current'
                    : 'fill-current text-red-500'
                }
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
              />
            </svg>
          </Marker>
        </ReactMapGL>
      </>
    );
  }
}
export default Map;
