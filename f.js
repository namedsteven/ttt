// ========================coach popup======================================

const coachSmall = document.getElementById('coach__small');
const smallPopup = document.querySelector('.small__popup');
coachSmall.addEventListener('click',()=>{
smallPopup.style.display = 'block';
coachSmall.style.display = 'none';
})

// =============================================tabs=========================

const tabInn = document.querySelectorAll('.inn');
const tabArrow = document.querySelectorAll('.tabb');
tabArrow.forEach((tab, i) =>{

   tab.addEventListener('mouseover',(e)=>{
    inHideAll();
   tabInn[i].classList.add('flex');
   tab.classList.add('active');

})

})
    function inHideAll(){

tabInn.forEach(ii=>{
   ii.classList.remove('flex')
})
tabArrow.forEach(sp=>{
   sp.classList.remove('active')
})
    }
   
// =========================scroll==========================

// const main__coachSp_div = document.querySelectorAll('.main__coach-sp_div');
// window.addEventListener('scroll',()=>{

//        for(var i = 0; i < main__coachSp_div.length; i++){
//       let main__coachSp_divHeight = main__coachSp_div[i].getBoundingClientRect().top;
//       let windowHeight = window.innerHeight;
//       let revealPoint = 150;
//       if(windowHeight > main__coachSp_divHeight - revealPoint){
//          main__coachSp_div[i].classList.add('show');
//       }else{
//          main__coachSp_div[i].classList.remove('show');
//       }
//    }
// })


// ===========================================================================================


const mm = document.querySelector('.mm');
const m = document.querySelector('.m');

mm.addEventListener('click',()=>{
m.classList.toggle('active');
})


// ================================navbar==============================================================
const navEl = document.getElementById('nav');
const tabsEl = document.querySelector('.tabs');
const navEll = document.querySelector('.nav2');
const bb = document.querySelector('.nav__arrow');
const bbSh = document.querySelector('.nav__arrow_shadow');

window.addEventListener('scroll',()=>{
   let wHeight = window.pageYOffset;
   let navHeight = navEl.offsetTop;
   let tabsElHeight = tabsEl.offsetTop;
   
   if(wHeight >= navHeight + 2){
   navEl.classList.add('flex');
   bb.style.display="flex";
   bbSh.style.display="flex";
   }else{
      navEl.classList.remove('flex');
      bb.style.display="none";
      bbSh.style.display="none";   
   }
})

// ======================== guide  =================================================

// const guide__card_description = document.querySelectorAll('.guide__card_description');
// const guide__card = document.querySelectorAll('.guide__card');
// guide__card.forEach((gc, i) =>{

//    gc.addEventListener('mouseover',(e)=>{
//     guide__card_description[i].classList.add('flexgc')
//    })
   
//    gc.addEventListener('mouseleave',(e)=>{
//       guide__card_description[i].classList.remove('flexgc');
//      })
// })
// ================================arrows===========================
const left = document.querySelector('.uil-angle-left');
const right = document.querySelector('.uil-angle-right');
const f = document.querySelector('.front');
const ba = document.querySelector('.back');


const posit = document.querySelector('.posit');
const namee = document.querySelector('.name');
const surname = document.querySelector('.surname');
const age = document.querySelector('.age');
const goal = document.querySelector('.goals');
const assist = document.querySelector('.assists');
const matche = document.querySelector('.matches');
const minute = document.querySelector('.minutes');



const benefits = [  'E1.jpg', 'B1.jpg',      'P1.jpg',        'L1.jpg','I1.jpg',      'F2.jpg',          'Z1.jpg', 'ffff.jpg','f.jpg', 'ff.jpg', 'fff.jpg', 'ffff.jpg',];
const back = [      'E2.jpg', 'B2.jpg',     'P2.jpg',         'L2.jpg','I2.jpg',      'F1.jpg',         'Z2.jpg', 'ffff.jpg','f.jpg', 'ff.jpg', 'fff.jpg', 'ffff.jpg',];
const positions = ['защитник', 'нападающий','полузащитник', 'нападающий', 'защитник', 'полузащитник', 'защитник', 'нападающий', 'защитник', 'нападающий', 'защитник', 'нападающий', 'защитник', 'нападающий', 'защитник'];
const names = [    'Элсуд',     'Даник',  'Тимофей',        'Даник',   'Алексей',  'Федоров',            'Даник', 'Алексей', 'Антон', 'Максим', 'Михаил', 'Всеволод', 'Богдан'];
const surnames = ['Аллазов', 'Борисенко', 'Поливко',        'Лубочко', 'Игнатович', 'Артём',             'Зыль', 'Алексеев', 'Тиманс', 'Кухарчик', 'Карижский', 'Слеменев', 'Сердюк', ]
const ages = [      '15',         '16',       '16',        '15',       '15',        '16',                   '16',        '16',  '16', '15', '16', '16', '15'];
const goals = [      '1',          '1',        '0',         '1',        '0',        '1',                  '1',        '1',  '3', '4', '0', '1', '2'];
const assists = [     '0',         '0',         '0',        '0',       '0',         '4',                   '1',        '1',  '3', '4', '0', '1', '2'];
const matches = [      '18',       '20',        '15',        '4',      '18',        '20',                    '15',      '4',   '18', '20', '15', '4', '10'];
const minutes = [      '120',      '350',      '240',        '30',      '120',      '350',                    '240',    '30', '120', '350', '240', '30', '57'];

