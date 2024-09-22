import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserInfo, userLogin, userRegister } from "./userApi";
import axios from "axios";

const initialState = {
  login: {},
  register: null,
  token: null,
  error: null,
  loading: false,
};

export const getUserInfoAsync = createAsyncThunk(
  "user/getUserInfo",
  async () => {
    const res = await getUserInfo();
    return res;
  }
);

export const RegisterAsync = createAsyncThunk(
  "user/userRegister",
  async (reg, { rejectWithValue }) => {
    try {
      const res = await userRegister(reg);
      return res;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response);
    }
  }
);
export const userLogOutAsync = createAsyncThunk(
  "user/userLogOut",
  async (a, { rejectWithValue }) => {
    try {
      const res = await axios.get("/auth/logout", {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);
export const LoginAsync = createAsyncThunk(
  "user/userLogin",
  async (login, { rejectWithValue }) => {
    const { userName, password } = login.loginn;
    console.log(login);

    try {
      const res = await axios.post(
        "/auth/login",
        {
          userName,
          password,
        },
        { withCredentials: true }
      );
      return res.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        return rejectWithValue("No response from the server");
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state) => {
      state.login = null;
      state.token = null;
      state.error = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfoAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUserInfoAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.login = null;
      })
      .addCase(getUserInfoAsync.fulfilled, (state, action) => {
        state.login = action.payload.user;
        state.loading = false;
        // state.token = action.payload.token;
        state.error = null;
      })

      .addCase(LoginAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(LoginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(LoginAsync.fulfilled, (state, action) => {
        state.login = action.payload.userData;
        state.loading = false;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(RegisterAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(RegisterAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(RegisterAsync.fulfilled, (state, action) => {
        state.register = action.payload.newUser;
        state.loading = false;
        state.error = null;
        //state.token = action.payload;
      })
      .addCase(userLogOutAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userLogOutAsync.fulfilled, (state, action) => {
        state.login = null;
        state.token = null;
        state.error = {};
      });
  },
});

// Action creators are generated for each case reducer function
// export const { userLogout } = userSlice.actions;

export default userSlice.reducer;
