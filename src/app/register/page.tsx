import CreateAccountComponent from "@/components/server/CreateAccount.server";
import React from "react";

function RegisterPage() {
  return (
    <div className="w-full min-h-screen bg-slate-100">
      <div className="container">
        <div className="px-8 py-10 flex flex-col justify-center items-center">
          <div className="w-[600px] h-auto py-8 px-5 bg-white flex flex-col gap-3 rounded-lg">
            <div className="flex flex-col items-center mb-8 space-y-1">
              <h4 className="px-5 py-2 font-bold bg-slate-300/10 mb-3 text-slate-700">
                VelloX
              </h4>
              <h2 className="font-semibold text-3xl">Welcome!</h2>
              <p className="text-slate-500 text-base">Register and continue</p>
              <CreateAccountComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
