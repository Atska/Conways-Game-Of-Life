import liveNeighborCount from "../liveNeighborCount";

const fakeGrid = [
  [
    { row: 0, column: 0, isCell: false }, //currentNode
    { row: 0, column: 1, isCell: true },
  ],
  [
    { row: 1, column: 0, isCell: true },
    { row: 1, column: 1, isCell: false },
  ],
];

test("liveNeighborCount -> counts number of live cells neighbors", () => {
  const count = liveNeighborCount(
    { row: 0, column: 0, isCell: false },
    fakeGrid
  );
  expect(count).toBe(2);
});
