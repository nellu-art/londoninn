const selectedNum = 2;

$('.videoCarousel .ui-card:nth-child(' + selectedNum + ')').addClass('active');
$(
  '.videoCarousel .ui-card:nth-child(' + selectedNum + ')'
).children()[0].hidden = false;

$('.videoCarousel .ui-card:nth-child(' + selectedNum + ')')
  .prev()
  .addClass('prev');
$('.videoCarousel .ui-card:nth-child(' + selectedNum + ')')
  .next()
  .addClass('next');

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
  setTimeout(() => {
    $(this).children()[0].hidden = false;
  }, 0)
  $(this).prev().addClass('prev');
  if ($(this).prev().children().length)
    $(this).prev().children()[0].hidden = true;
  $(this).next().addClass('next');
  if ($(this).next().children().length)
    $(this).next().children()[0].hidden = true;
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
