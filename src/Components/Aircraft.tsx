/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';

export interface IAirCraftProps {
  RFuel: number;
  LFuel: number;
  TailLight: boolean;
  RightLight: boolean;
  RightProbeLight: boolean;
  LeftLight: boolean;
  LeftProbeLight: boolean;
  LeftWingLight: boolean;
  RightWingLight: boolean;
  LandingLight: boolean;
}

export default class AirCraft extends React.Component<IAirCraftProps> {
  public render() {
    const {
      RFuel,
      LFuel,
      TailLight,
      RightLight,
      RightProbeLight,
      LeftLight,
      LeftProbeLight,
      LeftWingLight,
      RightWingLight,
      LandingLight,
    } = this.props;
    return (
      <div className="max-h-full max-w-full overflow-hidden p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1590 840"
          className="h-full max-h-full overflow-hidden "
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="1364.07"
              y1="566.36"
              x2="1545.35"
              y2="639.6"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#dbe900" />
              <stop offset="0.09" stopColor="#dcea00" stopOpacity="0.96" />
              <stop offset="0.24" stopColor="#e0eb00" stopOpacity="0.85" />
              <stop offset="0.43" stopColor="#e7ee00" stopOpacity="0.67" />
              <stop offset="0.66" stopColor="#f0f200" stopOpacity="0.42" />
              <stop offset="0.91" stopColor="#fbf700" stopOpacity="0.11" />
              <stop offset="0.99" stopColor="#fff900" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1="287"
              y1="184.58"
              x2="287"
              y2="25.59"
              xlinkHref="#linear-gradient"
            />
            <linearGradient
              id="linear-gradient-3"
              x1="436"
              y1="501.25"
              x2="436"
              y2="342.25"
              xlinkHref="#linear-gradient"
            />
            <linearGradient
              id="linear-gradient-4"
              x1="141"
              y1="501.25"
              x2="141"
              y2="342.25"
              xlinkHref="#linear-gradient"
            />
          </defs>
          <g id="Layer_2" data-name="Layer 2">
            <g
              id="Layer_5"
              data-name="Layer 5"
              style={{
                clipPath: `polygon(0% 0%, 100% 0%, 100% ${RFuel}%, 0% ${RFuel}%)`,
              }}
            >
              <path
                className="cls-1"
                d="M327.33,564.67s9.89-4.78,14.78-4.89S357,564.67,357,564.67l-2,73-4.14,16-7.09,3L334.44,655l-3.35-4.35-3.76-17-1.83-20.1.49-24Z"
              />
            </g>
            <g
              id="Layer_6"
              data-name="Layer 6"
              style={{
                clipPath: `polygon(0% 0%, 100% 0%, 100% ${LFuel}%, 0% ${LFuel}%)`,
              }}
            >
              <path
                className="cls-1"
                d="M246.92,565.16s-9.89-4.78-14.78-4.89-14.89,4.89-14.89,4.89l2,73,4.14,16,7.09,3,9.33-1.68,3.35-4.36,3.76-17,1.83-20.1-.49-24Z"
              />
            </g>
            <g id="Layer_4" data-name="Layer 4">
              <polygon
                className="cls-2"
                points="1346.78 558.56 1590 595.67 1553 704.67 1346.78 558.56"
              />
              <polygon className="cls-3" points="287 200 217 0 357 0 287 200" />
            </g>
            <g id="Layer_7" data-name="Layer 7">
              <polygon
                className="cls-4"
                points="436 516.67 366 316.67 506 316.67 436 516.67"
              />
            </g>
            <g id="Layer_8" data-name="Layer 8">
              <polygon
                className="cls-5"
                points="141 516.67 71 316.67 211 316.67 141 516.67"
              />
            </g>
            <g id="Layer_2-2" data-name="Layer 2">
              <path
                className="cls-6"
                d="M564,591.67c-3-1-22-23-22-23l-5-14s-2-8-7-10-213-66-213-66v-159s-7.5-101.5-30-124c-22.5,22.5-30,124-30,124v159s-208,64-213,66-7,10-7,10l-5,14s-19,22-22,23,1,8,1,8,21-13,36-14,170-5,170-5,1,61,5,71,21,2,21,2l2,11h20.89l4.11,29-9,48v22l-68,39v23l90-16h1v9s0,5.5,3,5.5,3-5.5,3-5.5v-9h1l90,16v-23l-68-39v-22l-9-48,4.11-29H329l2-11s17,8,21-2,5-71,5-71,155,4,170,5,36,14,36,14S567,592.67,564,591.67Z"
              />
              <path
                className="cls-6"
                d="M217,580.67v-16s12.33-11,29.67,0c.33,23,6.33,54-4.67,89"
              />
              <path
                className="cls-6"
                d="M332,653.67c-11-35-5-66-4.67-89,17.34-11,29.67,0,29.67,0v16"
              />
            </g>
            <g id="Layer_3" data-name="Layer 3">
              <path
                className="cls-6"
                d="M706,409.67h72c38,21,27,72,102,66l7,7h14.89s55.11-9,83.11,0c0,0,257,8,270,8s18,7,18,7l27,18s68,20,77,33-129,8-256,5c0,0-26.58,4.77-79.29,4.89S935,550.67,831,518.67l-31,1-49-2L754.33,501,749,490.67s-2-4,4-4c0,0-23-53-35-65l-12-3.11Z"
              />
            </g>
            <g id="Layer_9" data-name="Layer 9">
              <circle className="cls-7" cx="535" cy="549.67" r="9" />
            </g>
            <g id="Layer_10" data-name="Layer 10">
              <circle className="cls-8" cx="38" cy="549.67" r="9" />
            </g>
            <g id="Layer_14" data-name="Layer 14">
              <circle className="cls-8" cx="287" cy="828.67" r="9" />
            </g>
            <g id="Layer_15" data-name="Layer 15">
              <circle className="cls-8" cx="706" cy="409.67" r="9" />
            </g>
            <g id="Layer_11" data-name="Layer 11">
              <circle className="cls-9" cx="9" cy="597.67" r="9" />
            </g>
            <g id="Layer_12" data-name="Layer 12">
              <circle className="cls-9" cx="565" cy="597.67" r="9" />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
