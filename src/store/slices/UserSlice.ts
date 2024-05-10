import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postUserData } from "../../services/users/UserServices";

interface UserState {
  firstName: string;
  lastName: string;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  firstName: "",
  lastName: "",
  loading: false,
  error: null,
};

export const fetchedUser = createAsyncThunk(
  "user/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await postUserData();
      return {
        email: response.email,
        firstName: response.firstname,
        lastName: response.lastname,
      };
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    udpateFirstname: (state, action) => {
      state.firstName = action.payload;
    },
    updateLastname: (state, action) => {
      state.lastName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchedUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchedUser.fulfilled, (state, action) => {
        const firstname = action.payload;
        const lastName = action.payload;
        if (firstname && lastName) {
          state.firstName = firstname.firstName;
          state.lastName = lastName.lastName;
          state.loading = false;
        }
      })
      .addCase(fetchedUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      });
  },
});

export const { udpateFirstname, updateLastname } = userSlice.actions;
export const userReducer = userSlice.reducer;
