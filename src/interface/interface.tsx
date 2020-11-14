export interface INode {
  row: number;
  column: number;
  isCell: boolean;
}

export interface GameProps {
  isRunning: boolean;
  grid: INode[][];
  setGrid: any;
}

export interface NodeProps {
  row: number;
  column: number;
  isCell: boolean;
  handleOnClick: any;
  onMouseDown: any;
  onMouseUp: any;
  onMouseEnter: any;
}
