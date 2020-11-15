import React from "react";
import "./Node.css";
import { NodeProps } from "../interface/interface";

const Node: React.FC<NodeProps> = ({
  row,
  column,
  isCell,
  handleOnClick,
  onMouseDown,
  onMouseUp,
  onMouseEnter,
}) => {
  const id = `${row}, ${column}`;

  const className = (): string => {
    if (isCell) return "node-cell";
    return "node";
  };

  return (
    <div
      id={id}
      data-testid={`${id}`}
      className={className()}
      onClick={() => handleOnClick()}
      onMouseEnter={() => {
        onMouseEnter();
      }}
      onMouseDown={() => {
        onMouseDown();
      }}
      onMouseUp={() => {
        onMouseUp();
      }}
    ></div>
  );
};

export default Node;
