import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { LoginAsync } from "../redux/user/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { error, login, loading, token } = useSelector((state) => state.user);
  const [loginn, setLogin] = useState({
    userName: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setLogin({ ...loginn, [e.target.name]: e.target.value });
  };
  const handleDemoUser = () => {
    let loginn = { userName: "admin", password: "Qwerty123" };
    dispatch(LoginAsync({ loginn }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(LoginAsync({ loginn }));

    setLogin({ userName: "", password: "" });
  };

  if (token) {
    return navigate("/");
  }

  return (
    <div className="container">
      <div className="flex justify-center align-items-center d-flex w-100 flex-column gap-4 mt-4">
        <h2>Login</h2>
        <form
          className="flex w-100 d-flex justify-center align-items-center flex-column gap-4"
          onSubmit={handleLogin}
        >
          {" "}
          <input
            className=" w-50 rounded-3 p-3"
            type="text"
            placeholder="Enter your username"
            onChange={handleInput}
            value={loginn?.userName}
            name="userName"
          />
          <input
            className=" w-50 rounded-3 p-3"
            type="password"
            placeholder="Enter your password"
            onChange={handleInput}
            value={loginn.password}
            name="password"
          />
          {error ? <div style={{ color: "red" }}> {error.message}</div> : null}
          <button type="submit" className="w-50 btn btn-success rounded-3 p-3">
            Login
          </button>
          <button
            type="button"
            onClick={handleDemoUser}
            className="w-50 btn btn-success rounded-3 p-3"
          >
            Login as Demo User
          </button>
        </form>

        <p>
          Doesn't have an account ?{" "}
          <span>
            <Link className="f-3 text-primary" to="/register">
              Create an account
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
