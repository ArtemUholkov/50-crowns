const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const popupSlide = document.querySelector('#popupSlide');
const sliderItem = document.querySelectorAll('.our_requirements_content_item');
const sliderPhoto = document.querySelector('.our_requirements_img');
const body = document.body;

burger.addEventListener('click', burgerHandler);
popup.addEventListener('click', (e) => {
  burgerHandler(e);
});

sliderItem.forEach((e) => {
  e.addEventListener('click', () => {
    setImage(e, sliderItem);
  });
});

function burgerHandler(e) {
  if (popup.classList.contains('open')) {
    popup.classList.add('close');
    body.classList.remove('noscroll');
    popupSlide.classList.add('slideout');

    setTimeout(() => {
      popup.classList.remove('close');
      popup.classList.remove('open');
      popupSlide.classList.remove('slideout');
      popupSlide.classList.remove('slidein');
    }, 300);
  } else {
    body.classList.add('noscroll');
    popup.classList.add('open');
    popupSlide.classList.add('slidein');
  }
  burger.classList.toggle('active');
}
function myFunction() {
  setTimeout(() => {
    window.location.href = 'thankyou.html';
  }, 2000);
}
function scrollToBrands() {
  document.querySelector('#brands').scrollIntoView(true);
}
function scrollToAdvantages() {
  document.querySelector('#advantages').scrollIntoView(true);
}
function scrollToTestimonials() {
  document.querySelector('#testimonials').scrollIntoView(true);
}
function scrollToContacts() {
  document.querySelector('#contacts').scrollIntoView(true);
}
