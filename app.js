
let toDay = document.getElementById('currentDayOfTheWeek')
let UTC = document.getElementById('currentUTCTime')
let track = document.getElementById('myTrack')







let currentDate = new Date();
let dayOfWeek = currentDate.getDay();
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = daysOfWeek[dayOfWeek];

console.log(currentDay);
toDay.innerHTML = currentDay;


function primeTime() {
    let currentDates = new Date();

// Get the current UTC time in milliseconds
let utcMilliseconds = currentDates.getTime();
UTC.innerHTML = utcMilliseconds;


// Display the current UTC time in milliseconds
console.log(utcMilliseconds);

}

setInterval(primeTime, 1000)





