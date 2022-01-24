import { readFile } from "fs";

readFile("hello.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
