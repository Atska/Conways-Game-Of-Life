import React from "react";
import "./Node.css";
//interface
import { NodeProps } from "../interface/interface";

const Node: React.FC<NodeProps> = ({
  row,
  column,
  isCell,
  handleNodeClick,
}) => {
  const id = `${row}, ${column}`;

  const className = (): string => {
    if (isCell) return "node-cell";
    return "node";
  };

  return (
    <div
      id={id}
      className={className()}
      onClick={() => handleNodeClick()}
    ></div>
  );
};

export default Node;
