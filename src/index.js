import './style.css';
import { GetTemp,GetConditions} from './weatherAPI'
import {changeBackground} from './changeBackground'

//Declare constants
const locationValue = document.getElementById('location');
const weatherContainer = document.querySelector('.weather');

//Declare variables
let userLocation = "new york city";

//Add event listener for form submit
form.addEventListener("submit", SetLocation);

function SetLocation(e) {
    e.preventDefault();

    userLocation = locationValue.value

    DisplayData(userLocation);
}

async function DisplayData(location){
    removeAllChildNodes(weatherContainer);

    //Create location text
    let locationText = document.createElement('h1')
    locationText.textContent = location;

    //Create current weather temp
    let currentWeatherTemp = document.createElement('p');
    currentWeatherTemp.textContent =  await GetTemp(location) + " F";

    //Create conditions text
    let conditionsText = document.createElement('p');
    conditionsText.textContent = await GetConditions(location);

    //Append text nodes
    weatherContainer.appendChild(locationText);
    weatherContainer.appendChild(currentWeatherTemp);
    weatherContainer.appendChild(conditionsText);
}

//Function to remove all child nodes
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


////Delete
window.onload = DisplayData("New york city");


