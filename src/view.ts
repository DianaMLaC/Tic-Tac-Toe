import Game from './game'

class View {
  game: Game
  el: HTMLElement
  constructor(game: Game, el: HTMLElement) {
    this.game = game
    this.el = el

    this.handleClick = this.handleClick.bind(this)
    this.setupBoard()
  }

  setupBoard() {
    const ul = document.createElement('ul')
    ul.className = 'board'

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const li = document.createElement('li')
        li.className = 'cell'
        li.dataset.row = r.toString()
        li.dataset.col = c.toString()

        li.addEventListener('click', this.handleClick)

        ul.appendChild(li)
      }
    }
    this.el.appendChild(ul)
  }

  handleClick(event: MouseEvent) {
    const clickedCell = event.target as HTMLLIElement
    const { row, col } = clickedCell.dataset

    if (row === undefined || col === undefined) {
      throw new Error('row or col are undefined')
    }
    const posPlayed = [parseInt(row), parseInt(col)]
    // console.log(posPlayed)
    this.game.play(posPlayed)
    // console.log(this.game.board.grid)
    this.matchScreenWithBoard(posPlayed)
  }

  matchScreenWithBoard(pos: number[]) {
    const grid = this.game.board.grid
    // console.log(grid)
    const [row, col] = pos
    // console.log(row, col)
    const boardPos = grid[row][col]
    const li = this.el.querySelector(`li[data-row="${row}"][data-col="${col}"]`)
    if (li === null) {
      throw new Error("Li can't be found")
    }
    // console.log(boardPos)
    // console.log(li)
    li.textContent = boardPos === null ? '' : boardPos
  }
}
export default View
