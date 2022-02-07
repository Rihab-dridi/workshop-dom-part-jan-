//**--like function--**/
//step1: select the element (like button )
//step2: swap the array (for loop)
//step3: link the element   with an  event
//step: create a function with the needed instructions 

let likes = document.querySelectorAll(".like-btn");
console.log(likes);

for (let i = 0; i < likes.length; i++) {
  console.log(likes[i]);
  likes[i].addEventListener("click", function () {
    if (likes[i].style.color === "grey") {
      likes[i].style.color = "red";
    } else {
      likes[i].style.color = "grey";
    }
  });
}
//**--plus  function--**/
//step1: select the element (plus  button )
//step2: swap the array (for loop)
//step3: link the element   with an  event
let plusBtn=document.querySelectorAll('.plus-btn')
// let qtt=document.querySelectorAll('.number-items')
//console.log(qtt);


for (let i=0; i<plusBtn.length;i++){
plusBtn[i].addEventListener('click',function(){
//console.log(plusBtn[i].nextElementSibling.innerHTML);
plusBtn[i].nextElementSibling.innerHTML++
})
}