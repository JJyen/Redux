import { configureStore, } from "@reduxjs/toolkit";
import updateReducer from "./updateTodos";

export default configureStore({
  reducer: {
    update: updateReducer,
  }
});