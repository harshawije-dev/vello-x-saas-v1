"use client";
import { useDraggable } from "@dnd-kit/core";
import React from "react";

function Draggable(props: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const styleSheet = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <h2
      className="text-slate-500 font-semibold text-lg capitalize w-fit"
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={styleSheet}
    >
      {props.children}
    </h2>
  );
}

export default Draggable;
