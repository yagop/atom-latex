'use babel';

import childProcess from 'child_process';
import Opener from '../opener';

export default class CustomOpener extends Opener {
  // Custom PDF viewer cannot support texPath and lineNumber
  open(filePath, texPath, lineNumber, callback) {
    const command = `"${atom.config.get('latex.viewerPath')}" "${filePath}"`;

    childProcess.exec(command, error => {
      if (callback) {
        callback((error) ? error.code : 0);
      }
    });
  }
}
