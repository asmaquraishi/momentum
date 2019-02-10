function imageSuccess(response){
    console.log(response.data.urls.regular);
    
    $('body').attr('background', response.data.urls.regular);
    

    
    //var body = document.getElementsByTagName('body')[0];
    //body.style.backgroundImage = 'url(http://localhost/background.png)';
}

function imageFail(error){
    console.log(error);
}
axios({
method: 'get',
url: 'https://api.unsplash.com/photos/random?client_id=eab88ebd60db8cb1b6858064ea6816c042a332bdf56056d5b38827daf874e308',

})
.then(imageSuccess)
.catch(imageFail);