const API_KEY = "e0e7fddc868aad7dfb1f864506af3309";


function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} C`;

    document.body.appendChild(newPara);
}


async function fetchWeatherDetails() {

        try{
            let city = "goa";
    
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    
            const data = await response.json();
        
            console.log("Weather data:-> " , data);
    
            renderWeatherInfo(data);
        }
        catch(e){
            console.log(e);
        }
  
}

// fetchWeatherDetails();

async function fetchWeatherDetailslatlong(){
    let latitude = 18.333;
    let longitude = 19.444;

    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    let data = await result.json();

    console.log(data);
}