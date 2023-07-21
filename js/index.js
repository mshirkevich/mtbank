$(document).ready(function() {
	$('.open-popup').magnificPopup({
		type: 'inline',
        showCloseBtn: false
	});
  $('.services .open-popup').on('click', function () {
    $('#popup input[name=type]').val($('.services .tabs__header-item--active').html().trim());
  });
  $('.leasing .open-popup').on('click', function () {
    $('#popup input[name=type]').val($(this).attr('title').trim());
  });
  $('.stock .open-popup').on('click', function () {
    $('#popup .popup__title').html($(this).attr('title').trim());
  });
  $('.popup__close').on('click', function() {
    $.magnificPopup.close();
  });
  $('input[name=phone]').inputmask("+375 (99) 999 99 99");

  if($('.main-slider').length) {
    $('.main-slider').slick({
      dots: true,
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5800
    });
  }
});

document.querySelectorAll('.input-item__inp').forEach(input => {
  input.addEventListener('keyup', function() {
    if($(this).val().length > 0) {
      $(this).parent().addClass('input-item--valid')
    } else {
      $(this).parent().removeClass('input-item--valid')
    }
  });
});

document.querySelectorAll('input[name=name]').forEach(input => {
  input.addEventListener('keyup', function(){
    let myregexp = /[А-Яа-я]{2,}/g;
    let match = myregexp.exec($(this).val());
    if(match != null) {
      $(this).parent('.input-item.validate').addClass('success').removeClass('error');
    } else {
      $(this).parent('.input-item.validate').addClass('error').removeClass('success');
    }
    let id = $(this).closest('form').attr('id');
    getValidForm('#' + id)
  });
})
document.querySelectorAll('input[name=unp]').forEach(input => {
  input.addEventListener('keyup', function(){
    let myregexp = /[0-9]{9}/g;
    let match = myregexp.exec($(this).val());
    if(match != null && $(this).val().length === 9) {
      $(this).parent('.input-item.validate').addClass('success').removeClass('error');
    } else {
      $(this).parent('.input-item.validate').addClass('error').removeClass('success');
    }
    let id = $(this).closest('form').attr('id');
    getValidForm('#' + id)
  });
});
document.querySelectorAll('.policy__inp').forEach(input => {
  input.addEventListener('change', function(){
    let id = $(this).closest('form').attr('id');
    getValidForm('#' + id)
  });
});

document.querySelectorAll('input[name=phone]').forEach(input => {
  input.addEventListener('keyup', function(){
    let myregexp = /\+[0-9]{3}\s\(([0-9]{2})\)\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}/g;
    let match = myregexp.exec($(this).val());
    if(match != null) {
      $(this).parent('.input-item.validate').addClass('success').removeClass('error');
    } else {
      $(this).parent('.input-item.validate').addClass('error').removeClass('success');
    }
    let id = $(this).closest('form').attr('id');
    getValidForm('#' + id)
  });
});


function getValidForm(id) {
  valid = true;
  if($(id + ' .policy__inp').is(':checked')) {
    valid = true
  } else {
    valid = false
  }
  document.querySelectorAll(id + ' .input-item.validate').forEach(input => {
    if(valid && $(input).hasClass('success')) {
      valid = true
    } else {
      valid = false
    }
  });
  if (valid) {
    $(id + ' button[type=submit]').attr('disabled', false)
  } else {
    $(id + ' button[type=submit]').attr('disabled', true)
  }
}


$('form').on('submit', (e) => {
  e.preventDefault();
  if($(this).attr('id') == 'popupAccount') {
    $.magnificPopup.close();
  }
  $('.sendForm').trigger('click');
});



let tabBtn = document.querySelectorAll('.tabs__header-item');
let tabContent = document.querySelectorAll('.tabs__content');

tabBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    const path = e.currentTarget.dataset.path;

    tabBtn.forEach(item => {
      item.classList.remove('tabs__header-item--active');
    });
    e.currentTarget.classList.add('tabs__header-item--active');

    tabContent.forEach(item => {
      item.classList.remove('tabs__content--active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content--active');
  });
});

let burgerBtn = document.querySelector('.mobile-btn');
let menu = document.querySelector('.header__nav');
let closeBtn = document.querySelector('.header-nav__close');

burgerBtn.addEventListener('click', () => {
  menu.classList.add('header__nav--active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('header__nav--active');
});
