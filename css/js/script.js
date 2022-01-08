 const hideText=document.querySelectorAll('.hideTextContainer'),
arrow = document.querySelectorAll(".arrow");

function createarr() {
  
  let array = Array.from(arrow);

  for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("click",()=>{
      console.log(hideText);
      let hiddenEl= array[i].previousElementSibling;
       hiddenEl.querySelector('.hideTextContainer').classList.toggle('hideText');
       array[i].classList.toggle('fa-angle-up');
    });
  }
}
createarr();
