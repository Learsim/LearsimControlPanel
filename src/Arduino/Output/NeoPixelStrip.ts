import ArduinoComponent from '../Arduino.Common';
import NeoPixel from './NeoPixel';

export default class NeoPixelStrip extends ArduinoComponent {
  NeoPixels: NeoPixel[];

  constructor(NeoPixels: NeoPixel[]) {
    super();
    this.NeoPixels = NeoPixels;
  }
}
