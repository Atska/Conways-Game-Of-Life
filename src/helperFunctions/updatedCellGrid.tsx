import { INode } from "../interface/interface";

/**
 * Creates a new grid and changes the grid[i][j].isCell in false or true
 * @param grid Matrix of Node objects
 * @param row row location
 * @param column column location
 */
const updatedCellGrid = (grid: INode[][], row: number, column: number) => {
  const currentNode = grid[row][column];
  if (currentNode.isCell) {
    currentNode.isCell = false;
  } else {
    currentNode.isCell = true;
  }
  let newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    newGrid.push(grid[i]);
  }
  return newGrid;
};

export default updatedCellGrid;
