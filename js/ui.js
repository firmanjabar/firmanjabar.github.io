const contents = document.querySelector('.contents');
const modul = document.querySelector('.modul');

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
  // carousel
  const modals = document.querySelectorAll('.modal');
  M.Modal.init(modals, {
    preventScrolling: true,
    dismissible: true,
  });
});

// render contents data
const renderContent = (data, id) => {

  const html = `
    <div class="card-panel content white row" data-id="${id}">
      <div class="content-details truncate">
          <a href="/pages/editMateri.html">
              <div class="content-title grey-text text-darken-2">${data.title}</div>
              <div class="content-detail grey-text" style="padding-bottom: 4px;">${data.detail}</div>
          </a>
      </div>
      <div class="content-delete" style="margin-bottom: 35px;">
          <i class="material-icons" data-id="${id}">delete_outline</i>
      </div>
    </div>
  `;
  contents.innerHTML += html;
};

// remove content
const removeContent = (id) => {
  const content = document.querySelector(`.content[data-id=${id}]`);
  content.remove();
};