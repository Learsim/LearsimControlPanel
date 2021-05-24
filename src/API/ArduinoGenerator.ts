/* eslint-disable prefer-const */
import Arduino from '../Arduino/Arduino.Common';
import { ComponentType } from '../Arduino/ArduinoComponent';
import EightSegDisplay from '../Arduino/Output/8SegDisplay';
import Display from '../Arduino/Output/Display';
import Led from '../Arduino/Output/Led';
import NeoPixelStrip from '../Arduino/Output/NeoPixelStrip';

const BaseCode = `
{CR}

#include "Learsim.h"
#include <ArduinoJson.h>
{INCLUDES}
{INIT}
MessangeHandler msghndlr;
void setup()
{
{SETUP}
  msghndlr.Init(2048);
  Serial.begin(9600);
}
void loop()
{
  {LOOP}
  if (Serial.available())
    {
      if (msghndlr.DeserializeJson())
      {
        {DESJSON}         
      }
    }
}

{CUSTOMFUNCS}

`;
export default function GenerateArduinoCode(arduino: Arduino): string {
  let Leds: Led[] = [];
  let Displays: Display[] = [];
  let NeoPixels: NeoPixelStrip[] = [];
  let EightSegDisplays: EightSegDisplay[] = [];
  let Init = '';
  let Setup = '';
  let CopyRight = '';
  let CustomFuncs = '';
  let Loop = '';
  let Includes = '';
  let DesJson = '';
  Init += `string id = "${arduino.UUID}";`;
  arduino.Components.forEach((element) => {
    switch (element.Type) {
      case ComponentType.Display:
        Displays.push(element);
        break;
      case ComponentType.Led:
        Leds.push(element);
        break;
      case ComponentType.NeoPixelStrip:
        NeoPixels.push(element);
        break;
      case ComponentType.EightSegDisplay:
        EightSegDisplays.push(element);
        break;
      default:
        break;
    }
  });
  if (Leds.length > 1) {
    Init += `\nLed leds[${Leds.length}]\n`;
    Setup += `\n ${Leds.map(
      (led, index) =>
        `\n  leds[${index}] = new Led(${
          led.Pin
        },"${`${led.SimVar.Identfier}:${led.SimVar.Index}`}");`
    ).join('')} `;
  } else if (Leds.length === 1) {
    Init += `\nLed led;`;
    Setup += `\n  led = new Led(${
      Leds[0].Pin
    },"${`${Leds[0].SimVar.Identfier}:${Leds[0].SimVar.Index}`}");`;
  }
  return BaseCode.replace('{INIT}', Init)
    .replace('{SETUP}', Setup)
    .replace('{CR}', CopyRight)
    .replace('{CUSTOMFUNCS}', CustomFuncs)
    .replace('{LOOP}', Loop)
    .replace('{INCLUDES}', Includes)
    .replace('{DESJSON}', DesJson);
}
