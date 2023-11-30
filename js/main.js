var elInp = document.querySelector('.inp')
var elPiyoda = document.querySelector('.Piyoda')
var elVelosiped = document.querySelector('.Velosiped')
var elMashina = document.querySelector('.Mashina')
var elSamalyot = document.querySelector('.Samalyot')


function calc(){
  console.log(elInp.value /4);
  elPiyoda.textContent = elInp.value / 4
  elVelosiped.textContent = elInp.value / 20
  elMashina.textContent = elInp.value / 50
  elSamalyot.textContent = elInp.value / 100
} 