"use strict";

/* Script */

/* Button Up */
window.addEventListener('scroll', function () {
  var buttonUp = document.querySelector('.about__button');
  var scroll = window.pageYOffset;

  if (scroll > 500) {
    buttonUp.style.opacity = '1';
    buttonUp.style.pointerEvents = 'all';
  } else {
    buttonUp.style.opacity = '0';
    buttonUp.style.pointerEvents = 'none';
  }
});
/* Anchors */

var anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    var blockID = item.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
/* LIBRARIES */