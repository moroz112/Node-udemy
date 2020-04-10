
// https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=8adf9b46b1a97bb345011c2db5ebb954 
// 8adf9b46b1a97bb345011c2db5ebb954
const request = require('request-promise');
const data = request('https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=8adf9b46b1a97bb345011c2db5ebb954').then((data) => {
  const newData = JSON.parse(data.toString());
  console.log('data', newData.main);
});
