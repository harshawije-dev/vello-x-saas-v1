"use client";
import { useDroppable } from "@dnd-kit/core";
import { v4 as uuid } from "uuid";
import React from "react";

function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: "81c3a887",
  });

  const styleSheet = {
    color: isOver ? "green" : undefined,
  };
  return (
    <div
      ref={setNodeRef}
      style={styleSheet}
      className="bg-slate-50 min-w-[500px] min-h-[450px]"
    >
      {props.children}
    </div>
  );
}

export default Droppable;
