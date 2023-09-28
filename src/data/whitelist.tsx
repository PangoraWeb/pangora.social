import fs from "fs";

const whitelist: { url: string; categories: Array<string> }[] = [];

const data = fs.readFileSync("src/data/whitelist.txt");

const string = data.toString();
const lines = string.split("\n");

lines.forEach((line) => {
  const splitLine = line.split(":").map((split) => split.trim());

  whitelist.push({
    url: splitLine[0],
    categories: splitLine[1].split(",").map((split) => split.trim()),
  });
});

export default whitelist;
