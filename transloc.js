const axios = require('axios');

const getStops = () => {
  return axios.get('https://feeds.transloc.com/3/stops?include_routes=true&agencies=1199', {
    headers : {
      'Content-Type': 'application/json'
    },
    responseType: 'json', // important for letting the client render, send the image as a binary stream
  });
}

const generateStops = () => {
  
}

module.exports.generateStops = generateStops;