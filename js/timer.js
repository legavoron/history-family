
function timer(dateEvent, daysBlock, hoursBlock, minutesBlock, secondsBlock) {
    let now = new Date();
    let date = Date.parse(dateEvent);

    let diffDates = Math.floor(now - date) / 1000; 
    let daysRemain = Math.floor(diffDates / (24*60*60));
    diffDates = diffDates - (daysRemain * 24 * 60 * 60);
    let hoursRemain = Math.floor(diffDates / (60 * 60));
    diffDates = diffDates - (hoursRemain * 60 * 60);
    let minutesRemain = Math.floor(diffDates / 60);
    diffDates = diffDates - (minutesRemain * 60);
    let secondsRemain = Math.floor(diffDates % 60);

    daysBlock.innerHTML = addZero(daysRemain);
    hoursBlock.innerHTML = addZero(hoursRemain);
    minutesBlock.innerHTML = addZero(minutesRemain);
    secondsBlock.innerHTML = addZero(secondsRemain);
}

function addZero(num) {
    if (num <=9) {
        return `0${num}`;
    } else return num 
}

let days_num_message = document.querySelector('#days_num_message');
let hours_num_mmessage = document.querySelector('#hours_num_message');
let minuts_num_message = document.querySelector('#minuts_num_message');
let seconds_num_message = document.querySelector('#seconds_num_message');

let days_num_dating = document.querySelector('#days_num_dating');
let hours_num_dating = document.querySelector('#hours_num_dating');
let minuts_num_dating = document.querySelector('#minuts_num_dating');
let seconds_num_dating = document.querySelector('#seconds_num_dating');

let days_num_kiss = document.querySelector('#days_num_kiss');
let hours_num_kiss = document.querySelector('#hours_num_kiss');
let minuts_num_kiss = document.querySelector('#minuts_num_kiss');
let seconds_num_kiss = document.querySelector('#seconds_num_kiss');

let days_num_cats_1 = document.querySelector('#days_num_cats_1');
let hours_num_cats_1 = document.querySelector('#hours_num_cats_1');
let minuts_num_cats_1 = document.querySelector('#minuts_num_cats_1');
let seconds_num_cats_1 = document.querySelector('#seconds_num_cats_1');

let days_num_cats_2 = document.querySelector('#days_num_cats_2');
let hours_num_cats_2 = document.querySelector('#hours_num_cats_2');
let minuts_num_cats_2 = document.querySelector('#minuts_num_cats_2');
let seconds_num_cats_2 = document.querySelector('#seconds_num_cats_2');

let days_num_spain = document.querySelector('#days_num_spain');
let hours_num_spain = document.querySelector('#hours_num_spain');
let minuts_num_spain = document.querySelector('#minuts_num_spain');
let seconds_num_spain = document.querySelector('#seconds_num_spain');

let days_num_wedding = document.querySelector('#days_num_wedding');
let hours_num_wedding = document.querySelector('#hours_num_wedding');
let minuts_num_wedding = document.querySelector('#minuts_num_wedding');
let seconds_num_wedding = document.querySelector('#seconds_num_wedding');

let days_num_ny = document.querySelector('#days_num_ny');
let hours_num_ny = document.querySelector('#hours_num_ny');
let minuts_num_ny = document.querySelector('#minuts_num_ny');
let seconds_num_ny = document.querySelector('#seconds_num_ny');


window.setInterval(allTimers, 1000);

function allTimers() {
    timer('2016-07-03T18:30:00', days_num_message, hours_num_mmessage, minuts_num_message, seconds_num_message);
    timer('2016-07-06T19:20:00', days_num_dating, hours_num_dating, minuts_num_dating, seconds_num_dating);
    timer('2016-07-08T21:45:00', days_num_kiss, hours_num_kiss, minuts_num_kiss, seconds_num_kiss);
    timer('2017-04-15T18:40:00', days_num_cats_1, hours_num_cats_1, minuts_num_cats_1, seconds_num_cats_1);
    timer('2019-06-17T14:35:00', days_num_cats_2, hours_num_cats_2, minuts_num_cats_2, seconds_num_cats_2);
    timer('2017-08-27T15:10:00', days_num_spain, hours_num_spain, minuts_num_spain, seconds_num_spain);
    timer('2018-04-21T15:10:00', days_num_wedding, hours_num_wedding, minuts_num_wedding, seconds_num_wedding);
    timer('2019-01-01T15:10:00', days_num_ny, hours_num_ny, minuts_num_ny, seconds_num_ny);
}


    