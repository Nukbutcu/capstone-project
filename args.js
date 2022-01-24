import { argv } from "process";

// Expected:
// ["foo", "bar", "baz"]

// command: node args.js foo bar baz

const myArgs = argv.slice(2);
console.log(myArgs);
