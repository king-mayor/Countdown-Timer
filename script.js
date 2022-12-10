const dayz = document.querySelector(".day");
const hourz = document.querySelector(".hour");
const minutez = document.querySelector(".minute");
const secondz = document.querySelector(".second");

// Set targeted date
let newYears = "1 March 2023";
// create countdown function
function countDownCounter (){
    let  newYearsDate = new Date(newYears);
    let presentDate = new Date();
    let totalSeconds = (newYearsDate - presentDate) / 1000;
    let days = Math.floor(totalSeconds / 3600 / 24);
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let minutes = Math.floor(totalSeconds / 60)%60;
    let seconds = Math.floor(totalSeconds) % 60;
    console.log(days, hours, minutes, seconds);
    // Insert values in Html
    dayz.innerHTML = days;
    hourz.innerHTML=  hours;
    minutez.innerHTML = minutes;
    secondz.innerHTML =  seconds;

}
 countDownCounter();
setInterval(countDownCounter, 1000);