import { INode } from "../interface/interface";

function createGrid(maxRow: number, maxColumn: number): INode[][] {
  const grid = [];

  for (let row = 0; row < maxRow; row++) {
    const currentRow = [];

    for (let column = 0; column < maxColumn; column++) {
      let nodeSchema: INode = {
        row: row,
        column: column,
        isCell: false,
      };
      currentRow.push(nodeSchema);
    }
    grid.push(currentRow);
  }

  return grid;
}

export default createGrid;
