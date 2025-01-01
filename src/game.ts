import Board from './board'
// import Player from './player'

class Game {
  board: Board
  // playerX: Player
  // playerO: Player
  currentPlayer: string
  el: HTMLElement
  result: HTMLParagraphElement

  constructor(el: HTMLElement, result: HTMLParagraphElement) {
    this.el = el
    this.board = new Board()
    // this.playerX = new Player('X')
    // this.playerO = new Player('O')
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
    //switches from one player to another
  }

  playMove(pos: number[]) {
    if (this.board.isPosValid(pos)) {
      // console.log(pos)
      // console.log(this.currentPlayer)
      //board places mark
      this.board.placeMark(pos, this.currentPlayer)
    } else {
      // console.log(pos[0], pos[1])
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
    res.textContent = 'Draw. Try Again!'
  }
}

export default Game
