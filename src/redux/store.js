import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import gigReducer from "./gigs/gigSice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    gig: gigReducer,
  },
});
