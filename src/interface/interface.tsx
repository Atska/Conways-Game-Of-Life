export interface INode {
  row: number;
  column: number;
  isCell: boolean;
}

export interface GameProps {
  isRunning: boolean;
  grid: INode[][];
  setGrid: (grid: INode[][]) => void;
}

export interface NodeProps {
  row: number;
  column: number;
  isCell: boolean;
  handleOnClick: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseEnter: () => void;
}

export interface NavbarProps {
  isRunning: boolean;
  handleRunning: () => void;
}
