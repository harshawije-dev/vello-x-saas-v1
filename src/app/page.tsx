import LoginComponent from "@/components/server/Login.server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DB from "@/config/db.config";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-slate-100">
      <div className="container">
        <div className="px-8 py-10 flex flex-col justify-center items-center">
          <div className="w-[600px] h-auto py-8 px-5 bg-white flex flex-col gap-3 rounded-lg">
            <div className="flex flex-col items-center mb-3 space-y-1">
              <h2 className="font-semibold text-3xl">Welcome</h2>
              <p className="text-slate-500 text-base">
                Please login to continue
              </p>
              <LoginComponent />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
