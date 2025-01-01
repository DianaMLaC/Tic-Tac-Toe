import Game from './game'
import View from './view'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('figure')
  if (el === null) {
    throw new Error('Game HTML element does not exist')
  }
  const div = document.querySelector('div')
  if (div === null) {
    throw new Error('Game HTML element does not exist')
  }
  const result = document.createElement('p')
  if (result === null) {
    throw new Error('Game HTML element does not exist')
  }
  div.appendChild(result)

  const game = new Game(el, result)
  new View(game, el)
})
