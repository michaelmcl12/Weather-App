//Constant for main div
const main = document.querySelector('.main');

//Function to change background based on weather code
export function changeBackground(code){
    // if (code == "Thunderstorm"){
    //     main.style.backgroundImage="url(./weatherImages/thunder)";
    // }else if(code == "Drizzle"){

    // }else if(code == "Rain"){

    // }else if(code == "Snow"){

    // }else if(code == "Clear"){

    // }else if(code == "Clouds"){
        
    // }else{

    // }

    main.style.backgroundImage = "url(./weatherImages/partlyCloudy.jpg)";
}

