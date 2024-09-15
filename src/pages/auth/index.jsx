import SignIn from "@/components/auth/sign-in";
import SignUp from "@/components/auth/sign-up";
import CommonButton from "@/components/common-button";
import React, { useState } from "react";

const AuthPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="flex-grow flex flex-col justify-center items-center p-8">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Welcome to
          </h1>
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
            My Task Management App
          </h2>
          <div className="my-6">
            {isLoginView ? <SignIn /> : <SignUp />}
          </div>
          <div className="mt-6 text-center flex justify-center">
            <CommonButton
              onClick={() => setIsLoginView(!isLoginView)}
              buttonText={isLoginView ? "Switch to Sign Up" : "Switch to Sign In"}
              type="button"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;