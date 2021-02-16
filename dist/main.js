var DUII = (function (exports) {
   'use strict';

   const dropDown = (numOfOpts, btn) => {
       const dropbtn = document.querySelector(btn);
       dropbtn.addEventListener('mouseover', next);
       dropbtn.addEventListener('mouseleave', hide);
       const menu = [];
       for (let i = 0; i < numOfOpts; i++) {
           const opt = document.createElement('option');
           menu.push(opt);
       }
       menu.forEach(opt => {
           opt.innerText = 'Hello World';
           opt.style.color = 'gray';
           opt.style.display = 'block';
           const butt = document.querySelector('.button');
           butt.appendChild(opt);
       });
       function next() {
           menu.forEach(opt => opt.style.display = 'block');
       }    function hide() {
           menu.forEach(opt => opt.style.display = 'none');
       }
   };

   dropDown(6, '.button');

   let i = 0;
   const carousel = (nextbtn, prevbtn, imagesArr) => {
       const imgsrc = document.querySelector('img');
        imgsrc.setAttribute('src',
            '../assets/scape1.jfif');
       if (!Array.isArray(imagesArr)) {
           console.log('ImagesArr must be an Array');
           return
       }
       const next = document.querySelector(nextbtn);
       next.addEventListener('click', forward);
       const prev = document.querySelector(prevbtn);
       prev.addEventListener('click', previous);
       const imgs = imagesArr;
         const dots = document.querySelectorAll('.dots');
         dots.forEach(dot =>{
              dot.classList.add('inactive');
           dot.addEventListener('click', useDots);});
       function forward() {
           imgsrc.setAttribute('src',
               imgs[i]);
               dots[i].classList.toggle('active');
               console.log(dots[i]);
           if (i === imgs.length - 1) {
               i = 0;
           }
           i++;
       }

       function previous() {

           imgsrc.setAttribute('src',
               imgs[i]);
                dots[i].classList.toggle('active');
           if (i === 0) {
               i = imgs.length;
           }
           i--;

       }
       function useDots (e){
       let index = e.target.id;
       imgsrc.setAttribute('src', imgs[index]);
       }
      setInterval(() => {
          forward();
      }, 5000);
   };
   carousel('.nextbtn', '.prevbtn', ["../assets/photo-1612703508477-00e02a9b170c.jfif", "../assets/photo-1613026468322-c1b22cd40fca.jfif", '../assets/photo-1613090956335-e9330f8ff73d.jfif']);

   exports.carousel = carousel;
   exports.dropDown = dropDown;

   Object.defineProperty(exports, '__esModule', { value: true });

   return exports;

}({}));
