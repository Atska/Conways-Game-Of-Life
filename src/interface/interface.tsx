export interface INode {
  row: number;
  column: number;
  isCell: boolean;
}

export interface GameProps {
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
  speed: string;
  handleRunning: () => void;
  handleClearGrid: () => void;
  handleSlider: any;
}
