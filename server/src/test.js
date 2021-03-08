const shell = require('./shell/shell');

shell.execSpawn('nmap').then(data => console.log(data));

// shell.execSudo('nmap');
