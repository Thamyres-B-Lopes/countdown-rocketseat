const diasText = document.querySelector('#dias')
const horasText = document.querySelector('#horas')
const segundosText = document.querySelector('#segundos')
const minutosText = document.querySelector('#minutos')

const newYearsDate = new Date('1 jan 2025')

setInterval(countdown, 1000)

function countdown() {
  const { dias, horas, segundos, minutos } = precessCountdownValues()
  renderCountdown({ dias, horas, minutos, segundos })
}

function addPadStart(value) {
  return value < 10 ? `0${value}` : value
}
function precessCountdownValues() {
  const dataAtual = new Date()
  const totalSegundos = (newYearsDate - dataAtual) / 1000

  const dias = Math.floor((totalSegundos / 3600) / 24)
  const horas = Math.floor((totalSegundos / 3600) % 24)
  const segundos = Math.floor(totalSegundos / 24)
  const minutos = Math.floor((totalSegundos / 60) % 60)

  return {dias, horas,segundos,minutos }
}
function renderCountdown({ dias, horas, segundos, minutos }) {
  diasText.innerText = addPadStart(dias)
  horasText.innerText = addPadStart(horas)
  segundosText.innerText = addPadStart(segundos)
  minutosText.innerText = addPadStart(minutos)
}


