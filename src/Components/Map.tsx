import * as React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

export interface IMapProps{
lat: number,
lon: number,
direction: number,
alt: number,
 connected: boolean,
 lockedon:boolean ,
 viewport: any
}
class Map extends React.Component<{}, IMapProps> {
    interval: any;
    constructor(props: any) {
        super(props);
        this.state = {
            lat: 60,
            lon: 14,
            direction: 0,
            alt: 0,
            connected: false,
            viewport: {
                longitude: 14,
                latitude: 60,
                zoom: 4
            },
            lockedon:false
        }
        this.updateViewPort = this.updateViewPort.bind(this);
        this.HandleCheckBox = this.HandleCheckBox.bind(this);

    }
    componentDidMount() {
        this.interval = setInterval(() => this.GetPlaneInfo(), 1000);
    }
    updateViewPort(event: any) {

        this.setState({
            viewport: {
                longitude: event.longitude,
                latitude: event.latitude,
                zoom: event.zoom
            }
        })
    }
    HandleCheckBox(event:any){
        this.setState({lockedon:event.target.checked})
    }
    GetPlaneInfo() {

    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        return (
            <>
                <ReactMapGL
                    className=" rounded-xl z-0"
                    width="100%"
                    height="100%"
                    zoom={this.state.viewport.zoom}
                    latitude = {this.state.lockedon? this.state.lat: this.state.viewport.latitude}
                    longitude = {this.state.lockedon? this.state.lon: this.state.viewport.longitude}
                    onViewportChange={this.updateViewPort}
                    mapboxApiAccessToken=""
                >
                    <Marker latitude={this.state.lat} longitude={this.state.lon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="24" width="24" transform={`rotate(${this.state.direction*(180/Math.PI)} 0 0 )`}>
                            <path className={this.state.connected ? "text-green-500 fill-current" : "fill-current text-red-500"} d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>

                    </Marker>
                </ReactMapGL>



            </>
        );
    }
}
export default Map
