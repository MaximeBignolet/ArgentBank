import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("auth_token") || null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("auth_token", action.payload);
    },
    removeToken: (state) => {
      state.token = null;
      localStorage.removeItem("auth_token");
    },
  },
});

export const { setToken, removeToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
