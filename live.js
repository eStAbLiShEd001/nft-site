// const dropbtn = document.querySelector('.dropbtn');
// const content = document.querySelector('.dropdown-content')
// const show = document.querySelector('.show')
// dropbtn.addEventListener('click', function(){
//     show.classList.remove('dropdown-content')
// })

// ADDING A CLICK EVENT SO AS TO REVEAL HIDDEN TEXTS IN THE SHOW-BTN CLASS

const displayBtn = document.querySelector(".btn-child");
const displayBtn1 = document.querySelector(".btn-child1");
const displayBtn2 = document.querySelector(".btn-child2");
const displayBtn3 = document.querySelector(".btn-child3");

const displayText = document.querySelector(".display");
const displayText1 = document.querySelector(".display1");
const displayText2 = document.querySelector(".display2");
const displayText3 = document.querySelector(".display3");

//
displayBtn.addEventListener("click", function () {
  displayText.classList.toggle("hidden0");
});
displayBtn1.addEventListener("click", function () {
  displayText1.classList.toggle("hidden1");
});
displayBtn2.addEventListener("click", function () {
  displayText2.classList.toggle("hidden2");
});
displayBtn3.addEventListener("click", function () {
  displayText3.classList.toggle("hidden3");
});
