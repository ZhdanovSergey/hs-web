const fs = require('fs');

const [key, value] = process.argv[2].split('=');

const input = fs.readFileSync('./cards.json');
const data = JSON.parse(input);

const result = data.filter(item => item[key] === value);

const output = JSON.stringify(result);
fs.writeFileSync(`./${value}.json`, output);