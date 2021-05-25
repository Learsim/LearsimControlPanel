/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable promise/catch-or-return */
/* eslint-disable promise/always-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-empty-interface */
import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/dark';
import light from 'react-syntax-highlighter/dist/esm/styles/hljs/arduino-light';
import GenerateArduinoCode from '../API/ArduinoGenerator';
import getSimVars from '../API/SimVariables';
import Arduino from '../Arduino/Arduino.Common';
import ArduinoComponent, { ComponentType } from '../Arduino/ArduinoComponent';
import EightSegDisplay from '../Arduino/Output/8SegDisplay';
import Display from '../Arduino/Output/Display';
import Led from '../Arduino/Output/Led';
import NeoPixelStrip from '../Arduino/Output/NeoPixelStrip';
import FAB from '../Components/fab';
import OpenURL from '../Helpers/helpers';

export interface INewClientScreenProps {
  IsDarkMode: boolean;
  IsExtended: boolean;
}

export interface INewComponentState {
  io: string;
  ComponentType: string;
  SimVar: string;
  Pin: number;
  Index: number;
  ValueType: string;
}
export interface INewClientScreenState {
  arduino: Arduino;
  ShowNewComponentModal: boolean;
  ShowComponentModal: boolean;
  SimVars: string[];
  NewComponent: INewComponentState;
  ArudinoCode: string;
}

function saveFile(): void {
  throw new Error('Function not implemented.');
}
export default class NewClientScreen extends React.Component<
  INewClientScreenProps,
  INewClientScreenState
