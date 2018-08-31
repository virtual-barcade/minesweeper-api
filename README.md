# Minesweeper API &middot; [![Build Status](https://travis-ci.org/virtual-barcade/minesweeper-api.svg?branch=master)](https://travis-ci.org/virtual-barcade/minesweeper-api)

## Game State

The Minesweeper game is internally represented by a 2D array of integers. See below for the range of integer values and their meanings.

### Cell State Legend:

- 0: Unvisited, no bomb

- 1: Unvisited, bomb

- 2: Visited, no bomb

- 3: Unvisited, no bomb, flagged

- 4: Unvisited, bomb, flagged

A client to this API interacts with the internal board state via the public game grid, a 2D array of strings representing what the player sees when they play the game.

## API

Public Methods:

- `checkCell` - Select a cell to sweep for a bomb.
- `flagCell` - Flag a cell as possibly having a bomb.
- `cellIsFlagged` - Check if a cell is flagged.
- `getNumRows` - Returns height of underlying matrix i.e. number of rows.
- `getNumColumns` - Returns width of underlying matrix i.e. number of columns.
- `getNumBombs` - Returns number of bombs in matrix.
- `getStatus` - Returns game status e.g. won, lost, or in-progress.
- `getGrid` - Returns a 2D array of strings representing what the player sees when they play the game.

## Usage

```javascript
// require statement
const MinesweeperGame = require('minesweeper-ultimate');

// import statement
import MinesweeperGame from 'minesweeper-ultimate';
```

```javascript
const game = new MinesweeperGame(/* difficulty */, /* options */);
```

Difficulty setting is required. If difficulty set to `'custom'`, options are required, otherwise they are unused.

Difficulty Settings:

- `'easy'`
- `'medium'`
- `'hard'`
- `'custom'`

Options Interface:

```javascript
{
  n: /* number of rows */,
  m: /* number of columns */,
  b: /* number of bombs */
}
```

```javascript
game.checkCell(/* row */, /* column */); /* --> void */

/*
Checks a cell for a bomb. If cell does not have a bomb, counts surrounding bombs. If surrounding bomb count is zero, sweeps grid until it has found cells with a bomb count. Returns void i.e. implicit return of undefined.
*/
```

```javascript
game.flagCell(/* row */, /* column */); /* --> void */

/*
Updates board state to indicate cell is flagged. Can only flag unvisited cells. Returns void i.e. implicit return of undefined.
*/
```

```javascript
game.cellIsFlagged(/* row */, /* column */); /* --> boolean */

/*
Returns true if cell is flagged and false if not.
*/
```

```javascript
game.getNumRows(); /* --> integer */

/*
Returns height of underlying matrix i.e. number of rows.
*/
```

```javascript
game.getNumColumns(); /* --> integer */

/*
Returns width of underlying matrix i.e. number of columns.
*/
```

```javascript
game.getNumBombs(); /* --> integer */

/*
Returns number of bombs in matrix.
*/
```

```javascript
game.getStatus(); /* --> string */

/*
Returns game status as a string e.g. won, lost, or in-progress.
*/
```

```javascript
game.getGrid(); /* --> [][]string */

/*
Returns a 2D array of strings representing what the player sees when they play the game.
*/
```
