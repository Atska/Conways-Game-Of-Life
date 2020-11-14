import { createGrid } from "../createGrid";

it("should create a valid grid", () => {
  const testGrid = createGrid(2, 2);
  expect(testGrid).toHaveLength(2);
  expect(testGrid[0]).toHaveLength(2);
  expect(testGrid[1][1].row).toBe(1);
  expect(testGrid[1][1].column).toBe(1);
  expect(testGrid[1][1].isCell).toBeFalsy();
});
