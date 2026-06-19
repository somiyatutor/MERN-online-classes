const API_KEY="2c6f28196f8e2647ecf1c9f9533d9eed";

async function getWeather(){
    const city=document.getElementById("cityInput").value;
    if(!city){
        alert("Enter city name");
        return;
    };

   
    document.getElementById("error").innerText="";
    try{
        const currentWeather=
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}   `);
        const weatherData=await currentWeather.json();
        if(weatherData.cod!==200)
            throw new Error(weatherData.message);
         
         document.getElementById("city").innerText=weatherData.name;
         document.getElementById("temp").innerText=Math.round(weatherData.main.temp)+"K";
         document.getElementById("desc").innerText=weatherData.weather[0].description;
        console.log(weatherData)
         document.getElementById("humidity").innerText=weatherData.main.humidity+"%";
        document.getElementById("grnd_level").innerText=weatherData.main.grnd_level+"hPa";
         document.getElementById("pressure").innerText=weatherData.main.pressure+"hPa";
         document.getElementById("feels").innerText=weatherData.main.feels_like+"K";

         const iconCode=weatherData.weather[0].icon;
         document.getElementById("icon").src=`https://openweathermap.org/img/wn/${iconCode}@2x.png`;
         getForecast(city);

    } catch(error){
        document.getElementById("loading").innerText="";
        document.getElementById("error").innerText="Error: "+error.message;
    }
    async function getForecast(city){
        try{
            const response= await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
            );
            const data= await response.json();
            const forcastContainer=document.getElementById("forecastContainer");
            forcastContainer.innerHTML="";
            const dailyForcast=data.list.filter(item=>item.dt_txt.includes("12:00:00"));
            dailyForcast.slice(0,5).forEach(day=>{
        //    console.log(day);
                const date=new Date(day.dt_txt);//2026-06-17 12:00:00
              //  console.log(date);
                forcastContainer.innerHTML+=`
                <div class="forecast-card">
                <h4>
                 ${date.toLocaleDateString("en-US",{weekday:"short"})}
                 </h4>
                 <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
                 <p>${Math.round(day.main.temp)}K</p>
                 
                 <small>${day.weather[0].main}</small>

    
                </div>
                `;
            });
        }
        catch(error){
           console.log(error);
        }
    }
   
  //getWeather("Delhi");
}