> {
  constructor(props: INewClientScreenProps) {
    super(props);

    this.state = {
      arduino: new Arduino(),
      ShowNewComponentModal: false,
      ShowComponentModal: false,
      SimVars: [],
      NewComponent: {
        io: 'Output',
        ComponentType: 'Led',
        SimVar: '',
        Index: 0,
        Pin: 2,
        ValueType: 'bool',
      },
      ArudinoCode: '',
    };
    this.addNewComponent = this.addNewComponent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveEditingComponent = this.saveEditingComponent.bind(this);
  }

  componentDidMount() {
    const URL = `http://${localStorage.getItem('host') || '127.0.0.1'}:${
      localStorage.getItem('port') || '8958'
    }/`;
    const { NewComponent } = this.state;

    getSimVars(URL)
      .then((res) => {
        const NewNewComponent = NewComponent;
        NewNewComponent.SimVar = res[0];
        this.setState({ SimVars: res });
        console.log(res.length);
      })
      .catch(() => null);
  }

  handleChange(Event: any) {
    const { NewComponent } = this.state;
    const tempComponent = NewComponent;
    switch (Event.target.id) {
      case 'io':
        tempComponent.io = Event.target.value;
        break;
      case 'index':
        tempComponent.Index = Event.target.value;

        break;
      case 'simvar':
        tempComponent.SimVar = Event.target.value;

        break;
      case 'type':
        tempComponent.ComponentType = Event.target.value;

        break;
      case 'pin':
        tempComponent.Pin = Event.target.value;

        break;
      case 'valuetype':
        tempComponent.ValueType = Event.target.value;

        break;

      default:
        break;
    }
    this.setState({ NewComponent: tempComponent });
  }

  addNewComponent() {
    const { arduino, NewComponent } = this.state;
    const tempArduino = arduino;
    let component = new ArduinoComponent(
      NewComponent.Pin,
      { Identfier: NewComponent.SimVar, Index: NewComponent.Index },
      ComponentType.Led
    );
    switch (NewComponent.ComponentType) {
      case 'led':
        component = new Led(
          NewComponent.Pin,
          { Identfier: NewComponent.SimVar, Index: NewComponent.Index },
          ComponentType.Led
        );
        break;
      case 'neopixel':
        component = new NeoPixelStrip(
          NewComponent.Pin,
          { Identfier: NewComponent.SimVar, Index: NewComponent.Index },
          ComponentType.NeoPixelStrip
        );
        break;
      case '8segdisplay':
        component = new EightSegDisplay(
          NewComponent.Pin,
          { Identfier: NewComponent.SimVar, Index: NewComponent.Index },
          ComponentType.EightSegDisplay
        );
        break;
      case 'display':
        component = new Display(
          NewComponent.Pin,
          { Identfier: NewComponent.SimVar, Index: NewComponent.Index },
          ComponentType.Display
        );
        break;
      default:
        break;
    }

    tempArduino.Components.push(component);
    this.setState({
      arduino: tempArduino,
      ShowNewComponentModal: false,
      ArudinoCode: GenerateArduinoCode(tempArduino),
      NewComponent: {
        io: 'Output',
        ComponentType: 'Led',
        SimVar: '',
        Index: 0,
        Pin: 2,
        ValueType: 'bool',
      },
    });
  }

  saveEditingComponent() {}

  public render() {
    const fabIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    );

    const {
      ShowNewComponentModal,
      SimVars,
      arduino,
      NewComponent,
      ArudinoCode,
      ShowComponentModal,
    } = this.state;
    const { IsDarkMode, IsExtended } = this.props;
    return (
      <div className="h-full">
        <div className="grid grid-cols-2 h-full">
          <div className="p-4">
            <div className="flex  flex-col  h-full w-full">
              <div className="w-full flex-grow h-full shadow-md rounded-lg p-4">
                <div className="text-4xl font-mono font-bold">
                  Arduino Config
                </div>
              </div>
              <div className="flex-grow h-full overflow-auto mt-2">
                <div className="flex flex-wrap font-mono ">
                  {arduino.Components.map((component) => (
                    <div
                      className="w-72  h-24 rounded-md border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-150 border-2 m-2 cursor-pointer text-center p-2 flex-grow"
                      onClick={() =>
                        this.setState({ ShowComponentModal: true })
                      }
                      aria-hidden="true"
                    >
                      <div className="font-bold text-lg">
                        {component.SimVar.Identfier}
                      </div>
                      <div>{ComponentType[component.Type]}</div>
                      <div>{component.Pin}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div
                onClick={() => this.setState({ ShowNewComponentModal: true })}
                aria-hidden="true"
              >
                <FAB
                  className={`w-12 h-12  fixed bottom-10 right-1/2 ${
                    IsExtended ? '' : 'mr-14'
                  }  bg-green-400  text-white shadow rounded-full flex flex-row justify-center items-center cursor-pointer hover:bg-green-500 hover:shadow-xl transition-all duration-200`}
                  Icon={fabIcon}
                />
              </div>
            </div>
          </div>
          <div
            className="select-text  overflow-auto shadow-xl"
            style={{
              background: IsDarkMode ? 'rgb(68, 68, 68)' : 'white',
              borderLeft: IsDarkMode ? '0' : '2px',
              borderColor: IsDarkMode ? 'transparent' : '#EDEDED',
              borderStyle: IsDarkMode ? 'none' : 'solid',
            }}
          >
            <SyntaxHighlighter language="cpp" style={IsDarkMode ? dark : light}>
              {ArudinoCode}
            </SyntaxHighlighter>
          </div>
        </div>
        <div>
          <div
            className={`h-screen w-screen bg-black top-0  fixed z-0 transition-opacity duration-200  cursor-pointer ${
              ShowNewComponentModal || ShowComponentModal
                ? 'duration-150 opacity-50'
                : ' duration-0  opacity-0 pointer-events-none'
            }`}
            onClick={() =>
              this.setState({
                ShowNewComponentModal: false,
                ShowComponentModal: false,
              })
            }
            aria-hidden="true"
          />
          <div
            className={`fixed top-1/4 right-0 flex  w-screen justify-evenly pointer-events-none ${
              ShowComponentModal
                ? 'duration-150 opacity-100'
                : ' duration-0  opacity-0 pointer-events-none'
            }`}
          >
            <div
              className={`${
                IsDarkMode ? 'bg-gray-800' : 'bg-white'
              } w-72 rounded-lg p-8 text-lg font-bold  uppercase font-mono shadow-lg hover:shadow-2xl transition-all pointer-events-auto ${
                ShowComponentModal
                  ? 'duration-150 opacity-100'
                  : ' duration-0  opacity-0 pointer-events-none'
              }`}
            >
              Edit component
              <div className="mt-2 grid grid-cols-2 justify-items-stretch gap-4">
                <button
                  type="button"
                  className="rounded py-1 px-2 bg-red-400 text-white "
                  onClick={() =>
                    this.setState({
                      ShowComponentModal: !ShowComponentModal,
                    })
                  }
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded py-1 px-2 bg-green-400 text-white"
                  onClick={this.saveEditingComponent}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          <div
            className={`fixed top-24 right-0 flex  w-screen justify-evenly pointer-events-none ${
              ShowNewComponentModal
                ? 'duration-150 opacity-100'
                : ' duration-0  opacity-0 pointer-events-none'
            }`}
          >
            <div
              className={`${
                IsDarkMode ? 'bg-gray-800' : 'bg-white'
              } w-72 rounded-lg p-8 text-lg font-bold uppercase font-mono shadow-lg hover:shadow-2xl transition-all  ${
                ShowNewComponentModal
                  ? 'duration-150 opacity-100 pointer-events-auto'
                  : ' duration-0  opacity-0 pointer-events-none'
              }`}
            >
              Add new component
              <p className="text-sm font-bold font-mono">Type</p>
              <select
                onChange={this.handleChange}
                id="io"
                value={NewComponent.io}
                className={`${
                  IsDarkMode
                    ? 'bg-gray-700 text-white border-gray-800'
                    : 'bg-white text-black border-gray-200'
                } p-1 border rounded-md text-mono`}
              >
                <option value="input" disabled>
                  Input
                </option>
                <option value="output">Output</option>
              </select>
              <p className="text-sm font-bold font-mono mt-2">Component</p>
              <select
                onChange={this.handleChange}
                id="type"
                value={NewComponent.ComponentType}
                className={`${
                  IsDarkMode
                    ? 'bg-gray-700 text-white border-gray-800'
                    : 'bg-white text-black border-gray-200'
                } p-1 border rounded-md text-mono`}
              >
                <option value="led">Led</option>
                <option value="neopixel">NeoPixel</option>
                <option value="display" disabled>
                  Display
                </option>
                <option value="8segdisplay" disabled>
                  8-Segment Display
                </option>
              </select>
              <p className="text-sm font-bold font-mono mt-2">
                SimVar{' '}
                <a
                  className="cursor-pointer text-blue-500"
                  onClick={() =>
                    OpenURL(
                      'https://docs.flightsimulator.com/html/index.htm#t=Programming_Tools%2FSimVars%2FSimulation_Variables.htm'
                    )
                  }
                >
                  ?
                </a>
              </p>
              <select
                onChange={this.handleChange}
                id="simvar"
                value={NewComponent.SimVar}
                className={`${
                  IsDarkMode
                    ? 'bg-gray-700 text-white border-gray-800'
                    : 'bg-white text-black border-gray-200'
                } p-1 border rounded-md text-mono w-full`}
              >
                {SimVars.sort().map((simvar: string) => (
                  <option value={simvar}>{simvar.replaceAll('_', ' ')}</option>
                ))}
              </select>
              <p className="text-sm font-bold font-mono mt-2">
                Value Type{' '}
                <a
                  className="cursor-pointer text-blue-500"
                  onClick={() =>
                    OpenURL(
                      'https://docs.flightsimulator.com/html/index.htm#t=Programming_Tools%2FSimVars%2FSimulation_Variables.htm'
                    )
                  }
                >
                  ?
                </a>
              </p>
              <select
                onChange={this.handleChange}
                id="valuetype"
                value={NewComponent.ValueType}
                className={`${
                  IsDarkMode
                    ? 'bg-gray-700 text-white border-gray-800'
                    : 'bg-white text-black border-gray-200'
                } p-1 border rounded-md text-mono w-full`}
              >
                <option value="bool">Bool</option>
                <option value="string">Text</option>
                <option value="number">Number</option>
              </select>
              <p className="text-sm font-bold font-mono mt-2">Index</p>
              <input
                onChange={this.handleChange}
                id="index"
                value={NewComponent.Index}
                type="number"
                className={`${
                  IsDarkMode
                    ? 'bg-gray-700 text-white border-gray-800'
                    : 'bg-white text-black border-gray-200'
                } p-1 border rounded-md text-mono`}
              />
              <p className="text-sm font-bold font-mono mt-2">Pin</p>
              <input
                onChange={this.handleChange}
                id="pin"
                value={NewComponent.Pin}
                type="number"
                className={`${
                  IsDarkMode
                    ? 'bg-gray-700 text-white border-gray-800'
                    : 'bg-white text-black border-gray-200'
                } p-1 border rounded-md text-mono`}
              />
              <div className="mt-2 grid grid-cols-2 justify-items-stretch gap-4">
                <button
                  type="button"
                  className="rounded py-1 px-2 bg-red-400 text-white "
                  onClick={() =>
                    this.setState({
                      ShowNewComponentModal: !ShowNewComponentModal,
                    })
                  }
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded py-1 px-2 bg-green-400 text-white"
                  onClick={this.addNewComponent}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
