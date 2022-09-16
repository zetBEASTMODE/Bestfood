var slider = tns({
    container: '.review__inner',
    items: 3,
    slideBy: 'page',
    autoplay: false,
    nav: true,
    navItems: 3,
    navPosition: "bottom"
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });