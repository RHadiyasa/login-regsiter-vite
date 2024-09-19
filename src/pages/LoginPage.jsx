import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../lib/axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.get("/users", {
        params: { username, password },
      });

      if (response.data[0]) {
        // truthy
        // Kalo akunnya ada, navigate ke halaman profile
        navigate("/profile");

      } else alert("akun tidak ada");

      console.log(response.data[0]);
    } catch (error) {}
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid gap-3  w-1/4">
        <div className="font-bold text-xl">Login to your account</div>
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
            <p className="text-sm font-semibold">Password</p>
            <Input
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <Button color="primary" onClick={handleLogin}>
          Login
        </Button>
        <Link to={"/register"}>
          <p>Don't have an account?</p>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
