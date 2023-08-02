import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../config";
import axios from "axios";



// ================================================================= GET ALL RIDERS
export const getAllRiders = createAsyncThunk(
    "getAllRiders",
    async (_, { rejectWithValue}) => {
        try {
            const res = await axios.get(`${baseUrl}/riders`, {
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (res.status === 200 || res.status === 201) {
              return res;
            }
         }
        catch (err) {
            console.log(err)
            return rejectWithValue(err)
        }
    });