let i = 0;
function slide(i){
f.style.backgroundImage = `url(img/${benefits[i]})`;
ba.style.backgroundImage = `url(img/${back[i]})`;
posit.innerText = `Position: ${positions[i]}`;
namee.innerText = `Name: ${names[i]}`;
surname.innerText = `Surname: ${surnames[i]}`;
age.innerText = `Age: ${ages[i]}`;
goal.innerText = `Goals: ${goals[i]}`;
assist.innerText = `Assists: ${assists[i]}`;
matche.innerText = `Matches played: ${matches[i]}`;
minute.innerText = `Minutes played: ${minutes[i]}`;

}
left.addEventListener('mouseover',()=>{
   i--;
if(i<0){
   i=benefits.length-1;
}
slide(i)
})
right.addEventListener('mouseover',()=>{
   i++;
   if(i>benefits.length-1){
      i=0
   }
   slide(i)
})

// let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName(".benefit");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//    dots[i].className = dots[i].className.replace(" active", "");
//  }
//  slides[slideIndex-1].style.display = "block";
//  dots[slideIndex-1].className += " active";
// }

// const d = document.querySelector('.main-team')
//  let slideI = 1;
//  showSlides(slideI);
//  function nextSlide(){
//    showSlides(slideI+=1);
//  }
// function prevSlide(){
//    showSlides(slideI-=1);
// }
// function currentSlide(n){
//    showSlides(slideI=n);
// }
// function showSlides(n) {
//    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
//    let slides = document.querySelectorAll('.benefit');

//    /* Проверяем количество слайдов: */
//    if (n > slides.length) {
//      slideIndex = 1
//    }
//    if (n < 1) {
//        slideIndex = slides.length
//    }

//    /* Проходим по каждому слайду в цикле for: */
//    for (let slide of slides) {
//        slide.style.display = "none";
//    }
//    /* Делаем элемент блочным: */
//    slides[slideIndex - 1].style.display = "block";
// }

// const Swiper = new swiper('.main-team');

// import '../../node_modules/swiper/dist/js/swiper.min.js';

// var mySwiper = new Swiper(document.querySelector('.swiper-container'), {
//     slidesPerView: 1,
//     speed: 500,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     autoplay: {
//         delay: 2000,
//       },
// });


// =========================arrow to the top========================================================
const nav__bgImg = document.querySelector('.nav__bg-img');
const bB = document.querySelector('.bb');
bB.addEventListener('click',()=>{
   document.documentElement.scrollTop = 0;
})
// ================================================

const tournament = document.querySelector('.pointt');
const evaluetion = document.querySelector('.evaluetion');
const contacts = document.querySelector('.contacts');
const cross = document.querySelector('.uil-times');


cross.addEventListener('click',(e)=>{
   evaluetion.classList.remove('eva');
})

contacts.addEventListener('mouseover',()=>{
    evaluetion.classList.add('eva'); 
},{once: true});

// ==============================================
const main__coach = document.querySelector('.main__coach');
const coach__name = document.querySelector('.coach__name');
const coach__photo = document.querySelector('.coach__photo');
const coach__description__h3Small = document.querySelector('.coach__description__h3-small');
const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');

window.addEventListener('scroll',()=>{
   let wHeight = window.scrollY;
   let main__coachH = main__coach.clientHeight;
   
   if(wHeight > main__coachH + 20 ){
coach__name.classList.add('flexCC');
coach__photo.classList.add('flexCCC');
coach__description__h3Small.classList.add('flexCCCC');
c1.classList.add('c');
c2.classList.add('cc');
c3.classList.add('ccc');
   }else{
      coach__name.classList.remove('flexCC');
      coach__photo.classList.remove('flexCCC');
      coach__description__h3Small.classList.remove('flexCCCC');
c1.classList.remove('c');
c2.classList.remove('cc');
c3.classList.remove('ccc');
   }
})
// ========================================

const b = document.querySelector('.btn');

b.addEventListener('mouseover',(e)=>{
const x = (e.pageX - b.offsetLeft);
const y = (e.pageY - b.offsetTop);
b.style.setProperty('--x', x + 'px');
b.style.setProperty('--y', y + 'px');
})
//=============================================================================
