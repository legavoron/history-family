let message_days = document.getElementById('days_num');
let message_hours = document.getElementById('hours_num');
let message_minutes = document.getElementById('minuts_num');
let message_seconds = document.getElementById('seconds_num');

let dating_days = document.getElementById('days_num_dating');
let dating_hours = document.getElementById('hours_num_dating');
let dating_minutes = document.getElementById('minuts_num_dating');
let dating_seconds = document.getElementById('seconds_num_dating');

let kiss_days = document.getElementById('days_num_kiss');
let kiss_hours = document.getElementById('hours_num_kiss');
let kiss_minutes = document.getElementById('minuts_num_kiss');
let kiss_seconds = document.getElementById('seconds_num_kiss');

let cats_1_days = document.getElementById('days_num_cats_1');
let cats_1_hours = document.getElementById('hours_num_cats_1');
let cats_1_minutes = document.getElementById('minuts_num_cats_1');
let cats_1_seconds = document.getElementById('seconds_num_cats_1');

let cats_2_days = document.getElementById('days_num_cats_2');
let cats_2_hours = document.getElementById('hours_num_cats_2');
let cats_2_minutes = document.getElementById('minuts_num_cats_2');
let cats_2_seconds = document.getElementById('seconds_num_cats_2');

let spain_days = document.getElementById('days_num_spain');
let spain_hours = document.getElementById('hours_num_spain');
let spain_minutes = document.getElementById('minuts_num_spain');
let spain_seconds = document.getElementById('seconds_num_spain');

let wed_days = document.getElementById('days_num_wed');
let wed_hours = document.getElementById('hours_num_wed');
let wed_minutes = document.getElementById('minuts_num_wed');
let wed_seconds = document.getElementById('seconds_num_wed');

let ny_days = document.getElementById('days_num_ny');
let ny_hours = document.getElementById('hours_num_ny');
let ny_minutes = document.getElementById('minuts_num_ny');
let ny_seconds = document.getElementById('seconds_num_ny');



window.setInterval(timer, 1000);

function timer () {
    message_timer();
    dating_timer();
    kiss_timer();
    cats_1_timer();
    cats_2_timer();
    spain_timer();
    wed_timer();
    ny_timer();
}

function message_timer() {
    let now = new Date();
    let message_time = new Date(2016, 06, 03, 17, 30);
    
    let diff_message = Math.floor(now - message_time) / 1000; //разница между датами в секундах
    let daysRemain_message = Math.floor(diff_message / (24*60*60));
    diff_message = diff_message - (daysRemain_message * 24 * 60 * 60);
    let hoursRemain_message = Math.floor(diff_message / (60 * 60));
    diff_message = diff_message-(hoursRemain_message * 60 * 60);
    let minutesRemain_message = Math.floor(diff_message/60);
    diff_message = diff_message-(minutesRemain_message * 60);
    let secondsRemain_message = Math.floor(diff_message % 60);

    message_days.innerHTML = addZero(daysRemain_message)
    message_hours.innerHTML = addZero(hoursRemain_message);
    message_minutes.innerHTML = addZero(minutesRemain_message);
    message_seconds.innerHTML = addZero(secondsRemain_message); 
}

function dating_timer() {
    let now = new Date();
    let dating_time = new Date(2016, 06, 06, 19, 20);
    
    let diff_dating = Math.floor(now - dating_time) / 1000 //разница между датами в секундах
    let daysRemain_dating = Math.floor(diff_dating / (24*60*60));
    diff_dating = diff_dating - (daysRemain_dating * 24 * 60 * 60);
    let hoursRemain_dating = Math.floor(diff_dating / (60 * 60));
    diff_dating = diff_dating-(hoursRemain_dating * 60 * 60);
    let minutesRemain_dating = Math.floor(diff_dating/60);
    diff_dating = diff_dating-(minutesRemain_dating * 60);
    let secondsRemain_dating = Math.floor(diff_dating % 60);

    dating_days.innerHTML = addZero(daysRemain_dating)
    dating_hours.innerHTML = addZero(hoursRemain_dating);
    dating_minutes.innerHTML = addZero(minutesRemain_dating);
    dating_seconds.innerHTML = addZero(secondsRemain_dating); 
}

