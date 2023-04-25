window.addEventListener('load', () => {
  console.log(document.querySelector('.page-loader'));
  setTimeout(() => {
    document.querySelector('.loading-page').style.display = 'none';
    document.querySelector('.navigation').classList.remove('hidden');
    document.querySelector('.header').classList.remove('hidden');
    document.querySelector('.main').classList.remove('hidden');
    document.querySelector('.footer').classList.remove('hidden');
  }, 3500);
});

// Animation show/hide
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      // entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el));
