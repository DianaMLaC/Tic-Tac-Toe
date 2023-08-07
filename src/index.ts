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

  // const player_one = new Player('X')
  // const player_two = new Player('O')
  const game = new Game(el, result)
  // game.play()
  const view = new View(game, el)
})