function kiss_timer() {
    let now = new Date();
    let kiss_time = new Date(2016, 06, 08, 21, 45);
    
    let diff_kiss = Math.floor(now - kiss_time) / 1000 //разница между датами в секундах
    let daysRemain_kiss = Math.floor(diff_kiss / (24*60*60));
    diff_kiss = diff_kiss - (daysRemain_kiss * 24 * 60 * 60);
    let hoursRemain_kiss = Math.floor(diff_kiss / (60 * 60));
    diff_kiss = diff_kiss-(hoursRemain_kiss * 60 * 60);
    let minutesRemain_kiss = Math.floor(diff_kiss/60);
    diff_kiss = diff_kiss-(minutesRemain_kiss * 60);
    let secondsRemain_kiss = Math.floor(diff_kiss % 60);

    kiss_days.innerHTML = addZero(daysRemain_kiss)
    kiss_hours.innerHTML = addZero(hoursRemain_kiss);
    kiss_minutes.innerHTML = addZero(minutesRemain_kiss);
    kiss_seconds.innerHTML = addZero(secondsRemain_kiss); 
}

function cats_1_timer() {
    let now = new Date();
    let cats_1_time = new Date(2017, 03, 15, 18, 40);
    
    let diff_cats_1 = Math.floor(now - cats_1_time) / 1000 //разница между датами в секундах
    let daysRemain_cats_1 = Math.floor(diff_cats_1 / (24*60*60));
    diff_cats_1 = diff_cats_1 - (daysRemain_cats_1 * 24 * 60 * 60);
    let hoursRemain_cats_1 = Math.floor(diff_cats_1 / (60 * 60));
    diff_cats_1 = diff_cats_1-(hoursRemain_cats_1 * 60 * 60);
    let minutesRemain_cats_1 = Math.floor(diff_cats_1/60);
    diff_cats_1 = diff_cats_1-(minutesRemain_cats_1 * 60);
    let secondsRemain_cats_1 = Math.floor(diff_cats_1 % 60);

    cats_1_days.innerHTML = addZero(daysRemain_cats_1)
    cats_1_hours.innerHTML = addZero(hoursRemain_cats_1);
    cats_1_minutes.innerHTML = addZero(minutesRemain_cats_1);
    cats_1_seconds.innerHTML = addZero(secondsRemain_cats_1); 
}

function cats_2_timer() {
    let now = new Date();
    let cats_2_time = new Date(2019, 17, 05, 14, 30);
    
    let diff_cats_2 = Math.floor(now - cats_2_time) / 1000 //разница между датами в секундах
    let daysRemain_cats_2 = Math.floor(diff_cats_2 / (24*60*60));
    diff_cats_2 = diff_cats_2 - (daysRemain_cats_2 * 24 * 60 * 60);
    let hoursRemain_cats_2 = Math.floor(diff_cats_2 / (60 * 60));
    diff_cats_2 = diff_cats_2-(hoursRemain_cats_2 * 60 * 60);
    let minutesRemain_cats_2 = Math.floor(diff_cats_2/60);
    diff_cats_2 = diff_cats_2-(minutesRemain_cats_2 * 60);
    let secondsRemain_cats_2 = Math.floor(diff_cats_2 % 60);

    cats_2_days.innerHTML = addZero(daysRemain_cats_2)
    cats_2_hours.innerHTML = addZero(hoursRemain_cats_2);
    cats_2_minutes.innerHTML = addZero(minutesRemain_cats_2);
    cats_2_seconds.innerHTML = addZero(secondsRemain_cats_2); 
}

function spain_timer() {
    let now = new Date();
    let spain_time = new Date(2016, 06, 08, 15, 20);
    
    let diff_spain = Math.floor(now - spain_time) / 1000 //разница между датами в секундах
    let daysRemain_spain = Math.floor(diff_spain / (24*60*60));
    diff_spain = diff_spain - (daysRemain_spain * 24 * 60 * 60);
    let hoursRemain_spain = Math.floor(diff_spain / (60 * 60));
    diff_spain = diff_spain-(hoursRemain_spain * 60 * 60);
    let minutesRemain_spain = Math.floor(diff_spain/60);
    diff_spain = diff_spain-(minutesRemain_spain * 60);
    let secondsRemain_spain = Math.floor(diff_spain % 60);

    spain_days.innerHTML = addZero(daysRemain_spain)
    spain_hours.innerHTML = addZero(hoursRemain_spain);
    spain_minutes.innerHTML = addZero(minutesRemain_spain);
    spain_seconds.innerHTML = addZero(secondsRemain_spain); 
}

