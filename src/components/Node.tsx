import React from "react";
import "./Node.css";

interface NodeProps {
  row: number;
  column: number;
  isCell: boolean;
}

const Node: React.FC<NodeProps> = ({ row, column, isCell }) => {
  function className(): string {
    if (isCell) return "node-cell";
    return "node";
  }
  return <div className={className()}></div>;
};

export default Node;
