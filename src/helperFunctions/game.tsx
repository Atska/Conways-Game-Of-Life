import { INode } from "../interface/interface";
import liveNeighborCount from "./liveNeighborCount";
/**
 * Simulation of the game of life
 * @param grid
 */
const game = (grid: INode[][]): INode[][] => {
  const newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    const newRows = [];
    for (let j = 0; j < grid[0].length; j++) {
      const neigh = liveNeighborCount(grid[i][j], grid);
      let c = grid[i][j];
      // 1# rule: Any living cell with less than 2 and more than 3 live neighbors dies
      // 2# rule: Any dead cell with three live neigh becomes alive
      if (neigh === 3 && c.isCell === false) {
        c = { row: i, column: j, isCell: true };
      } else if (neigh < 2 || neigh > 3) {
        c = { row: i, column: j, isCell: false };
      }

      newRows.push(c);
    }
    newGrid.push(newRows);
  }

  return newGrid;
};

export default game;
