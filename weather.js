// console.log("hi")
axios({
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&lang=ar&appid=23d4181ce5c6397d2e950cc163f913c2',
    
    })
    .then((response)=>{
        //  console.log(response)
        //   $('body').text(response.data.weather.Array(1));
        const tempr = response.data.main.temp;
        $('.one').append(`<h2>${tempr}°F</h2>`);
            const temp = response.data.weather[0].main;
             $('.two').append(`<h3>${temp}☁️</h3>`);
          })


    .catch((error)=>{
        console.log(error)
    });