function wed_timer() {
    let now = new Date();
    let wed_time = new Date(2018, 21, 03, 17, 10);
    
    let diff_wed = Math.floor(now - wed_time) / 1000 //разница между датами в секундах
    let daysRemain_wed = Math.floor(diff_wed / (24*60*60));
    diff_wed = diff_wed - (daysRemain_wed * 24 * 60 * 60);
    let hoursRemain_wed = Math.floor(diff_wed / (60 * 60));
    diff_wed = diff_wed-(hoursRemain_wed * 60 * 60);
    let minutesRemain_wed = Math.floor(diff_wed/60);
    diff_wed = diff_wed-(minutesRemain_wed * 60);
    let secondsRemain_wed = Math.floor(diff_wed % 60);

    wed_days.innerHTML = addZero(daysRemain_wed)
    wed_hours.innerHTML = addZero(hoursRemain_wed);
    wed_minutes.innerHTML = addZero(minutesRemain_wed);
    wed_seconds.innerHTML = addZero(secondsRemain_wed); 
}

function ny_timer() {
    let now = new Date();
    let ny_time = new Date(2019, 00, 01);
    
    let diff_ny = Math.floor(now - ny_time) / 1000 
    let daysRemain_ny = Math.floor(diff_ny / (24*60*60));
    diff_ny = diff_ny - (daysRemain_ny * 24 * 60 * 60);
    let hoursRemain_ny = Math.floor(diff_ny / (60 * 60));
    diff_ny = diff_ny-(hoursRemain_ny * 60 * 60);
    let minutesRemain_ny = Math.floor(diff_ny/60);
    diff_ny = diff_ny-(minutesRemain_ny * 60);
    let secondsRemain_ny = Math.floor(diff_ny % 60);

    ny_days.innerHTML = addZero(daysRemain_ny)
    ny_hours.innerHTML = addZero(hoursRemain_ny);
    ny_minutes.innerHTML = addZero(minutesRemain_ny);
    ny_seconds.innerHTML = addZero(secondsRemain_ny); 
}


function addZero(num) {
    if(num <=9) return '0'+num;
        else return num 
}


