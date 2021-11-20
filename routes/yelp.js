const express = require('express')
const router = express.Router()

const apiKey = 'MbMprHFPR_z5vwXJMwhXvn7lp3r05wDOJkAfByqxxN6U2PfI2XsPV6flgAW13YTbOyFoQyJGo98ygtOS8661ejHQ2Ws1iy3maW82HXeRQ5atFZSSPRYJuVxINFe_W3Yx';
const url='https://api.yelp.com/v3/businesses/search'

const yelp = require('yelp-fusion');

let cityName;
let catar, name, img, rating;
const catagory = []
const myArr = []

router.post('/', (request, response) => {
    console.log(request.body.name)
    const cityName = request.body.name
    yelps(cityName)
    
    
   
})




function yelps(cityName){

    const client = yelp.client(apiKey);
    const searchRequest = {
        location: cityName
    };

    client.search(searchRequest).then(response => {
        const firstResult = response;
        const reslen = firstResult.jsonBody.businesses.length;
        const res = firstResult.jsonBody.businesses;
        
        //const data = JSON.stringify(res, null, 3);
        //console.log(response)
        
        for (let i=0; i<=(reslen-1); i++){
        const obj = {}
        obj.name = (res[i].name)
        obj.img = (res[i].image_url)
        obj.rating = (res[i].rating)
        let catlen = res[i].categories.length
        catar = res[i].categories
        //console.log(catar[0].alias)
        
        catar.forEach((element, index) => {
            catagory.push(element.alias)
        });
        
        //console.log(res[i].categories)
        myArr.push(obj);
        }
        
        return (myArr)
    
        
    }).catch(e => {
        console.log(e);
    });
    console.log("hello")    

}


// router.post('/', (request, response) => {
//     console.log(request.body)
//     cityName = request.body.name
//     console.log(cityName)
//     const client = yelp.client(apiKey);
//     const searchRequest = {
//       location: cityName
//     };
//     client.search(searchRequest).then(response => {
//       const firstResult = response;
//       const reslen = firstResult.jsonBody.businesses.length;
//       const res = firstResult.jsonBody.businesses;
     
//       //const data = JSON.stringify(res, null, 3);
//       //console.log(response)
      
//       for (let i=0; i<=(reslen-1); i++){
//         const obj = {}
//         obj.name = (res[i].name)
//         obj.img = (res[i].image_url)
//         obj.rating = (res[i].rating)
//         let catlen = res[i].categories.length
//         catar = res[i].categories
//         //console.log(catar[0].alias)
        
//         catar.forEach((element, index) => {
//           catagory.push(element.alias)
//         });
        
//         //console.log(res[i].categories)
//         myArr.push(obj);
//       }
      
//       //console.log (myArr)
    
      
//     }).catch(e => {
//       console.log(e);
//     });
//     console.log("hello")    
// })
console.log(myArr)
module.exports = router
  