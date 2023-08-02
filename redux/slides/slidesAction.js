import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../config";
import axios from "axios";

// ================================================================= GET ALL SLIDES
export const getAllSlides = createAsyncThunk(
  "getAllSlides",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${baseUrl}/hero-slides`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
        if (res.status === 200 || res.status === 201) {
        return res;
      }
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);
