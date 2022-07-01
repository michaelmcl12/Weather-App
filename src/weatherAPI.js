//Function to fetch current weather.
export async function FetchWeather(location){
    const key = "b1593672b8c3a409a792a7b9fe3ed268";
    const test = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+ location +'&units=imperial&APPID=' + key);

    const data = await test.json();

    return data;
}

//Function that returns the current temp
export async function GetTemp(location){
    let data = await FetchWeather(location);
    data = data.main.temp;
    return data;
}

//Function that returns the current description
export async function GetConditions(location){
    let data = await FetchWeather(location);
    data = data.weather[0].description;
    return data;
}

//Function that gets the current weather code
export async function GetCode(location){
    let data = await FetchWeather(location);
    data = data.weather[0].id;
    return data;
}