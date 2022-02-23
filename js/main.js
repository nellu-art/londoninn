const $num = $('.ui-card').length;
const $even = $num / 2;
const $odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.videoCarousel .ui-card:nth-child(' + $even + ')').addClass('active');
  $('.videoCarousel .ui-card:nth-child(' + $even + ')')
    .prev()
    .addClass('prev');
  $('.videoCarousel .ui-card:nth-child(' + $even + ')')
    .next()
    .addClass('next');
} else {
  $('.videoCarousel .ui-card:nth-child(' + $odd + ')').addClass('active');
  $('.videoCarousel .ui-card:nth-child(' + $odd + ')')
    .prev()
    .addClass('prev');
  $('.videoCarousel .ui-card:nth-child(' + $odd + ')')
    .next()
    .addClass('next');
}

$('.videoCarousel .ui-card').click(function () {
  const $slide = $('.active').width();

  if ($(this).hasClass('next')) {
    $('.videoCarousel')
      .stop(false, true)
      .animate({ left: '-=' + $slide });
  } else if ($(this).hasClass('prev')) {
    $('.videoCarousel')
      .stop(false, true)
      .animate({ left: '+=' + $slide });
  }

  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');

  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});

// Keyboard nav
$('html body').keydown(function (e) {
  if (e.keyCode == 37) {
    // left
    $('.active').prev().trigger('click');
  } else if (e.keyCode == 39) {
    // right
    $('.active').next().trigger('click');
  }
});
