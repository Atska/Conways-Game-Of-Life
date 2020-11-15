import { INode } from "../interface/interface";

/**
 *
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
