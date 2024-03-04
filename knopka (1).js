const btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
  let screenWidth = window.screen.width;
  let screenHeight = window.screen.height;
  alert(`Высота экрана равна: ${screenHeight} px, ширина экрана равна: ${screenWidth} px`);
});