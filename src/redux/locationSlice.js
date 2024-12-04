import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch locations from API
export const fetchLocations = createAsyncThunk('locations/fetchLocations', async () => {
  const response = await axios.get('https://example.com/api/locations');
  return response.data.locations; // Assuming the API response contains a "locations" array
});

const locationSlice = createSlice({
  name: 'locations',
  initialState: {
    locations: [],
    filteredLocations: [],
    loading: false,
  },
  reducers: {
    filterLocations: (state, action) => {
      const query = action.payload.toLowerCase();
      state.filteredLocations = state.locations.filter(location =>
        location.name.toLowerCase().includes(query) ||
        location.description.toLowerCase().includes(query)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.locations = action.payload;
        state.filteredLocations = action.payload;
        state.loading = false;
      })
      .addCase(fetchLocations.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { filterLocations } = locationSlice.actions;

export default locationSlice.reducer;
