export interface INode {
  row: number;
  column: number;
  isCell: boolean;
}

export interface GameProps {
  isRunning: boolean;
  grid: any;
}

export interface NodeProps {
  row: number;
  column: number;
  isCell: boolean;
  handleNodeClick: any;
}
