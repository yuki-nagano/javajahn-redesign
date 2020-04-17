$(document).ready(function() {
  $('#slides').superslides({
    animation: 'fade', // fade between images
    play: 5000, //change images in 5 sec
    pagination: false //turn off "ooo" on the bottom
  });
})

  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:15,
    responsiveClass:true,
    responsive:{
        0:{
            items:1.2,
            dots:true
        },
          500:{
            items:1.7,
            dots:true
        },
          768:{
            items:2.5,
            dots:true
        },
          1000:{
            items:3.2,
            dots:true
        },

      }
  });

// change navbar bg-color when scroll
window.addEventListener('scroll', turnNavbarDarker);

function turnNavbarDarker() {
  // window height(int)
  let afterTop = document.getElementById('slides').clientHeight;
  let newPageYOffset = 0.0;
  // see through until the window height of the top picture
  if (pageYOffset < afterTop) {
    document.getElementsByTagName('nav')[0].style.backgroundColor = "rgba(" + 
    37 + ',' + 
    17 + ',' + 
    3  + ',' + 
    0  + ")";
  } else {
    newPageYOffset = (pageYOffset - afterTop) / 300;
    // for see through
    // if (newPageYOffset > 0.9) {
    //   newPageYOffset = 0.9;
    // }
    document.getElementsByTagName('nav')[0].style.backgroundColor = "rgba(" +
    37 + ',' +
    17 + ',' +
    3  + ',' +
    newPageYOffset + ")";
  }
}


window.addEventListener('scroll', addSwing);

function addSwing() {
 // get target elements(array)
  const swingMoves =  document.querySelectorAll(`.swing_moves`);
// window height
let clientHeight = document.getElementById('slides').clientHeight;

  for (let i = 0; i < swingMoves.length; i++) {
    // add swing when y-offset is anout a half number of window size
    if (swingMoves[i].getBoundingClientRect().y < (clientHeight / 1.3)) {
      swingMoves[i].classList.add('animated', 'swing');
    } else {
      // otherwise remove swing 
      swingMoves[i].classList.remove('animated', 'swing');
    }
  } 
}

// window.addEventListener('scroll', addFadeinUp);

// function addFadeinUp() {
//   const swingMoves =  document.querySelectorAll(`h2`);
//   console.log()
// }

















// add swing animation with delay time
//  // get target elements(array)
//  const swingMoves =  document.querySelectorAll(`.swing_moves`);
//  let animationDelaySec = 0;
//  for (let i = 0; i < swingMoves.length; i++) {
//    let delay = 'delay-' + animationDelaySec + 's';
//    swingMoves[i].classList.add('animated', 'swing', delay);
//    animationDelaySec++;
//  }



    // console.log(clientHeight);
    // let menuHeight = document.getElementById('menu').scrollHeight;
    // let currentOffset =  pageYOffset - (clientHeight + menuHeight);
    // console.log(pageYOffset);
    //console.log(swingMoves[0].getBoundingClientRect().y);
    // .clientHeight;
    //console.log(pageYOffset);
    // let currentPosition = pageYOffset - windowHeight;
    //console.log(windowHeight / 2 );
    // if (windowHeight > pageYOffset) {
    //   console.log('pageYOffset: ' + pageYOffset);
    //   console.log('swingMoves[i].clientHeight :' + swingMoves[0].clientHeight);
    //   
    // }
    
  // }
  
  

  //　const key = document.querySelector(`.swing_paper[data-swing="${e.keyCode}"]`);     // div class="key" so gotta put. together
  
  
  
  // get target offset
  // let targetOffset = animated[0].offsetTop;
  // window height
  // let windowHeight = document.getElementById('neighorhood').clientHeight;
  // get scroll position
  // if (pageYOffset === (windowHeight/ 2) {
  //   animated.classList.add('swing');
  // };
  // add classList when scroll position = target offset
  // animated.classList.add('swing');






// const images = ["pics/slides_1.jpg", "pics/slides_2.jpg", "pics/slides_3.jpg", "pics/slides_4.jpg"];

// let currentSlidesNum = 0;

// function showSlides() {
//   if (currentSlidesNum < images.length) {
//   // document.getElementById('slides').src = images[currentSlidesNum];
//     currentSlidesNum++;
//   } else {
//     currentSlidesNum = 0;
//   }
// }

// setInterval(showSlides, 5000);