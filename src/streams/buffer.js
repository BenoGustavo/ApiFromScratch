const userInput = process.argv.slice(2).join("").trim();

const buf = Buffer.from(userInput);

console.log(buf.toJSON());
