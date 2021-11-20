$("button").click(function(event){
    event.preventDefault()
    $("#result").empty()
    var search=$("#search").val()
    //var url="https://api.unsplash.com/search/photos?query="+search+"&client_id=Ij1hItpDMCYOGZvyCiRa5zBl0f533gaJ1nZ_9u77lCY&per_page=5"
    var url='https://api.yelp.com/v3/businesses/search'
    var apiKey='MbMprHFPR_z5vwXJMwhXvn7lp3r05wDOJkAfByqxxN6U2PfI2XsPV6flgAW13YTbOyFoQyJGo98ygtOS8661ejHQ2Ws1iy3maW82HXeRQ5atFZSSPRYJuVxINFe_W3Yx'
    $.ajax({
        method: 'GET',
        url: url,
        params:{
            'location':'Winston Salem'
        },
        headers: {
            'Authorization': `Bearer ${apiKey}`
        },
        success:function(data){
            console.log(data)

            // data.results.forEach(photo => {
            // $("#result").append(`
            //     <img src="${photo.urls.small}" />
            // `)
        }
        
    })
})