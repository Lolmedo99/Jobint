import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";




export const sendAllSearches = createAsyncThunk("ALL_SEARCH", async () => {
  try {
    const data = await axios.get("http://localhost:8000/api/search2/all");
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

export const getOneSearches = createAsyncThunk("ONE_SEARCH", async (id) => {
  try {
    const data = await axios.get(`http://localhost:8000/api/search2/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
});


const searchReducer = createReducer(
  {},
  {
    [sendAllSearches.fulfilled]: (state, action) => action.payload,
    [getOneSearches.fulfilled]: (state, action) => action.payload,
  }
);

export default searchReducer;
