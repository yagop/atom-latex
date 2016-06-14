'use babel';

import Builder from '../lib/builder';
import Logger from '../lib/logger';
import Opener from '../lib/opener';

export class NullBuilder extends Builder {
  static canProcess() { return true; }
}

export class NullLogger extends Logger {
  error() {}
  warning() {}
  info() {}
}

export class NullOpener extends Opener {
  open() {}
}
