var modal = document.getElementById("myModal"); // Overlay
var btn = document.getElementById("myBtn"); // Кнопка, яка відкриває віконце
var span = document.getElementsByClassName("close")[0]; //<span>, який закриває віконце

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