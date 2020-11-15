let Nav = document.getElementById('nav');
let Toggler = document.getElementById('toggler');
let Icon = document.getElementById('icon');

Toggler.addEventListener('click', function () {
  Nav.classList.toggle('active');
  if (Icon.classList.contains('fa-bars')) {
    Icon.classList.remove('fa-bars');
    Icon.classList.add('fa-times');
  } else {
    Icon.classList.remove('fa-times');
    Icon.classList.add('fa-bars');
  }
});
