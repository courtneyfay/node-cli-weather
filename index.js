/* 
Require the request library so you can reach the weatherUnderground service. 								DONE
Look at the Weather Underground API Documentation to find a way to get JSON weather data.
Make a request to Weather Underground to find Denver weather data.
Print this data to the console in the form "The weather in Denver is <cloudy>" or similar.
Test this to verify it works! 
*/

//Require apiKey
const setKey = require('./env');
let apiKey = setKey(); 

//Bonus: take in state and city as arguments instead of hardcoding
let state = 'CO';
let city = 'Denver';

//Require the request library
//What is the `request` library you ask?
//Google `npm request` and you can find out!
'use strict'
const request = require('request');

// Set the API URL we are hitting, with our API Key and zipcode
let apiUrl = 'http://api.wunderground.com/api/' + apiKey + '/conditions/q/' + state + '/' + city + '.json';

//The actual request sending
//Make a request to Weather Underground to find Denver weather data.
request(apiUrl, function (error, response, body) {
  //Inside that callback
  console.log('error:', error); // print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // print the status code if a response was received
  console.log('body:', body); // print the HTML for the Google homepage
  //Print out the weather result
});

