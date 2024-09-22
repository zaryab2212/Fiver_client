import axios from "axios";

export const userLogin = async (login) => {
  const { loginn } = login;
  const res = await axios.post("/auth/login", {
    loginn,
  });

  return res;
};

export const userRegister = async (user) => {
  const data = await axios.post("/auth/register/", user, {
    withCredentials: true,
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data.data;
};

// export const userLogOut = async () => {
//    const data = await axios.post("/auth/login/", {
//      userName: "seller1",
//      password: "Qwerty123",
//    });

//    return data.data;
//  };

export const getUserInfo = async () => {
  const res = await axios.get("/auth/userinfo", {
    withCredentials: true,
  });
  return res.data;
};
