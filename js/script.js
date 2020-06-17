// slider
$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

// form mail
let submit = document.querySelector('#submit');
submit.addEventListener('click', function () {
  let myPhone = document.querySelector('#phone').value;
  if (myPhone !== '' && !isNaN(myPhone)) {
    alert('Сообщение отправлено!');
  }
});

// radio buttons
$.each($('.radio__item'), function (index, val) {
  if ($(this).find('input').prop('checked') == true) {
    $(this).addClass('active');
  }
});
$(document).on('click', '.radio__item', function (event) {
  $(this).parents('.radio').find('.radio__item').removeClass('active');
  $(this).parents('.radio').find('.radio__item input').prop('checked', false);
  $(this).toggleClass('active');
  $(this).find('input').prop('checked', true);
  return false;
});

// tabs for section 5
$('#tabs a').click(function () {

  $('#tabs a').removeClass('current');
  $(this).addClass('current');

  $('.tabs__content>div').hide();
  t_content = $(this).attr('href');
  $(t_content).css('display', 'flex');

  return false;
});

$('#tabs a:first').trigger('click');

// mobile menu
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__tel').toggleClass('mobile');
    $('body').toggleClass('lock');
  });
});