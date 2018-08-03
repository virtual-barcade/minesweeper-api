/* eslint-disable no-undef, no-underscore-dangle */

const MinesweeperGame = require('./MinesweeperGame');

describe(`MinesweeperGame's constructor`, () => {
  let game;

  beforeAll(() => {
    game = new MinesweeperGame();
  });

  test('should initialize the status, grid, and matrix properties as null.', () => {
    expect(game.status).toBe(null);
    expect(game.grid).toBe(null);
    expect(game.matrix).toBe(null);
  });
});

describe(`MinesweeperGame's initializeGrid method`, () => {
  // prettier-ignore
  const bombMatrix = [
    [0, 1, 0, 0], 
    [0, 1, 1, 0], 
    [0, 0, 0, 1], 
    [0, 0, 0, 1]
  ];

  let game;

  beforeAll(() => {
    game = new MinesweeperGame();
  });

  test('should return a grid representation of the input matrix as an N x M 2D array of underscore strings.', () => {
    const result = game.initializeGrid(bombMatrix.length, bombMatrix[0].length);
    // prettier-ignore
    const expected = [
      ['_', '_', '_', '_'],
      ['_', '_', '_', '_'],
      ['_', '_', '_', '_'],
      ['_', '_', '_', '_'],
    ];
    expect(result).toEqual(expected);
  });
});

describe(`MinesweeperGame's setGameBoard method`, () => {
  // prettier-ignore
  const bombMatrix = [
    [0, 1, 0, 0], 
    [0, 1, 1, 0], 
    [0, 0, 0, 1], 
    [0, 0, 0, 1]
  ];

  let game;

  beforeAll(() => {
    game = new MinesweeperGame();
  });

  test('should set the game properties.', () => {
    game.setGameBoard(bombMatrix);
    // prettier-ignore
    const expectedGrid = [
      ['_', '_', '_', '_'],
      ['_', '_', '_', '_'],
      ['_', '_', '_', '_'],
      ['_', '_', '_', '_'],
    ];
    expect(game.status).toBe('in-progress');
    expect(game.grid).toEqual(expectedGrid);
    expect(game.matrix).toBe(bombMatrix);
  });
});
