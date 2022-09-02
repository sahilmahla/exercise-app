const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'c2462cf46fmshe742f49ef5af8a8p173047jsn8cd48838f691',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});