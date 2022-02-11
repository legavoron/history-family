
function showSlides(classImage, next, prew, addres ,sumslides) {
    let index = 1;

    let image = document.querySelector(classImage);
    let nextBtn = document.querySelector(next);
    let prewBtn = document.querySelector(prew);
    
    nextBtn.addEventListener('click', () => {
        index++;

        if (index > sumslides) {
            index = 1;
        }

        image.src = `./images/${addres}/${index}.jpg`
    });
    
    prewBtn.addEventListener('click', ()=> {
        index--;

        if (index < 1) {
            index = sumslides;
        }

        image.src = `./images/${addres}/${index}.jpg`
    });
}

showSlides('.soya_img', '#next_soya_btn', '#prew_soya_btn', 'soya', 5);
showSlides('.iva_img', '#next_iva_btn', '#prew_iva_btn', 'iva', 4);
showSlides('.spain_img', '#next_spain_btn', '#prew_spain_btn', 'spain', 6);
showSlides('.wedding_img', '#next_wedding_btn', '#prew_wedding_btn', 'wedding', 14);
showSlides('.eu_img', '#next_eu_btn', '#prew_eu_btn', 'travel/europe', 4);
showSlides('.ru_img', '#next_ru_btn', '#prew_ru_btn', 'travel/russia', 5);
showSlides('.uk_img', '#next_uk_btn', '#prew_uk_btn', 'travel/ukraine', 4);
showSlides('.ny_img', '#next_ny_btn', '#prew_ny_btn', 'ny', 9);
showSlides('.last_img', '#next_last_btn', '#prew_last_btn', 'last', 46);