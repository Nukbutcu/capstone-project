import { readFile } from "fs";

readFile("hello.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  try {
    let parse = JSON.parse(data);
    console.log(parse);
  } catch {
    console.log(data);
  }
});
