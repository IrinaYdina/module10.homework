const btn = document.querySelector(".btn");
const icon1 = document.querySelector(".btn_icon");
const icon2 = document.querySelector(".btn_icon2");
let count = 0;

btn.addEventListener('click', () => {
  count ++;
 if(count % 2 == 0){
  icon1.classList.remove("hidden");
  icon2.classList.add("hidden");
 } else {
  icon2.classList.remove("hidden");
  icon1.classList.add("hidden");
 }
  
});