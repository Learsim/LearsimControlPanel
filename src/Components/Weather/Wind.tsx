/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';

export interface IWindProps {
  Speed: number;
  Direction: number;
}

export default class Wind extends React.Component<IWindProps> {
  public render() {
    const { Speed, Direction } = this.props;
    return (
      <div className="h-72 w-72 flex flex-col items-center rounded-md shadow-md p-2 dark:bg-gray-800">
        <svg viewBox="0 0 304.37 319.95">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                className="fill-current stroke-current dark:text-white"
                shapeRendering="geometricPrecision"
                d="M158.15,37.58A120,120,0,1,1,73.3,72.72a119.24,119.24,0,0,1,84.85-35.14m0-5a125,125,0,1,0,125,125,125,125,0,0,0-125-125Z"
              />
              <path
                className="fill-current stroke-current dark:text-white"
                shapeRendering="geometricPrecision"
                d="M177.32,139.12l89.78,18H159.36l18-18m-.17-.54-19,19h114l-95-19Z"
              />
              <polygon
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                points="159.36 158.08 267.11 158.08 177.32 176.03 159.36 158.08"
              />
              <path
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                d="M262.06,158.58l-84.58,16.91-16.91-16.91H262.06m10.09-1h-114l19,19,95-19Z"
              />
              <path
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                d="M158.65,158.78l18,18-18,89.79V158.78m-.5-1.2v114l19-95-19-19Z"
              />
              <polygon
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                points="139.7 176.74 157.65 158.78 157.65 266.53 139.7 176.74"
              />
              <path
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                d="M157.15,160V261.48l-16.91-84.57L157.15,160m1-2.41-19,19,19,95v-114Z"
              />
              <path
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                d="M157,158.08,139,176,49.2,158.08H157m1.2-.5h-114l95,19,19-19Z"
              />
              <polygon
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                points="49.2 157.08 138.99 139.12 156.95 157.08 49.2 157.08"
              />
              <path
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                d="M138.83,139.66l16.91,16.92H54.25l84.58-16.92m.32-1.08-95,19h114l-19-19Z"
              />
              <path
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                d="M157.65,48.63V156.37l-18-18,18-89.78m.5-5.05-19,95,19,19v-114Z"
              />
              <polygon
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                points="158.65 48.63 176.61 138.41 158.65 156.37 158.65 48.63"
              />
              <path
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                d="M159.15,53.68l16.92,84.57-16.92,16.91V53.68m-1-10.1v114l19-19-19-95Z"
              />
              <polygon
                className="weather-compass1"
                points="159.86 158.03 187.4 173.88 210.38 208.35 159.86 158.03"
              />
              <path
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                d="M161.39,159.19l25.83,14.88,21.56,32.34-47.39-47.22m-3-2.33L212,210.29l-24.4-36.59-29.23-16.84Z"
              />
              <polygon
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                points="175.75 185.54 160.73 159.95 208.01 207.05 175.75 185.54"
              />
              <path
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                d="M163.12,163,204,203.81l-27.92-18.62-13-22.15m-4.78-6.18,17,29L212,210.29l-53.63-53.43Z"
              />
              <polygon
                className="weather-compass1"
                points="173.79 128.51 208.26 105.53 157.94 156.04 173.79 128.51"
              />
              <path
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                d="M206.32,107.13l-47.21,47.39L174,128.69l32.34-21.56m3.89-3.19-36.6,24.4-16.84,29.23,53.44-53.63Z"
              />
              <polygon
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                points="206.96 107.9 185.46 140.16 159.86 155.18 206.96 107.9"
              />
              <path
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                d="M203.72,111.87,185.1,139.79l-22.15,13,40.77-40.92m6.49-7.93-53.44,53.63,29-17,24.4-36.6Z"
              />
              <polygon
                className="weather-compass1"
                points="129.15 140.35 106.17 105.88 156.68 156.2 129.15 140.35"
              />
              <path
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                d="M107.76,107.82,155.16,155l-25.84-14.88-21.56-32.34m-3.19-3.88,24.4,36.6,29.24,16.83-53.64-53.43Z"
              />
              <polygon
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                points="108.54 107.18 140.8 128.69 155.81 154.28 108.54 107.18"
              />
              <path
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                d="M112.5,110.42,140.43,129l13,22.15L112.5,110.42m-7.93-6.48,53.64,53.43-17-29-36.6-24.4Z"
              />
              <polygon
                className="weather-compass1"
                points="156.84 158.36 140.98 185.9 106.52 208.88 156.84 158.36"
              />
              <path
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                d="M155.67,159.89,140.8,185.72l-32.34,21.56,47.21-47.39m2.34-3-53.44,53.63,36.6-24.4L158,156.84Z"
              />
              <polygon
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                points="129.32 174.25 154.92 159.23 107.82 206.51 129.32 174.25"
              />
              <path
                shapeRendering="geometricPrecision"
                className="weather-compass2 fill-current stroke-current dark:text-white"
                d="M151.83,161.62l-40.77,40.92,18.62-27.92,22.15-13m6.18-4.78-29,17-24.4,36.6L158,156.84Z"
              />
              <text
                className="weather-compass2 fill-current stroke-current dark:text-white"
                transform="translate(145.55 27.03)"
              >
                N
              </text>
              <text
                className="weather-compass2 fill-current stroke-current dark:text-white"
                transform="translate(0 168.91)"
              >
                W
              </text>
              <text
                className="weather-compass2 fill-current stroke-current dark:text-white"
                transform="translate(148.78 311.41)"
              >
                S
              </text>
              <text
                className="weather-compass2 fill-current stroke-current dark:text-white"
                transform="translate(286.83 168.91)"
              >
                E
              </text>
            </g>
            <g
              id="Layer_2-2"
              data-name="Layer 2"
              transform={`rotate(${Direction - 180} 157.58 158.15)`}
            >
              <path
                className="weather-compass3"
                d="M158.15,153.58a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-4a8,8,0,1,0,8,8,8,8,0,0,0-8-8Z"
              />
              <polygon
                className="weather-compass3"
                points="160.15 88.39 158.15 88.39 156.15 88.39 156.15 152.58 160.15 152.58 160.15 92.25 160.15 88.39"
              />
              <polygon
                className="weather-compass3"
                points="153.15 92.58 163.15 92.58 158.15 83.58 153.15 92.58"
              />
              <polygon
                className="weather-compass3"
                points="156.15 223.58 158.15 223.58 160.15 223.58 160.15 162.58 156.15 162.58 156.15 219.91 156.15 223.58"
              />
              <polygon
                className="weather-compass3"
                points="164.15 231.58 158.15 228.58 158.15 195.58 164.15 198.58 164.15 231.58"
              />
              <polygon
                className="weather-compass3"
                points="158.15 195.58 152.15 198.58 152.15 231.58 158.15 228.58 158.15 195.58"
              />
              <circle
                className="weather-compass3"
                cx="158.15"
                cy="157.58"
                r="2"
              />
            </g>
          </g>
        </svg>
        <div className="flex flex-col items-center">
          <div className=" font-bold text-xl">Windspeed</div>
          <div className="text-blue-500 text-xl">
            {Speed.toPrecision(3)} kts
          </div>
        </div>
      </div>
    );
  }
}
