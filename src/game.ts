import Board from './board'

class Game {
  board: Board
  currentPlayer: string
  el: HTMLElement
  result: HTMLParagraphElement

  constructor(el: HTMLElement, result: HTMLParagraphElement) {
    this.el = el
    this.board = new Board()
    this.currentPlayer = Board.MARKS[0]
    this.result = result
  }

  switchTurn(): string {
    if (this.currentPlayer === Board.MARKS[0]) {
      this.currentPlayer = Board.MARKS[1]
    } else {
      this.currentPlayer = Board.MARKS[0]
    }
    return this.currentPlayer
  }

  playMove(pos: number[]) {
    if (this.board.isPosValid(pos)) {
      this.board.placeMark(pos, this.currentPlayer)
    } else {
      throw new Error('Position not valid')
    }
  }

  play(pos: number[]) {
    const posPlayed = pos
    this.playMove(posPlayed)
    if (this.board.win(this.currentPlayer)) {
      this.winGame()
    } else if (this.board.isEmpty()) {
      this.draw()
    } else {
      this.switchTurn()
    }
  }
  winGame(): void {
    const res = this.result
    res.textContent = `Player ${this.currentPlayer} won!`
  }

  draw() {
    const res = this.result
    res.textContent = 'Draw. Try Again by refreshing the page!'
  }
}

export default Game
