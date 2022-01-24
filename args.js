// Expected:
// ["foo", "bar", "baz"]

// command: node args.js foo bar baz

// option 1
const myArgs = process.argv.slice(2);
console.log(myArgs);

// option 2
const [, , ...args] = process.argv;
console.log(args);

// option 3
console.log([process.argv[2], process.argv[3], process.argv[4]]);
