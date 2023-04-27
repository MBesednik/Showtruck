document.addEventListener('DOMContentLoaded', () => {
  let counter = 0;
  let c = 0;
  let h1 = document.querySelector('.loading-page .counter h1');
  let hr = document.querySelector('.loading-page .counter hr');
  let i = setInterval(function () {
    h1.innerHTML = c + ' %';
    hr.style.width = c + '%';
    counter++;
    c++;
    if (counter == 101) {
      clearInterval(i);
      document.querySelector('.loading-page').style.display = 'none';
      document.querySelector('.navigation').classList.remove('hidden');
      document.querySelector('.header').classList.remove('hidden');
      document.querySelector('.main').classList.remove('hidden');
      document.querySelector('.footer').classList.remove('hidden');
    }
  }, 17);
});
