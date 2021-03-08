const childProcess = require('child_process');
const { promisify } = require('util');

exports.exec = command => {
  return new Promise((resolve, reject) => {
    // try {
    promisify(childProcess.exec)(command).then(data => {
      if (data) {
        // if (data.stderr) reject(data.stderr);
        if (data.stdout) resolve(data.stdout.split('\n'));
      }
    });
    console.log('HELLO');
    // } catch (err) {
    //   console.error(err);
    // }
  });
};

exports.execSpawn = command => {
  return new Promise((resolve, reject) => {
    // try {
    const com = command.split(' ');
    const child = childProcess.spawn(com[0], com.slice(1));
    child.stdout.on('data', data => resolve(data));

    child.on('close', code => resolve(code));

    child.on('exit', code => resolve(code));
  });
};

exports.execSudo = command => {
  console.log('execSudo');
  try {
    let result = [];
    console.log('result', result);
    promisify(childProcess.execFile)('sudo', command.split(' ')).then(data => {
      if (data) {
        console.log('data', data);
        if (data.stderr) throw new Error(data.stderr);
        if (data.stdout) result = data.stdout.split('\n');
      }
    });
    console.log('result', result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
