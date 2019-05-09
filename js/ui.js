document.addEventListener('DOMContentLoaded', function () {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {
    edge: 'right'
  });
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {
    edge: 'left'
  });
  // carousel
  const elems = document.querySelectorAll('.carousel');
  M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true,
  });
});