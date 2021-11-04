

// const request = require('request')
// const fetch = require('node-fetch');
// import { fetch } from "node-fetch";
import axios from 'axios';
// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'MbMprHFPR_z5vwXJMwhXvn7lp3r05wDOJkAfByqxxN6U2PfI2XsPV6flgAW13YTbOyFoQyJGo98ygtOS8661ejHQ2Ws1iy3maW82HXeRQ5atFZSSPRYJuVxINFe_W3Yx';
const url='https://api.yelp.com/v3/businesses/search'

import yelpAPI from 'yelp-api'

// Create a new yelpAPI object with your API key

let yelp = new yelpAPI(apiKey);

// Set any parameters, if applicable (see API documentation for allowed params)
let params = [{ location: 'winston salem' }];

// Call the endpoint
yelp.query('businesses/search', params)
.then(data => {
  //Success
//  console.log(data);
    // console.log(data)
    var d = JSON.parse(data)
    // console.log(d["businesses"])
    console.log(d["businesses"][0].name)
        
    
        

})
.catch(err => {
  // Failure
  console.log(err);
});  