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
}

module.exports = MinesweeperGame;
