/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */
import { shell } from 'electron';

export default function OpenURL(url: string) {
  shell.openExternal(url);
}

export function IsDarkMode(): boolean {
  const electron = require('electron').remote;
  const { systemPreferences } = electron;
  return systemPreferences.isDarkMode();
}
