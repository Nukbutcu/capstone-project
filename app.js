import { writeFile } from "fs/promises";
// import {promises as fs} from "fs"

console.log("hello world");

writeFile("foo", "irgendwas anderes");

writeFile("hello.json", JSON.stringify({ x: 5, y: 6 }, null, 4));
