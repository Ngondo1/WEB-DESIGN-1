const navToggler = document.querySelector('.navbar-toggler');
const mobileNav = document.querySelector('.mobile-nav');

navToggler.addEventListener('click', () => {
  const visibility = mobileNav.getAttribute('data-visible');
  if (visibility === "false") {
    mobileNav.setAttribute('data-visible', "true");
  } else {
    mobileNav.setAttribute('data-visible', "false");
  }
});