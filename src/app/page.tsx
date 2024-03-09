import dynamic from "next/dynamic";
import DndContextFeature from "./feature/DndContext.feature";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <div className="container">
        <div className="px-8 py-10 flex flex-col justify-center">
          <DndContextFeature />
        </div>
      </div>
    </main>
  );
}
