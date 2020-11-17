import { INode } from "../interface/interface";

/**
 * Counts the number of live neighbor cells of current node
 * @param currentNode
 * @param grid
 * @returns number of live cell
 */
const liveNeighborCount = (currentNode: INode, grid: INode[][]): number => {
  // direction of possible neighbors in a grid
  const directions = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];

  let count = 0;

  for (let direction of directions) {
    const rowIdx = currentNode.row + direction[0];
    const colIdx = currentNode.column + direction[1];

    if (
      rowIdx >= 0 &&
      colIdx >= 0 &&
      rowIdx < grid.length &&
      colIdx < grid[0].length &&
      grid[rowIdx][colIdx].isCell
    )
      count += 1;
  }

  return count;
};

export default liveNeighborCount;
