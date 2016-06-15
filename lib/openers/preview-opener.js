'use babel';

import childProcess from 'child_process';
import Opener from '../opener';

export default class PreviewOpener extends Opener {
  open(filePath, texPath, lineNumber, callback) {
    let command = `open -g -a Preview.app "${filePath}"`;
    if (!this.shouldOpenInBackground()) {
      command = command.replace(/\-g\s/, '');
    }

    childProcess.exec(command, error => {
      if (callback) {
        callback((error) ? error.code : 0);
      }
    });
  }
}
