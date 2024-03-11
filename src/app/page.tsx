import React from "react";

export default function Home() {
  console.log(process.env.COCKROCH_DB_URL);
  return (
    <main className="w-full min-h-screen">
      <div className="container">
        <div className="px-8 py-10 flex flex-col justify-center"></div>
      </div>
    </main>
  );
}
