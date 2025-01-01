class Board {
  // static SIZE = 3
  // static X: 'X'
  // static O: 'O'
  static MARKS = ['X', 'O']
  grid: string[][]
  // el: HTMLElement
  // pos: number[]

  constructor() {
    // const grid = new Array(3).fill(null).map((e) => (e = ['', '', '']))
    const grid = Array.from({ length: 3 }, (): string[] => ['', '', ''])
    this.grid = grid
    // this.el = el
  }
  // draw(): boolean {
  //   return this.grid.flat().none((el): boolean => el === '')
  // }
  isEmpty(): boolean {
    return this.grid.flat().every((el): boolean => el !== '')
  }

  isPosEmpty(pos: number[]): boolean {
    const [row, col] = pos
    const mark = this.grid[row][col]
    return mark === ''
  }

  isPosValid(pos: number[]): boolean {
    if (!this.isPosEmpty(pos)) {
      return false
    }

    const [row, col] = pos
    // console.log('empty')
    if (this.isInRange(row) && this.isInRange(col)) {
      // console.log('in range')
      return true
    }
    // console.log('not in range')
    return false
  }

  isInRange(num: number): boolean {
    if (num >= 0 && num <= 3) {
      return true
    } else {
      return false
    }
  }

  placeMark(pos: number[], mark: string): void {
    const [row, col] = pos
    this.grid[row][col] = mark
  }

  // drawBoard(el: HTMLElement) {
  //   const ul = document.createElement('ul')
  //   ul.className = 'board'

  //   for (let r = 0; r < 3; r++) {
  //     for (let c = 0; c < 3; c++) {
  //       const li = document.createElement('li')
  //       li.className = 'cell'
  //       li.dataset.row = r.toString()
  //       li.dataset.col = c.toString()

  //       ul.appendChild(li)
  //     }
  //   }
  //   el.appendChild(ul)
  // }

  winRow(mark: string): boolean {
    if (this.grid[0].every((el): boolean => el === mark)) {
      return true
    } else if (this.grid[1].every((el): boolean => el === mark)) {
      return true
    } else if (this.grid[2].every((el): boolean => el === mark)) {
      return true
    } else {
      return false
    }
  }

  winCol(mark: string): boolean {
    const colResults = []
    for (let i = 0; i < 3; i++) {
      const column = this.checkCol(i)
      if (column.every((el): boolean => el === mark)) {
        colResults.push(1)
      } else {
        colResults.push(0)
      }
    }
    if (colResults.some((el): boolean => el === 1)) {
      return true
    } else {
      return false
    }
  }

  checkCol(col: number): string[] {
    const result = []
    for (let row = 0; row < 3; row++) {
      result.push(this.grid[row][col])
    }
    return result
  }

  winDiagonal(mark: string): boolean {
    const diagonalRight = [] as string[]
    for (let i = 0; i < 3; i++) {
      diagonalRight.push(this.grid[i][i])
    }

    const diagonalLeft: string[] = []

    for (let r = 0; r < 3; r++) {
      for (let c = 2; c >= 0; c--) {
        if (r + c == 2) {
          diagonalLeft.push(this.grid[r][c])
        }
      }
    }

    // console.log(diagonalLeft )
    // console.log(diagonalRight)
    if (diagonalRight.every((el): boolean => el === mark)) {
      return true
    } else if (diagonalLeft.every((el): boolean => el === mark)) {
      return true
    } else {
      return false
    }
  }

  win(mark: string): boolean {
    if (this.winRow(mark)) {
      // correct
      console.log('win row')
      return true
    } else if (this.winCol(mark)) {
      console.log('win col')

      return true
    } else if (this.winDiagonal(mark)) {
      console.log('win diagonally')

      return true
    } else {
      // console.log('win booooo')

      return false
    }
  }
}

export default Board
