import { Button, Input, user } from "@nextui-org/react";
import React, { useState } from "react";
import { axiosInstance } from "../lib/axios";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axiosInstance.post("/users", { username, email, password });
      navigate("/login");
    } catch (error) {
      console.error(error.message);
    }

    // redirect to login page
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid gap-3  w-1/4">
        <div className="font-bold text-xl">Register your account</div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm font-semibold">Username</p>
            <Input
              type="text"
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Email</p>
            <Input
              type="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Password</p>
            <Input
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <Button color="primary" onClick={handleRegister}>
          Register Now
        </Button>
        <div className="flex text-sm">
          <span>Already have an account? </span>
          <Link to={"/login"}>
            <span className="pl-1 text-blue-800 font-bold">Click here</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
