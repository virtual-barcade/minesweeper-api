/* eslint-disable no-underscore-dangle */

class MinesweeperGame {
  constructor(matrix) {
    this._matrix = matrix;
    this.status = 'in-progress';
    this.grid = this._initializeGrid();
  }

  _initializeGrid() {
    const n = this._matrix.length;
    const m = this._matrix[0].length;
    const grid = [];
    for (let i = 0; i < n; i += 1) {
      const row = new Array(m).fill('_');
      grid.push(row);
    }
    this.grid = grid;
    return this.grid;
  }

  _revealGrid() {
    for (let i = 0; i < this._matrix.length; i += 1) {
      for (let j = 0; j < this._matrix[i].length; j += 1) {
        const value = this._matrix[i][j];
        if (value === 1) {
          this.grid[i][j] = 'B';
        }
      }
    }
    return this.grid;
  }

  _countBombs(row, col) {
    let counter = 0;
    for (let i = -1; i <= 1; i += 1) {
      if (this._matrix[row + i]) {
        for (let j = -1; j <= 1; j += 1) {
          const value = this._matrix[row + i][col + j];
          if (Number.isInteger(value) && value === 1) {
            counter += 1;
          }
        }
      }
    }
    return counter;
  }

  checkCell(row, col) {
    if (this._matrix[row][col] === 1) {
      this.status = 'lost';
      return this._revealGrid();
    }
    this.grid[row][col] = this._countBombs(row, col).toString();
    return this.grid;
  }
}

module.exports = MinesweeperGame;
