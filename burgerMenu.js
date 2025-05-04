
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

burger.addEventListener('click', () => {
  navigation.classList.toggle('active');
  burger.classList.toggle('active'); // додаємо клас для анімації бургеру
});