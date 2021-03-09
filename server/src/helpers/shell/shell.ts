import * as childProcess from 'child_process';

type ExecFunction = (comand: string) => string[];

export function exec (command: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
      childProcess
        .exec(`sudo ${command}`, {}
        , (error, stdout: string, stderr: string) => {
          if (stdout) resolve(stdout.split('\n'));
          else throw new Error('shell.ts exec funtion error');
        });
  });
}

export function execSudo (command: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
      childProcess
        .exec(`sudo ${command}`, {}
        , (error, stdout: string, stderr: string) => {
          if (stdout) resolve(stdout.split('\n'));
          else throw new Error('shell.ts execSudo funtion error');
        });
  });
}




