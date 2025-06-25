document.addEventListener('DOMContentLoaded',() => {
   const cityInput =  document.getElementById("city-input");
   const getWeatherBtn = document.getElementById("get-weather-btn");
   const getweatherinfo = document.getElementById("weather-info");
   const cityNameDisplay  = document.getElementById("city-name");
   const tempreatureDisplay = document.getElementById("temperature");
   const descriptionDisplay = document.getElementById("description");
   const errormessage = document.getElementById("error-message");

   const apiKey = "9b0d3e8a5e4b4a3e3b0d3e8a5e4b4a3e";  // env variable

   getWeatherBtn.addEventListener("click", async () => {
      const city  = cityInput.ariaValueMax.trim();
      if(!city) return;

      
      // api key is provided to you here
      // and api key should be private 

      // It may throw an error
      // server and database is always in other continent

      try{
       const weatherData = await fetchweatherdata(city);
       displayweatherdata(weatherData);
      }catch(error){ 
        showError(error);   
      }

   })
  async function fetchweatherdata(city) {
    // get the data;

    // when you hit fetch it always gives an object in return
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

    if(response.status === 404){
        throw new showError("City not found");
    }
    console.log(typeof response); // object
    
    const data = await response.json();
    return data;
   }

   function displayweatherdata(weatherData){
    console.log(weatherData); // object
     
    const {name,weatherData} = weatherData;

      cityNameDisplay.innerText = name; // 

      weatherInfo.classList.remove("hide");  // hide hua rehta hai display krne ke liye hata deta hai
      errorMessage.classList.add("hide"); // error message hai nahi to usko hide kr deta hai
      tempreatureDisplay.textContent = `tempreature: ${weatherData.main.temp}`;
      descriptionDisplay.textContent = `description: ${weatherData.weather[0].description}`;
   }

   function showError(error){
      weatherInfo.classList.add("hide");
      errorMessage.classList.remove("hide");
      errorMessage.innerText = error;
   };   
})