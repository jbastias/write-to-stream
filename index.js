const yargs = require('yargs');
const fs = require('fs');

const argv = yargs
  .option('name', {
    alias: 'n',
    describe: 'script name',
    default: '1',
  })
  .option('filepath', {
    alias: 'f',
    describe: 'file path',
    default: './file.log',
  })
  .option('iterations', {
    alias: 'i',
    describe: 'iterations',
    default: 100,
  })
  .option('milliseconds', {
    alias: 'm',
    describe: 'intervals in milliseconds',
    default: 1000,
  })
  .help()
  .version().argv;

const tests = [];

for(let i = 0; i < argv.i; i++) {
  tests.push(Math.round(Math.random() * argv.m));
}

const output = fs.createWriteStream(argv.filepath, {
    flags: 'a',
    encoding: 'utf8',
    mode: 0o666,
    autoClose: true,
  });

Promise.resolve(tests).then(tests => {
  // console.log(tests);
  return tests.reduce((sequence, time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('time: ', time);
        output.write(`ps: ${argv.name} - time: ${time}\n`);
        return resolve(time);
      }, time);
    });
  });
});


  // return tests.reduce(function(sequence, time) {
  //   // return sequence
  //   //   .then(() => {
  //   //     console.log('time: ', time);
  //   //   })
  //   }, Promise.resolve());



// console.log('tests: ', tests);
