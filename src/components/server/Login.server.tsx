import React from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";

async function LoginComponent() {
  return (
    <div className="py-7 w-[480px]">
      <form action="">
        {/* email */}
        <div className="mb-3 mx-10 flex flex-col gap-2">
          <Input type="email" placeholder="Email" />
        </div>
        {/* password */}
        <div className="mb-3 mx-10 flex flex-col gap-2">
          <Input type="password" placeholder="Password" />
        </div>
        <div className="flex justify-center py-7 mx-10">
          <Button
            type="submit"
            variant={"default"}
            className="w-full capitalize font-semibold text-balance bg-blue-600 hover:bg-blue-300 hover:text-blue-700"
          >
            sign in
          </Button>
        </div>
      </form>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
          or
        </span>
      </div>
      <div className="flex gap-3 justify-center mx-10 pt-5 items-center">
        <p className="capitalize text-sm font-medium">new user ?</p>
        <Link href={"#"}>
          <span className="text-blue-500 hover:text-slate-900 underline capitalize text-sm">
            create new account
          </span>
        </Link>
      </div>
    </div>
  );
}

export default LoginComponent;
