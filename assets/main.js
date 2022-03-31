function bindMenuToggle() {

  const menuToggler = document.querySelector('.navbar-toggler');
  if (!menuToggler)
    return;
 

  menuToggler.addEventListener('click', function(click) {

    const menuId = menuToggler.dataset.target;
    if (!menuId)
      return;

    var menu = document.querySelector(menuId);
    if (!menu)
      return;

    menu.classList.toggle("show");
  })
}

function bindScroll() {
  const menu = document.querySelector("#mainNav");
  if (!menu)
    return;

  let shrinkMenu = function() {
    if (!menu)
      return;

    if (window.scrollY > 0)
      menu.classList.add('navbar-shrink');
    else
      menu.classList.remove('navbar-shrink');
  };

  shrinkMenu();
  document.addEventListener("scroll", shrinkMenu);
}

window.addEventListener('DOMContentLoaded', function(event) {
  bindMenuToggle();
  bindScroll();
});

