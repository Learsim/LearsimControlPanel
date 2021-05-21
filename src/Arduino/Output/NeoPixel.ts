export default class NeoPixel {
  Pos: number;

  Color: number[];

  constructor(Color: number[], Pos: number) {
    this.Color = Color;
    this.Pos = Pos;
  }
}
