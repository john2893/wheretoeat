function msg()
{
   alert("Delete Clicked.");

}



const apiKey = 'MbMprHFPR_z5vwXJMwhXvn7lp3r05wDOJkAfByqxxN6U2PfI2XsPV6flgAW13YTbOyFoQyJGo98ygtOS8661ejHQ2Ws1iy3maW82HXeRQ5atFZSSPRYJuVxINFe_W3Yx';
const url='https://api.yelp.com/v3/businesses/search'

import yelpAPI from 'yelp-api'


let yelp = new yelpAPI(apiKey);
let params = [{ location: 'winston salem' }];

// This is now a global function
