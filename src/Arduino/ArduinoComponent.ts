import { SimVar } from '../API/Clients';

export enum ComponentType {
  EightSegDisplay,
  Display,
  Led,
  NeoPixelStrip,
}
export default class ArduinoComponent {
  Pin: number;

  SimVar: SimVar;

  Type: ComponentType;

  constructor(pin: number, simVar: SimVar, type: ComponentType) {
    this.Pin = pin;
    this.SimVar = simVar;
    this.Type = type;
  }
}
