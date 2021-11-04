
// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'MbMprHFPR_z5vwXJMwhXvn7lp3r05wDOJkAfByqxxN6U2PfI2XsPV6flgAW13YTbOyFoQyJGo98ygtOS8661ejHQ2Ws1iy3maW82HXeRQ5atFZSSPRYJuVxINFe_W3Yx';
const url='https://api.yelp.com/v3/businesses/search'

import yelpAPI from 'yelp-api'


let yelp = new yelpAPI(apiKey);
let params = [{ location: 'winston salem' }];

yelp.query('businesses/search', params)
.then(data => {
    var d = JSON.parse(data)
    // console.log(d["businesses"])
    console.log(d["businesses"][0].name)
    dataYelp
    const t = d["businesses"][0].name;
    document.getElementById('dataYelp').textContent = t;
        
    
        

})
.catch(err => {
  // Failure
  console.log(err);
});  

function onClick() {
    alert ("hellow")
}
