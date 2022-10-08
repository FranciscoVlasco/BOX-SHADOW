
const display = document.querySelector(".box-little");
const colorbox = document.querySelector(".color-box");
const selectColor = document.querySelector(".color-shadow");
const totalvalores= document.querySelectorAll("#bx");
const displayText = document.querySelector(".text");
const valBoxW = document.querySelector('.bHorizontal');
const valBoxH = document.querySelector('.bVertical');

colorbox.addEventListener("input", (e) =>{
  display.style.backgroundColor = e.target.value;
})
valBoxW.addEventListener("input", (e) =>{
  display.style.width = `${e.target.value}px`;
})
valBoxH.addEventListener("input", (e) =>{
  display.style.height = `${e.target.value}px`;
})

totalvalores.forEach((val) => val.addEventListener("input", generateShadow));

function generateShadow(){
  let h = document.querySelector(".horizontal").value;
  let v = document.querySelector(".vertical").value;
  let b = document.querySelector(".blur").value;
  let s = document.querySelector(".spread").value;
  let c = document.querySelector(".color-shadow").value;

  display.style.boxShadow = `${h}px ${v}px ${b}px ${s}px ${c}`;
  displayText.innerHTML = `box-shadow: ${h}px ${v}px ${b}px ${s}px ${c};`;
  
}

