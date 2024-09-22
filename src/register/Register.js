import React, { useState } from "react";
import "./register.css";
import { useDispatch, useSelector } from "react-redux";
import { RegisterAsync } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { ImgUpload } from "../helper/ImgUpload";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [erros, setErrors] = useState(null);
  const [isSubmited, setIsSubmited] = useState(false);
  const { error, loading, register } = useSelector((state) => state.user);
  const [inputFile, setInputFile] = useState("");
  const [inputRegister, setInputRegister] = useState({
    userName: "",
    password: "",
    email: "",
    country: "",
    phone: "",
    desc: "",
  });

  const handleRegChange = (e) => {
    setInputRegister({ ...inputRegister, [e.target.name]: e.target.value });
  };

  const handleRegSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("userName", inputRegister.userName);
    formdata.append("password", inputRegister.password);
    formdata.append("email", inputRegister.email);
    formdata.append("country", inputRegister.country);
    formdata.append("desc", inputRegister.desc);
    formdata.append("phone", inputRegister.phone);
    // formdata.append("file", inputFile);

    if (inputFile) {
      const uploadres = await ImgUpload(inputFile);
      formdata.set("image", `${uploadres.url}`);
    }
    dispatch(RegisterAsync(formdata));

    setIsSubmited(true);
  };

  if (isSubmited && !error) {
    setInputRegister({
      userName: "",
      password: "",
      email: "",
      image: null,
      country: "",
      phone: "",
      desc: "",
    });
    navigate("/login");

    setIsSubmited(false);
  }
  return (
    <div className="container">
      <div className="flex justify-center align-items-center d-flex w-100 flex-column gap-4 mt-4">
        <h2>Register</h2>
        <form
          className="flex w-100 d-flex justify-center align-items-center flex-column gap-4"
          onSubmit={handleRegSubmit}
        >
          {" "}
          <input
            className=" w-50 rounded-3 p-3"
            type="text"
            placeholder="Enter your username"
            onChange={handleRegChange}
            value={inputRegister?.userName}
            name="userName"
          />
          <input
            className=" w-50 rounded-3 p-3"
            type="password"
            placeholder="Enter your password"
            onChange={handleRegChange}
            value={inputRegister.password}
            name="password"
          />
          <input
            className=" w-50 rounded-3 p-3"
            type="email"
            placeholder="Enter your email"
            onChange={handleRegChange}
            value={inputRegister.email}
            name="email"
          />
          <input
            className=" w-50 rounded-3 p-3"
            type="file"
            placeholder="Enter your password"
            onChange={(e) => setInputFile(e.target.files[0])}
          />
          <input
            className=" w-50 rounded-3 p-3"
            type="text"
            placeholder="Enter your contery"
            onChange={handleRegChange}
            value={inputRegister.country}
            name="country"
          />
          <input
            className=" w-50 rounded-3 p-3"
            type="number"
            placeholder="Enter your phone"
            onChange={handleRegChange}
            value={inputRegister.phone}
            name="phone"
          />
          <textarea
            className=" m-2 w-50 rounded-3 p-3"
            type="text"
            placeholder="Enter your desc"
            onChange={handleRegChange}
            value={inputRegister.desc}
            name="desc"
          />
          {console.log(error)}
          {error ? (
            <div style={{ color: "red" }}> {error?.data?.message}</div>
          ) : null}
          <button type="submit" className="w-50 btn btn-success rounded-3 p-3">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