// Slider cats_1
/* Индекс слайда по умолчанию */
let slideIndex_cat_1 = 1;
showSlides_cat_1(slideIndex_cat_1);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide_cat_1() {
    showSlides_cat_1(slideIndex_cat_1 += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide_cat_1() {
    showSlides_cat_1(slideIndex_cat_1 -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide_cat_1(n) {
    showSlides_cat_1(slideIndex_cat_1 = n);
}

/* Основная функция слайдера */
function showSlides_cat_1(n) {
    let i;
    let slides = document.getElementsByClassName("item_cats_1");
    // let dots = document.getElementsByClassName("slider-dots_item");// Кружочки
    if (n > slides.length) {
      slideIndex_cat_1 = 1
    }
    if (n < 1) {
        slideIndex_cat_1 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // } // Кружочки
    slides[slideIndex_cat_1 - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";// Кружочки
}
// End slider Cat_1



// Slider cats_2

/* Индекс слайда по умолчанию */
let slideIndex_cat_2 = 1;
showSlides_cat_2(slideIndex_cat_2);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide_cat_2() {
    showSlides_cat_2(slideIndex_cat_2 += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide_cat_2() {
    showSlides_cat_2(slideIndex_cat_2 -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide_cat_2(n) {
    showSlides_cat_2(slideIndex_cat_2 = n);
}

/* Основная функция слайдера */
function showSlides_cat_2(n) {
    let i;
    let slides = document.getElementsByClassName("item_cats_2");
    // let dots = document.getElementsByClassName("slider-dots_item");// Кружочки
    if (n > slides.length) {
      slideIndex_cat_2 = 1
    }
    if (n < 1) {
        slideIndex_cat_2 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // } // Кружочки
    slides[slideIndex_cat_2 - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";// Кружочки
}

// Slider Spain

/* Индекс слайда по умолчанию */
let slideIndex_spain = 1;
showSlides_spain(slideIndex_spain);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide_spain() {
    showSlides_spain(slideIndex_spain += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide_spain() {
    showSlides_spain(slideIndex_spain -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide_spain(n) {
    showSlides_spain(slideIndex_spain = n);
}

/* Основная функция слайдера */
function showSlides_spain(n) {
    let i;
    let slides = document.getElementsByClassName("item_spain");
    // let dots = document.getElementsByClassName("slider-dots_item");// Кружочки
    if (n > slides.length) {
        slideIndex_spain = 1
    }
    if (n < 1) {
        slideIndex_spain = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // } // Кружочки
    slides[slideIndex_spain - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";// Кружочки
}
// End Slider Spain


// Slider Wedding

/* Индекс слайда по умолчанию */
let slideIndex_wed = 1;
showSlides_wed(slideIndex_wed);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide_wed() {
    showSlides_wed(slideIndex_wed += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide_wed() {
    showSlides_wed(slideIndex_wed -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide_wed(n) {
    showSlides_wed(slideIndex_wed = n);
}

/* Основная функция слайдера */
function showSlides_wed(n) {
    let i;
    let slides = document.getElementsByClassName("item_wedding");
    // let dots = document.getElementsByClassName("slider-dots_item");// Кружочки
    if (n > slides.length) {
        slideIndex_wed = 1
    }
    if (n < 1) {
        slideIndex_wed = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // } // Кружочки
    slides[slideIndex_wed - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";// Кружочки
}
// End Slider Wedding




// Slider Travel Europe

/* Индекс слайда по умолчанию */
let slideIndex_travel_eu = 1;
showSlides_travel_eu(slideIndex_travel_eu);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide_travel_eu() {
    showSlides_travel_eu(slideIndex_travel_eu += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide_travel_eu() {
    showSlides_travel_eu(slideIndex_travel_eu -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide_travel_eu(n) {
    showSlides_travel_eu(slideIndex_travel_eu = n);
}

/* Основная функция слайдера */
function showSlides_travel_eu(n) {
    let i;
    let slides = document.getElementsByClassName("item_travel_eu");
    // let dots = document.getElementsByClassName("slider-dots_item");// Кружочки
    if (n > slides.length) {
        slideIndex_travel_eu = 1
    }
    if (n < 1) {
        slideIndex_travel_eu = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // } // Кружочки
    slides[slideIndex_travel_eu - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";// Кружочки
}
// End Slider Travel Europe

// Slider Travel Ru

/* Индекс слайда по умолчанию */
let slideIndex_travel_ru = 1;
showSlides_travel_ru(slideIndex_travel_ru);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide_travel_ru() {
    showSlides_travel_ru(slideIndex_travel_ru += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide_travel_ru() {
    showSlides_travel_ru(slideIndex_travel_ru -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide_travel_ru(n) {
    showSlides_travel_ru(slideIndex_travel_ru = n);
}

/* Основная функция слайдера */
function showSlides_travel_ru(n) {
    let i;
    let slides = document.getElementsByClassName("item_travel_ru");
    // let dots = document.getElementsByClassName("slider-dots_item");// Кружочки
    if (n > slides.length) {
        slideIndex_travel_ru = 1
    }
    if (n < 1) {
        slideIndex_travel_ru = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // } // Кружочки
    slides[slideIndex_travel_ru - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";// Кружочки
}
// End Slider Travel Ru

// Slider Travel Uk

/* Индекс слайда по умолчанию */
let slideIndex_travel_uk = 1;
showSlides_travel_uk(slideIndex_travel_uk);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide_travel_uk() {
    showSlides_travel_uk(slideIndex_travel_uk += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide_travel_uk() {
    showSlides_travel_uk(slideIndex_travel_uk -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide_travel_uk(n) {
    showSlides_travel_uk(slideIndex_travel_uk = n);
}

/* Основная функция слайдера */
function showSlides_travel_uk(n) {
    let i;
    let slides = document.getElementsByClassName("item_travel_uk");
    // let dots = document.getElementsByClassName("slider-dots_item");// Кружочки
    if (n > slides.length) {
        slideIndex_travel_uk = 1
    }
    if (n < 1) {
        slideIndex_travel_uk = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // } // Кружочки
    slides[slideIndex_travel_uk - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";// Кружочки
}
// End Slider Travel Ru



// Slider New Year

/* Индекс слайда по умолчанию */
let slideIndex_ny = 1;
showSlides_ny(slideIndex_ny);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide_wedding() {
    showSlides_ny(slideIndex_ny += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide_wedding() {
    showSlides_ny(slideIndex_ny -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide_wedding(n) {
    showSlides_ny(slideIndex_ny = n);
}

/* Основная функция слайдера */
function showSlides_ny(n) {
    let i;
    let slides = document.getElementsByClassName("item_ny");
    // let dots = document.getElementsByClassName("slider-dots_item");// Кружочки
    if (n > slides.length) {
        slideIndex_ny = 1
    }
    if (n < 1) {
        slideIndex_ny = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // } // Кружочки
    slides[slideIndex_ny - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";// Кружочки
}



//  Last Slider
/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    // let dots = document.getElementsByClassName("slider-dots_item");// Кружочки
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // } // Кружочки
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";// Кружочки
}