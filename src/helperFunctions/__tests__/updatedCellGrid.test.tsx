import updatedCellGrid from "../updatedCellGrid";

const fakeGrid = [[{ row: 0, column: 0, isCell: false }]];

test("updatedCellGrid -> should create a new grid where the node in the [i][j]", () => {
  const newGrid = updatedCellGrid(fakeGrid, 0, 0);
  expect(newGrid).toHaveLength(1);
  expect(newGrid[0][0].isCell).toBeTruthy();
});
