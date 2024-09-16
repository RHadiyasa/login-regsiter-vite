import { Button } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid gap-3">
        <p className="font-bold text-xl text-center">Welcome Page</p>
        <div className="flex gap-2">
          <Link to={"/login"}>
            <Button className="p-2 text-white" radius="lg" color="secondary">
              Login
            </Button>
          </Link>
          <Link to={"/register"}>
            <Button className="p-2 text-white" radius="lg" color="danger">
              Regsiter
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
