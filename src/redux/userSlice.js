import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  loggedIn: JSON.parse(localStorage.getItem("loggedIn")) || false,
  user: JSON.parse(localStorage.getItem("user")) || {},
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return (state = {
        ...state,
        users: [...state.users, action.payload],
      });
    },
    logIn: (state) => {
      return (state = {
        ...state,
        loggedIn: true,
      });
    },
    logOut: (state) => {
      return (state = {
        ...state,
        loggedIn: false,
      });
    },
    enterUser: (state, action) => {
      return state = {
        ...state,
        user: action.payload,
      };
    },
    deleteUser: (state, action) => {
      const filteredUsers = state.users.filter(
        (item) => item.id !== action.payload
      );
      state.users = filteredUsers;
    },
  },
});
export const { addUser, logIn, logOut, enterUser, deleteUser } =
  userSlice.actions;
export default userSlice.reducer;
