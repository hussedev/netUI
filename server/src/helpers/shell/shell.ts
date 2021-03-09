import * as childProcess from 'child_process';
import { promisify } from 'util';

type ExecFunction = (comand: string) => string[];

export function exec (command): string[] {
  try {
    let result = [];
    promisify(childProcess.exec)(command)
      .then((data) => {
        if (data) {
          if (data.stderr) throw new Error(data.stderr);
          if (data.stdout) result = data.stdout.split('\n');
        }
      })
    return result;
  } catch (err) {
    console.error(err);
  }
}

export function execSudo (command): string[] {
  try {
    let result = [];
    promisify(childProcess.exec)('sudo' + command)
      .then((data) => {
        if (data) {
          if (data.stderr) throw new Error(data.stderr);
          if (data.stdout) result = data.stdout.split('\n');
        }
      })
    return result;
  } catch (err) {
    console.error(err);
  }
}




