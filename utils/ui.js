import readline from "readline";

export const ui = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
