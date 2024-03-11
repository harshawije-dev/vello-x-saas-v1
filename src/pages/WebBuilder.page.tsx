"use client";
import React from "react";

function WebBuilderPage() {
  const componentRef = React.useRef<any>(null);

  const generate = () => {
    console.log(componentRef.current);
  };
  return (
    <>
      <div
        className="flex px-4 py-2.5 flex-col gap-2 border-2 border-slate-300 rounded-md w-[200px] h-[200px]"
        ref={componentRef}
      >
        <h2 className="capitalize text-blue-500 font-semibold">Hello world</h2>
      </div>

      <button
        type="button"
        onClick={generate}
        className="bg-slate-300 text-black p-4"
      >
        Generate
      </button>
    </>
  );
}

export default WebBuilderPage;
