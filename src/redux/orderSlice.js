import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: null,
  reducers: {
    submitOrder: (state, action) => action.payload,
  },
});

export const { submitOrder } = orderSlice.actions;
export default orderSlice.reducer;
