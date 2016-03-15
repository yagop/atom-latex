'use babel'

import fs from 'fs'
import path from 'path'
import Mocha from 'mocha'

export default function ({testPaths, buildAtomEnvironment, buildDefaultApplicationDelegate}) {
  const mocha = global.mocha = new Mocha()

  global.atom = buildAtomEnvironment({
    applicationDelegate: buildDefaultApplicationDelegate(),
    window: global,
    document: document,
    configDirPath: process.env.ATOM_HOME,
    enablePersistence: false
  })

  const promise = new Promise((resolve, reject) => {
    testPaths.forEach(testPath => {
      fs.readdirSync(testPath)
        .filter(file => file.endsWith('.js'))
        .forEach(file => mocha.addFile(path.join(testPath, file)))
    })

    mocha.run(failures => {
      resolve(failures)
    })
  })

  return promise
}
