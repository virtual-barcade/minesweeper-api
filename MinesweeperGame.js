class MinesweeperGame {
  constructor() {
    this.status = null;
    this.grid = null;
    this.matrix = null;
  }

  setGameBoard(matrix) {
    this.status = 'in-progress';
    this.grid = this.initializeGrid(matrix.length, matrix[0].length);
    this.matrix = matrix;
  }

  initializeGrid(n, m) {
    const grid = [];
    for (let i = 0; i < n; i += 1) {
      const row = new Array(m).fill('_');
      grid.push(row);
    }
    this.grid = grid;
    return this.grid;
  }

  revealGrid() {
    for (let i = 0; i < this.matrix.length; i += 1) {
      const row = this.matrix[i];
      for (let j = 0; j < row.length; j += 1) {
        const val = row[j];
        if (val === 1) {
          this.grid[i][j] = 'B';
        }
      }
    }
    return this.grid;
  }

  checkCell(row, col) {
    let counter = 0;
    for (let i = row - 1; i <= row + 1; i += 1) {
      const rowOfVals = this.matrix[i];
      if (rowOfVals) {
        for (let j = col - 1; j <= col + 1; j += 1) {
          const value = rowOfVals[j];
          if (Number.isInteger(value) && value === 1) {
            counter += 1;
          }
        }
      }
    }
    this.grid[row][col] = counter.toString();
    return this.grid;
  }
}

module.exports = MinesweeperGame;
