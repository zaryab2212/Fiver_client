import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createGig,
  fetchGigByCategory,
  getAllGig,
  getSingleGig,
  removeGig,
} from "./gigApi";

const initialState = {
  Gigs: [],
  error: null,
  loading: false,
  newGig: {},
};

export const getSingleGigAsync = createAsyncThunk(
  "gig/getSingleGig",
  async (id) => {
    const res = await getSingleGig(id);
    return res.data;
  }
);

export const fetchGigByCategoryAsync = createAsyncThunk(
  "gig/fetchGigByCategory",
  async (formdata) => {
    const res = await fetchGigByCategory(formdata);
    return res.data;
  }
);
export const createGigAsync = createAsyncThunk(
  "gig/creategig",
  async (data, { rejectWithValue }) => {
    try {
      const res = await createGig(data);

      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getAllGigAsync = createAsyncThunk("gig/getAllGig", async () => {
  const res = await getAllGig();
  return res.data;
});

export const removeGigAsync = createAsyncThunk("gig/removeGig", async (id) => {
  const res = await removeGig(id);
  return res.data;
});

export const gigSlice = createSlice({
  name: "gig",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchGigByCategoryAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchGigByCategoryAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.Gigs = [...action.payload.gigs];
      })
      .addCase(fetchGigByCategoryAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getAllGigAsync.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllGigAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllGigAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.Gigs = [...action.payload.gigs];
      })
      .addCase(removeGigAsync.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(removeGigAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeGigAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // const index = state.Gigs?.findIndex(
        //   (index) => index._id === action.payload.deletedGig._id
        // );
        // state.Gigs.splice(index, 1);

        state.Gigs = state.Gigs.filter(
          (gigId) => gigId._id !== action.payload.deletedGig._id
        );
      })
      .addCase(getSingleGigAsync.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getSingleGigAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getSingleGigAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.newGig = action.payload.gig;
      })
      .addCase(createGigAsync.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createGigAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createGigAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.newGig = action.payload;
      }),
});

export default gigSlice.reducer;
