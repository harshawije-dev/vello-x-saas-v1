"use client";
import React from "react";
import Draggable from "@/app/components/client/Draggable";
import Droppable from "@/app/components/client/Droppable";
import { DndContext } from "@dnd-kit/core";
import { v4 as uuid } from "uuid";

function DndContextFeature() {
  return (
    <DndContext>
      <Draggable>Hello World</Draggable>
      <Droppable key={uuid()} />
    </DndContext>
  );
}

export default DndContextFeature;
