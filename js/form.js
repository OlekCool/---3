//USER_FORM
let modal = document.getElementById("myModal"); // Overlay
let btn = document.getElementById("myBtn"); // Кнопка, яка відкриває віконце
let span = document.getElementsByClassName("close")[0]; //<span>, який закриває віконце

console.log(modal);
console.log(btn);
console.log(span);

// Коли користувач натиснув кнопку, відображаємо віконце
btn.onclick = function() {
  modal.style.display = "block";
  document.body.classList.add('modal-open');
}

// Коли користувач натиснув <span> (x), приховуємо віконце
span.onclick = function() {
  modal.style.display = "none";
  document.body.classList.remove('modal-open');
}

// Коли користувач натиснув навколо віконця, приховуємо його
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove('modal-open')
  }
}





//CALCULATION_FORM
let radius_field = document.getElementById("radius");
let height_field = document.getElementById("height");
let result_field = document.getElementById("result");
let checkbox_info = document.getElementById("addinfo");
let btn_calc = document.getElementById("calc");
let btn_clear = document.getElementById("clear");
let checkbox = document.getElementById("addinfo");
let addinfotext = document.getElementById("additionalinfo")
let square_surf;

btn_calc.onclick = function(){
  let radius = parseFloat(radius_field.value);
  let height = parseFloat(height_field.value);

  let radius_error = document.getElementById("radius_error");
  let height_error = document.getElementById("height_error");

  radius_error.textContent = "";
  height_error.textContent = "";

  if(isNaN(radius) || radius <= 0 || isNaN(height) || height <= 0){
    if(isNaN(radius) || radius <= 0){
      radius_error.textContent = "Поле radius має бути числом, яке більше 0";
      radius_field.classList.add('wrong_radius');
      result_field.value = "";
    }
    if(isNaN(height) || height <= 0){
      height_error.textContent = "Поле height має бути числом, яке більше 0";
      height_field.classList.add('wrong_height');
      result_field.value = "";
    }
  } else {
    radius_field.classList.remove('wrong_radius');
    height_field.classList.remove('wrong_height');
    radius_error.textContent = "";
    height_error.textContent = "";

    square_surf = (2*Math.PI*radius*(height + radius)).toFixed(2); 
    result_field.value = square_surf;
  }
}

btn_clear.onclick = function(){
  radius_field.value = "";
  height_field.value = "";
  result_field.value = "";
  height_error.textContent = "";
  radius_error.textContent = "";
  radius_field.classList.remove('wrong_radius');
  height_field.classList.remove('wrong_height');
  checkbox.checked = false;
  addinfotext.style.display = "none";
}

function toggleInfo() {
  addinfotext.style.display = checkbox.checked ? "block" : "none";
}