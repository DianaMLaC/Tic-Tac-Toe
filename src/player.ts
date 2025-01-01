// class Player {
//   mark: string
//   constructor(mark: string) {
//     this.mark = mark
//   }

//   getPosition(event: MouseEvent) {
//     const clickedCell = event.target as HTMLLIElement
//     const { row, col } = clickedCell.dataset
//     if (row === undefined || col === undefined) {
//       throw new Error('row or col are undefined')
//     }

//     return [parseInt(row), parseInt(col)]

//     // on a canvas element we have click event
//     // the click event the returns a string with the corresponding position e.g. [0, 3]
//   }
// }

// export default Player
