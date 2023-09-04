let Text = document.getElementById('header-text');
window.addEventListener('scroll', () => {
  let value = window.scrollY;
  text.stlye.marginTop = value * 2.5 + 'px';
});
const navEl = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navEl.classList.add('scrolled');
  } else {
    navEl.classList.remove('scrolled');
  }

});
