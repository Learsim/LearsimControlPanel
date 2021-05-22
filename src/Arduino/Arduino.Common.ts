import { v4 as uuidv4 } from 'uuid';
import ArduinoComponent from './ArduinoComponent';

export default class Arduino {
  UUID: string;

  Components: ArduinoComponent[];

  constructor() {
    this.UUID = uuidv4();
    this.Components = [];
  }
}
