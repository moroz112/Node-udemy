const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const data = JSON.parse(dataBuffer.toString());
console.log(data);
const newData = { ...data, name: 'Alex', age: 26 };
fs.writeFileSync('1-json.json', JSON.stringify(newData));