import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Redux/RegisterForm/reducer";

const store = configureStore({
  reducer: {
    form: userReducer,
  },
});

export default store;
