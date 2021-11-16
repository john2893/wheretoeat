


'use strict';


const apiKey = 'MbMprHFPR_z5vwXJMwhXvn7lp3r05wDOJkAfByqxxN6U2PfI2XsPV6flgAW13YTbOyFoQyJGo98ygtOS8661ejHQ2Ws1iy3maW82HXeRQ5atFZSSPRYJuVxINFe_W3Yx';
const url='https://api.yelp.com/v3/businesses/search'

const yelp = require('yelp-fusion');


// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app


const searchRequest = {
  location: 'new york'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response;
  const reslen = firstResult.jsonBody.businesses.length;
  const res = firstResult.jsonBody.businesses;
 
  const data = JSON.stringify(res, null, 3);
  console.log(res)
  
  for (let i=0; i<=(reslen-1); i++){
    console.log(res[i].name)
    console.log(res[i].image_url)
    console.log(res[i].rating)
    let catlen = res[i].categories.length
    let catar = res[i].categories
    //console.log(catar[0].alias)
    catar.forEach((element, index) => {
      console.log(element.alias)

     
    });
    //console.log(res[i].categories)
    console.log("========================================")
  }

  
}).catch(e => {
  console.log(e);
});
